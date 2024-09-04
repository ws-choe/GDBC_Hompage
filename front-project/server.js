require('dotenv').config(); // 환경 변수를 로드

const express = require('express'); // Express 모듈
const mysql = require('mysql2'); // MySQL 모듈
const bodyParser = require('body-parser'); // Body-Parser 모듈
const cors = require('cors'); // CORS 모듈
const multer = require('multer'); // Multer 모듈
const path = require('path'); // Path 모듈
const fs = require('fs'); // File System 모듈
const jwt = require('jsonwebtoken'); // JWT 모듈


const app = express(); // Express 앱 생성

// 비밀 키 로드
const secretKey = process.env.SECRET_KEY;

// 미들웨어 설정
app.use(bodyParser.json()); // JSON 바디 파서
app.use(cors()); // CORS 설정

// Multer 설정
const upload = multer({
    storage: multer.diskStorage({
        destination: (req, file, cb) => {
            cb(null, 'uploads/');
        },
        filename: (req, file, cb) => {
            const ext = path.extname(file.originalname);
            cb(null, `${Date.now()}${ext}`);
        }
    }),
    limits: { fileSize: 10 * 1024 * 1024 },
    fileFilter: (req, file, cb) => {
        const allowedTypes = ['image/jpeg', 'image/png', 'image/gif'];
        if (allowedTypes.includes(file.mimetype)) {
            cb(null, true);
        } else {
            cb(new Error('Only image files are allowed!'), false);
        }
    }
});

// JWT 생성 함수
function generateToken(user) {
    return jwt.sign({ id: user.id, username: user.username }, secretKey, { expiresIn: '1h' });
}

// JWT 검증 미들웨어
function authenticateToken(req, res, next) {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    if (token == null) return res.sendStatus(401);

    jwt.verify(token, secretKey, (err, user) => {
        if (err) return res.sendStatus(403);
        req.user = user;
        next();
    });
}

// 데이터베이스 연결 설정
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'zxcg1114',
    database: 'mytest',
    port: 3306
});

db.connect(err => {
    if (err) {
        console.error('데이터베이스 연결 실패:', err.stack);
        return;
    }
    console.log('데이터베이스 연결 성공');
});

// 회원가입 라우트
app.post('/register', (req, res) => {
    const { username, password, email, address, detailedAddress, phone, signupMethod } = req.body;

    const userToken = generateToken({ username });

    const query = 'INSERT INTO vuetest (username, password, email, address, detailedAddress, phone, signupMethod, token) VALUES (?, ?, ?, ?, ?, ?, ?, ?)';
    db.execute(query, [username, password, email, address, detailedAddress, phone, signupMethod, userToken], (err, results) => {
        if (err) {
            console.error('회원가입 실패:', err);
            return res.status(500).json({ error: '회원가입에 실패했습니다.' });
        }
        console.log('회원가입 성공:', results);
        res.status(200).json({ message: '회원가입에 성공했습니다.' });
    });
});

// 로그인 라우트
app.post('/login', (req, res) => {
    const { username, password, token } = req.body;
  
    const query = 'SELECT id, username, grade, password, token FROM vuetest WHERE username = ?';
    db.execute(query, [username], (err, results) => {
      if (err) {
        console.error('로그인 실패:', err);
        return res.status(500).json({ error: '로그인에 실패했습니다.' });
      } else if (results.length > 0) {
        const user = results[0];
        
        // 입력된 토큰이 데이터베이스에 저장된 토큰과 일치하는지 확인
        if (token !== user.token) {
          return res.status(401).json({ error: '토큰이 일치하지 않습니다.' });
        }
  
        // 비밀번호 비교 (평문 비교)
        if (password !== user.password) {
          return res.status(401).json({ error: '아이디 또는 비밀번호가 일치하지 않습니다.' });
        }
  
        // 로그인 성공
        res.status(200).json({
          message: '로그인에 성공했습니다.',
          id: user.id,
          username: user.username,
          grade: user.grade,
          token: user.token
        });
      } else {
        res.status(401).json({ error: '아이디 또는 비밀번호가 일치하지 않습니다.' });
      }
    });
  });
  
// 로그아웃 라우트
app.post('/logout', (req, res) => {
    req.session.destroy((err) => {
        if (err) {
            console.error('로그아웃 실패:', err);
            return res.status(500).json({ error: '로그아웃에 실패했습니다.' });
        }
        res.status(200).json({ message: '로그아웃에 성공했습니다.' });
    });
});

// 게시물 작성 라우트
app.post('/posts', upload.single('image'), (req, res) => {
    const { title, content, userId } = req.body;
    const imagePath = req.file ? req.file.filename : null;

    if (!title || !content || !userId) {
        return res.status(400).send({ success: false, message: '필수 필드가 누락되었습니다.' });
    }

    const sql = 'INSERT INTO posts (title, content, userId, views, image) VALUES (?, ?, ?, 0, ?)';
    db.query(sql, [title, content, userId, imagePath], (err, results) => {
        if (err) {
            console.error('게시물 생성 오류:', err);
            return res.status(500).send({ success: false, message: '게시물 생성 오류' });
        }
        res.status(201).json({ success: true, id: results.insertId });
    });
});

// 게시물 수정 라우트
app.put('/posts/:id', upload.single('image'), (req, res) => {
    const { id } = req.params;
    const { title, content, removeImage } = req.body;
    const imagePath = req.file ? req.file.filename : null;

    if (!title || !content) {
        return res.status(400).send({ success: false, message: '필수 필드가 누락되었습니다.' });
    }

    const getPostQuery = 'SELECT image FROM posts WHERE id = ?';
    db.query(getPostQuery, [id], (err, results) => {
        if (err) {
            console.error('게시물 조회 오류:', err);
            return res.status(500).send({ success: false, message: '게시물 조회 오류' });
        }

        if (results.length === 0) {
            return res.status(404).send({ success: false, message: '해당 ID의 게시물을 찾을 수 없습니다.' });
        }

        const oldImagePath = results[0].image;

        const updatePostQuery = `
            UPDATE posts 
            SET title = ?, content = ?, image = ? 
            WHERE id = ?
        `;
        db.query(updatePostQuery, [title, content, imagePath || (removeImage === 'true' ? null : oldImagePath), id], (err) => {
            if (err) {
                console.error('게시물 수정 오류:', err);
                return res.status(500).send({ success: false, message: '게시물 수정 오류' });
            }

            if (imagePath && oldImagePath) {
                fs.unlink(path.join(__dirname, 'uploads', oldImagePath), (err) => {
                    if (err) console.error('기존 이미지 삭제 오류:', err);
                });
            }

            if (removeImage === 'true' && oldImagePath) {
                fs.unlink(path.join(__dirname, 'uploads', oldImagePath), (err) => {
                    if (err) console.error('기존 이미지 삭제 오류:', err);
                });
            }

            res.status(200).send({ success: true });
        });
    });
});


// 게시물 삭제 라우트
app.delete('/posts/:id', (req, res) => {
    const { id } = req.params;

    db.query('DELETE FROM comments WHERE postId = ?', [id], (err) => {
        if (err) {
            console.error('댓글 삭제 오류:', err);
            return res.status(500).send({ success: false, message: '댓글 삭제 오류' });
        }

        db.query('SELECT image FROM posts WHERE id = ?', [id], (err, results) => {
            if (err) {
                console.error('게시물 조회 오류:', err);
                return res.status(500).send({ success: false, message: '게시물 조회 오류' });
            }

            const imagePath = results[0]?.image;
            if (imagePath) {
                const filePath = path.join(__dirname, 'uploads', imagePath);

                fs.unlink(filePath, (err) => {
                    if (err) {
                        console.error('이미지 파일 삭제 오류:', err);
                    }
                });
            }

            db.query('DELETE FROM posts WHERE id = ?', [id], (err) => {
                if (err) {
                    console.error('게시물 삭제 오류:', err);
                    return res.status(500).send({ success: false, message: '게시물 삭제 오류' });
                }
                res.sendStatus(200);
            });
        });
    });
});

// 게시물 조회수 증가 라우트
app.put('/posts/:id/view', (req, res) => {
    const { id } = req.params;
    db.query('UPDATE posts SET views = views + 1 WHERE id = ?', [id], (err) => {
        if (err) {
            console.error('조회수 업데이트 오류:', err);
            return res.status(500).send({ success: false, message: '조회수 업데이트 오류' });
        }
        res.sendStatus(200);
    });
});

// 게시물 가져오기
app.get('/posts', (req, res) => {
    const page = parseInt(req.query.page, 10) || 1;
    const limit = 10; // 페이지당 항목 수
    const offset = (page - 1) * limit;

    const query = 'SELECT * FROM posts LIMIT ? OFFSET ?';
    db.query(query, [limit, offset], (err, results) => {
        if (err) {
            console.error('게시물 조회 오류:', err);
            return res.status(500).json({ error: '게시물 조회 오류' });
        }
        res.json({
            posts: results,
            totalPages: Math.ceil(results.length / limit) // 총 페이지 수 계산
        });
    });
});

// 게시글 상세 내용 가져오기
app.get('/posts/:id', (req, res) => {
    const { id } = req.params;

    const query = 'SELECT * FROM posts WHERE id = ?';
    db.query(query, [id], (err, results) => {
        if (err) {
            console.error('게시글 조회 오류:', err);
            return res.status(500).json({ error: '게시글 조회 오류' });
        }
        if (results.length === 0) {
            return res.status(404).json({ error: '게시글을 찾을 수 없습니다.' });
        }
        res.json(results[0]);
    });
});

// 댓글 작성 라우트
app.post('/posts/:id/comments', (req, res) => {
    const { id } = req.params;
    const { content, authorId } = req.body;

    if (!content || !authorId) {
        return res.status(400).send({ error: '댓글 내용과 작성자 ID가 필요합니다.' });
    }

    const query = 'INSERT INTO comments (postId, authorId, content) VALUES (?, ?, ?)';
    db.query(query, [id, authorId, content], (err) => {
        if (err) {
            console.error('댓글 작성 오류:', err);
            return res.status(500).send({ error: '댓글 작성 오류' });
        }
        res.status(201).send({ success: true });
    });
});

// 댓글 조회 라우트
app.get('/posts/:id/comments', (req, res) => {
    const { id } = req.params;
    const query = `
        SELECT comments.id, comments.content, comments.createdAt, vuetest.username, comments.authorId
        FROM comments
        JOIN vuetest ON comments.authorId = vuetest.id
        WHERE comments.postId = ?
    `;
    db.query(query, [id], (err, results) => {
        if (err) {
            console.error('댓글 조회 오류:', err);
            return res.status(500).send({ error: '댓글 조회 오류' });
        }
        res.json(results);
    });
});

// 댓글 삭제 라우트
app.delete('/comments/:id', (req, res) => {
    const { id } = req.params;
    db.query('DELETE FROM comments WHERE id = ?', [id], (err) => {
        if (err) {
            console.error('댓글 삭제 오류:', err);
            return res.status(500).send({ error: '댓글 삭제 오류' });
        }
        res.sendStatus(200);
    });
});


// 자유 게시판 게시물 작성 라우트
app.post('/freeboard', upload.single('image'), (req, res) => {
    const { title, content, userId } = req.body;
    const imagePath = req.file ? req.file.filename : null;

    if (!title || !content || !userId) {
        return res.status(400).send({ success: false, message: '필수 필드가 누락되었습니다.' });
    }

    const sql = 'INSERT INTO freeboard (title, content, userId, views, image) VALUES (?, ?, ?, 0, ?)';
    db.query(sql, [title, content, userId, imagePath], (err, results) => {
        if (err) {
            console.error('게시물 생성 오류:', err);
            return res.status(500).send({ success: false, message: '게시물 생성 오류' });
        }
        res.status(201).json({ success: true, id: results.insertId });
    });
});

// 게시물 수정 라우트
app.put('/freeboard/:id', upload.single('image'), (req, res) => {
    const { id } = req.params;
    const { title, content, removeImage } = req.body;
    const imagePath = req.file ? req.file.filename : null;

    if (!title || !content) {
        return res.status(400).send({ success: false, message: '필수 필드가 누락되었습니다.' });
    }

    const getPostQuery = 'SELECT image FROM freeboard WHERE id = ?';
    db.query(getPostQuery, [id], (err, results) => {
        if (err) {
            console.error('게시물 조회 오류:', err);
            return res.status(500).send({ success: false, message: '게시물 조회 오류' });
        }

        const oldImagePath = results[0].image;

        const updatePostQuery = `
            UPDATE freeboard
            SET title = ?, content = ?, image = ? 
            WHERE id = ?
        `;
        db.query(updatePostQuery, [title, content, imagePath || (removeImage === 'true' ? null : oldImagePath), id], (err) => {
            if (err) {
                console.error('게시물 수정 오류:', err);
                return res.status(500).send({ success: false, message: '게시물 수정 오류' });
            }

            if (imagePath && oldImagePath) {
                fs.unlink(path.join(__dirname, 'uploads', oldImagePath), (err) => {
                    if (err) console.error('기존 이미지 삭제 오류:', err);
                });
            }

            if (removeImage === 'true' && oldImagePath) {
                fs.unlink(path.join(__dirname, 'uploads', oldImagePath), (err) => {
                    if (err) console.error('기존 이미지 삭제 오류:', err);
                });
            }

            res.status(200).send({ success: true });
        });
    });
});

// 게시물 삭제 라우트
app.delete('/freeboard/:id', (req, res) => {
    const { id } = req.params;

    db.query('DELETE FROM comments WHERE postId = ?', [id], (err) => {
        if (err) {
            console.error('댓글 삭제 오류:', err);
            return res.status(500).send({ success: false, message: '댓글 삭제 오류' });
        }

        db.query('SELECT image FROM freeboard WHERE id = ?', [id], (err, results) => {
            if (err) {
                console.error('게시물 조회 오류:', err);
                return res.status(500).send({ success: false, message: '게시물 조회 오류' });
            }

            const imagePath = results[0]?.image;
            if (imagePath) {
                const filePath = path.join(__dirname, 'uploads', imagePath);

                fs.unlink(filePath, (err) => {
                    if (err) {
                        console.error('이미지 파일 삭제 오류:', err);
                    }
                });
            }

            db.query('DELETE FROM freeboard WHERE id = ?', [id], (err) => {
                if (err) {
                    console.error('게시물 삭제 오류:', err);
                    return res.status(500).send({ success: false, message: '게시물 삭제 오류' });
                }
                res.sendStatus(200);
            });
        });
    });
});

// 게시물 조회수 증가 라우트
app.put('/freeboard/:id/view', (req, res) => {
    const { id } = req.params;
    db.query('UPDATE freeboard SET views = views + 1 WHERE id = ?', [id], (err) => {
        if (err) {
            console.error('조회수 업데이트 오류:', err);
            return res.status(500).send({ success: false, message: '조회수 업데이트 오류' });
        }
        res.sendStatus(200);
    });
});

// 게시물 가져오기
app.get('/freeboard', (req, res) => {
    console.log("자유 가져오기 성공했다고")
    const page = parseInt(req.query.page, 10) || 1;
    const limit = 10; // 페이지당 항목 수
    const offset = (page - 1) * limit;
    

    const query = 'SELECT * FROM freeboard LIMIT ? OFFSET ?';
    db.query(query, [limit, offset], (err, results) => {
        if (err) {
            console.error('게시물 조회 오류:', err);
            return res.status(500).json({ error: '게시물 조회 오류' });
        }
        res.json({
            freeboard: results,
            totalPages: Math.ceil(results.length / limit) // 총 페이지 수 계산
        });
    });
});

// 게시글 상세 내용 가져오기
app.get('/freeboard/:id', (req, res) => {
    console.log("게시물 상세내용 가져오기 성공했다고")
    const { id } = req.params;

    const query = 'SELECT * FROM freeboard WHERE id = ?';
    db.query(query, [id], (err, results) => {
        if (err) {
            console.error('게시글 조회 오류:', err);
            return res.status(500).json({ error: '게시글 조회 오류' });
        }
        if (results.length === 0) {
            return res.status(404).json({ error: '게시글을 찾을 수 없습니다.' });
        }
        res.json(results[0]);
    });
});

// 댓글 작성 라우트
app.post('/freeboard/:id/freeboardcomments', (req, res) => {
    const { id } = req.params;
    const { content, authorId } = req.body;

    if (!content || !authorId) {
        return res.status(400).send({ error: '댓글 내용과 작성자 ID가 필요합니다.' });
    }

    const query = 'INSERT INTO freeboardcomments (postId, authorId, content) VALUES (?, ?, ?)';
    db.query(query, [id, authorId, content], (err) => {
        if (err) {
            console.error('댓글 작성 오류:', err);
            return res.status(500).send({ error: '댓글 작성 오류' });
        }
        res.status(201).send({ success: true });
    });
});

// 댓글 조회 라우트
app.get('/freeboard/:id/freeboardcomments', (req, res) => {
    const { id } = req.params;
    console.log(`Fetching comments for post ID: ${id}`);
    const query = `
        SELECT freeboardcomments.id, freeboardcomments.content, freeboardcomments.createdAt, vuetest.username, freeboardcomments.authorId
        FROM freeboardcomments
        JOIN vuetest ON freeboardcomments.authorId = vuetest.id
        WHERE freeboardcomments.postId = ?
    `;
    db.query(query, [id], (err, results) => {
        if (err) {
            console.error('Error fetching comments:', err);
            return res.status(500).send({ error: 'Error fetching comments' });
        }
        if (results.length === 0) {
            return res.status(404).send({ message: 'No comments found' });
        }
        res.json(results);
    });
});

// 댓글 삭제 라우트
app.delete('/freeboardcomments/:id', (req, res) => {
    const { id } = req.params;
    db.query('DELETE FROM freeboardcomments WHERE id = ?', [id], (err) => {
        if (err) {
            console.error('댓글 삭제 오류:', err);
            return res.status(500).send({ error: '댓글 삭제 오류' });
        }
        res.sendStatus(200);
    });
});




// 머시기 게시판 게시물 작성 라우트
app.post('/qnaposts', upload.single('image'), (req, res) => {
    const { title, content, userId } = req.body;
    const imagePath = req.file ? req.file.filename : null;

    if (!title || !content || !userId) {
        return res.status(400).send({ success: false, message: '필수 필드가 누락되었습니다.' });
    }

    const sql = 'INSERT INTO qnaposts (title, content, userId, views, image) VALUES (?, ?, ?, 0, ?)';
    db.query(sql, [title, content, userId, imagePath], (err, results) => {
        if (err) {
            console.error('게시물 생성 오류:', err);
            return res.status(500).send({ success: false, message: '게시물 생성 오류' });
        }
        res.status(201).json({ success: true, id: results.insertId });
    });
});

// 게시물 수정 라우트
app.put('/qnaposts/:id', upload.single('image'), (req, res) => {
    const { id } = req.params;
    const { title, content, removeImage } = req.body;
    const imagePath = req.file ? req.file.filename : null;

    if (!title || !content) {
        return res.status(400).send({ success: false, message: '필수 필드가 누락되었습니다.' });
    }

    const getPostQuery = 'SELECT image FROM qnaposts WHERE id = ?';
    db.query(getPostQuery, [id], (err, results) => {
        if (err) {
            console.error('게시물 조회 오류:', err);
            return res.status(500).send({ success: false, message: '게시물 조회 오류' });
        }

        const oldImagePath = results[0].image;

        const updatePostQuery = `
            UPDATE qnaposts
            SET title = ?, content = ?, image = ? 
            WHERE id = ?
        `;
        db.query(updatePostQuery, [title, content, imagePath || (removeImage === 'true' ? null : oldImagePath), id], (err) => {
            if (err) {
                console.error('게시물 수정 오류:', err);
                return res.status(500).send({ success: false, message: '게시물 수정 오류' });
            }

            if (imagePath && oldImagePath) {
                fs.unlink(path.join(__dirname, 'uploads', oldImagePath), (err) => {
                    if (err) console.error('기존 이미지 삭제 오류:', err);
                });
            }

            if (removeImage === 'true' && oldImagePath) {
                fs.unlink(path.join(__dirname, 'uploads', oldImagePath), (err) => {
                    if (err) console.error('기존 이미지 삭제 오류:', err);
                });
            }

            res.status(200).send({ success: true });
        });
    });
});

// 게시물 삭제 라우트
app.delete('/qnaposts/:id', (req, res) => {
    const { id } = req.params;

    db.query('DELETE FROM comments WHERE postId = ?', [id], (err) => {
        if (err) {
            console.error('댓글 삭제 오류:', err);
            return res.status(500).send({ success: false, message: '댓글 삭제 오류' });
        }

        db.query('SELECT image FROM qnaposts WHERE id = ?', [id], (err, results) => {
            if (err) {
                console.error('게시물 조회 오류:', err);
                return res.status(500).send({ success: false, message: '게시물 조회 오류' });
            }

            const imagePath = results[0]?.image;
            if (imagePath) {
                const filePath = path.join(__dirname, 'uploads', imagePath);

                fs.unlink(filePath, (err) => {
                    if (err) {
                        console.error('이미지 파일 삭제 오류:', err);
                    }
                });
            }

            db.query('DELETE FROM qnaposts WHERE id = ?', [id], (err) => {
                if (err) {
                    console.error('게시물 삭제 오류:', err);
                    return res.status(500).send({ success: false, message: '게시물 삭제 오류' });
                }
                res.sendStatus(200);
            });
        });
    });
});

// 게시물 조회수 증가 라우트
app.put('/qnaposts/:id/view', (req, res) => {
    const { id } = req.params;
    db.query('UPDATE qnaposts SET views = views + 1 WHERE id = ?', [id], (err) => {
        if (err) {
            console.error('조회수 업데이트 오류:', err);
            return res.status(500).send({ success: false, message: '조회수 업데이트 오류' });
        }
        res.sendStatus(200);
    });
});

// 게시물 가져오기
app.get('/qnaposts', (req, res) => {
    console.log("ㅁㄴㅇㅁ 목록 가져오기 성공했다고")
    const page = parseInt(req.query.page, 10) || 1;
    const limit = 10; // 페이지당 항목 수
    const offset = (page - 1) * limit;
    

    const query = 'SELECT * FROM qnaposts LIMIT ? OFFSET ?';
    db.query(query, [limit, offset], (err, results) => {
        if (err) {
            console.error('게시물 조회 오류:', err);
            return res.status(500).json({ error: '게시물 조회 오류' });
        }
        res.json({
            freeboard: results,
            totalPages: Math.ceil(results.length / limit) // 총 페이지 수 계산
        });
    });
});

// 게시글 상세 내용 가져오기
app.get('/qnaposts/:id', (req, res) => {
    console.log("수강후기 상세내용 가져오기 성공했다고")
    const { id } = req.params;

    const query = 'SELECT * FROM qnaposts WHERE id = ?';
    db.query(query, [id], (err, results) => {
        if (err) {
            console.error('게시글 조회 오류:', err);
            return res.status(500).json({ error: '게시글 조회 오류' });
        }
        if (results.length === 0) {
            return res.status(404).json({ error: '게시글을 찾을 수 없습니다.' });
        }
        res.json(results[0]);
    });
});

// 댓글 작성 라우트
app.post('/qnaposts/:id/qnacomments', (req, res) => {
    const { id } = req.params;
    const { content, authorId } = req.body;

    if (!content || !authorId) {
        return res.status(400).send({ error: '댓글 내용과 작성자 ID가 필요합니다.' });
    }

    const query = 'INSERT INTO qnacomments (postId, authorId, content) VALUES (?, ?, ?)';
    db.query(query, [id, authorId, content], (err) => {
        if (err) {
            console.error('댓글 작성 오류:', err);
            return res.status(500).send({ error: '댓글 작성 오류' });
        }
        res.status(201).send({ success: true });
    });
});

// 댓글 조회 라우트
app.get('/qnaposts/:id/qnacomments', (req, res) => {
    const { id } = req.params;
    console.log(`Fetching comments for post ID: ${id}`);
    const query = `
        SELECT qnacomments.id, qnacomments.content, qnacomments.createdAt, vuetest.username, qnacomments.authorId
        FROM qnacomments
        JOIN vuetest ON qnacomments.authorId = vuetest.id
        WHERE qnacomments.postId = ?
    `;
    db.query(query, [id], (err, results) => {
        if (err) {
            console.error('Error fetching comments:', err);
            return res.status(500).send({ error: 'Error fetching comments' });
        }
        if (results.length === 0) {
            return res.status(404).send({ message: 'No comments found' });
        }
        res.json(results);
    });
});

// 댓글 삭제 라우트
app.delete('/qnacomments/:id', (req, res) => {
    const { id } = req.params;
    db.query('DELETE FROM qnacomments WHERE id = ?', [id], (err) => {
        if (err) {
            console.error('댓글 삭제 오류:', err);
            return res.status(500).send({ error: '댓글 삭제 오류' });
        }
        res.sendStatus(200);
    });
});


//-------------------------------------------------------------------------------------------------------------------------------

//-------------------------------------------------------------------------------------------------------------------------------


// 정적 파일 제공 라우트
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// 서버 실행
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`서버가 ${PORT} 포트에서 실행 중입니다.`);
});
