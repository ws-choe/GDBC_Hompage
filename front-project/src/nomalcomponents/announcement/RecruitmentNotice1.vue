<template>
  <div class="outer-container">
    <div class="inner-container">
      <!-- 상단 네비게이션 바 -->
      <div class="d-flex w-100 align-items-center justify-content-between">
        <div class="d-flex align-items-center">
          <router-link class="navbar-brand" :to="{ name: 'Home' }">
            <img src="@/assets/logo.png" class="logo" alt="로고">
          </router-link>
        </div>
        <div>
          <div v-if="userStore.isLoggedIn">
            <p>환영합니다, {{ userStore.username }}!</p>
            <button @click="logout" class="btn btn-outline-danger ms-3">로그아웃</button>
          </div>
          <div v-else>
            <router-link class="nav-link" :to="{ name: 'SignUp' }">회원가입</router-link>
            <div class="divider"></div>
            <router-link class="nav-link" :to="{ name: 'Login' }">로그인</router-link>
          </div>
        </div>
      </div>

      <!-- 네비게이션 메뉴 -->
      <header>
        <div class="lnb">
          <ul>
            <!-- 메뉴 항목들... -->
          </ul>
        </div>
      </header>

      <!-- 게시글 상세 내용 -->
      <div class="post-detail" v-if="post.title">
        <h1>{{ post.title }}</h1>
        <p>{{ post.content }}</p>
        <div v-if="post.image">
          <img class="post-image" :src="`http://localhost:80/uploads/${post.image}`" alt="게시물 이미지">
        </div>
        <div v-else>
          <p>이미지가 없습니다</p>
        </div>
        <div v-if="isAuthor">
          <button @click="editPost" class="btn btn-primary">수정</button>
          <button @click="deletePost" class="btn btn-danger">삭제</button>
        </div>
        <div>
          <textarea v-model="comment" placeholder="댓글을 작성하세요..." rows="4"></textarea>
          <button @click="submitComment" class="btn btn-primary">댓글 달기</button>
        </div>
        <div class="comments">
          <h2>댓글 목록</h2>
          <div v-for="comment in comments" :key="comment.id" class="comment-item">
            <p>{{ comment.content }}</p>
            <p><strong>작성자:</strong> {{ comment.authorId }} | <strong>작성일:</strong> {{ formatDate(comment.createdAt) }}</p>
            <button v-if="comment.authorId === userStore.id" @click="deleteComment(comment.id)" class="btn btn-danger btn-sm">삭제</button>
          </div>
        </div>
      </div>
      <div v-else>
        <p>게시글을 불러오는 중입니다...</p>
      </div>

      <!-- 푸터 -->
      <div class="foote">
        <img src="@/assets/logo2.png" class="logo2" alt="로고2">
        <div class="policy-links">
          <a href="#">개인정보처리방침</a>
          <span>|</span>
          <a href="#">서비스이용약관</a>
          <span>|</span>
          <a href="#">저작권보호정책</a>
          <span>|</span>
          <a href="#">찾아오시는길</a>
        </div>
        <div class="d-flex contact-inf">
          <p>전화: 02-6343-5700</p>
          <p>팩스: 0506-070-0170</p>
          <p>이메일: info@kead.or.kr</p>
          <p>주소: 서울특별시 영등포구 여의도동 여의도동로 101</p>
        </div>
        <div class="social-links">
          <a href="#"><img src="" alt="Facebook"></a>
          <a href="#"><img src="" alt="Instagram"></a>
          <a href="#"><img src="" alt="YouTube"></a>
        </div>
      </div>
    </div>
  </div>
</template>


<script setup>
import { ref, onMounted, computed } from 'vue';
import axios from 'axios';
import { useRoute, useRouter } from 'vue-router';
import { useUserStore } from '@/store/SignUp';
import { storeToRefs } from 'pinia';

const route = useRoute();
const router = useRouter();
const userStore = useUserStore();
const { isLoggedIn, id: userId } = storeToRefs(userStore);

const post = ref({
  title: '',
  content: '',
  id: 0,
  userId: 0,
  image: ''  // 이미지 파일명 추가
});
const comments = ref([]);
const comment = ref('');
const isAuthor = computed(() => isLoggedIn.value && post.value.userId === userId.value);

const fetchPostDetails = async () => {
  try {
    console.log("hi");
    console.log(route.params.id);
    const response = await axios.get(`http://localhost:80/posts/${route.params.id}`);
    console.log(response.data);
    post.value = response.data;
    console.log('Post Data:', post.value); // 응답 데이터 확인

    const commentsResponse = await axios.get(`http://localhost:80/posts/${route.params.id}/comments`);
    console.log('Comments Data:', commentsResponse.data);
    comments.value = commentsResponse.data;
  } catch (error) {
    console.error('Error fetching post details:', error);
  }
};

const editPost = () => {
  router.push({ name: 'EditRecruitmentNotice', params: { id: route.params.id } });
};

const deletePost = async () => {
  if (!confirm('정말로 이 게시글을 삭제하시겠습니까?')) return;

  try {
    await axios.delete(`http://localhost:80/posts/${post.value.id}`);
    router.push({ name: 'RecruitmentNotice' }); // 게시글 목록 페이지로 이동
  } catch (error) {
    console.error('Error deleting post:', error);
    alert('게시글 삭제 중 오류가 발생했습니다.');
  }
};

const submitComment = async () => {
  if (!comment.value.trim()) {
    alert('댓글 내용을 입력해 주세요.');
    return;
  }
  console.log(post.value.id);
  try {
    await axios.post(`http://localhost:80/posts/${post.value.id}/comments`, {
      content: comment.value,
      authorId: userId.value  // 로그인한 사용자 ID
    });
    comment.value = ''; // 댓글 입력 필드 초기화
    fetchPostDetails(); // 댓글 리스트 갱신
  } catch (error) {
    console.error('Error submitting comment:', error);
    alert('댓글 작성 중 오류가 발생했습니다.');
  }
};

const deleteComment = async (commentId) => {
  try {
    await axios.delete(`http://localhost:80/comments/${commentId}`);
    fetchPostDetails(); // 댓글 리스트 갱신
  } catch (error) {
    console.error('Error deleting comment:', error);
    alert('댓글 삭제 중 오류가 발생했습니다.');
  }
};

const formatDate = (dateString) => {
  const date = new Date(dateString);
  return date.toLocaleDateString() + ' ' + date.toLocaleTimeString();
};

const logout = () => {
  userStore.isLoggedIn = false;
  userStore.isAdmin = false;
  router.push({ name: 'Home' });
};

// 초기 데이터 로드
onMounted(() => {
  fetchPostDetails();
});
</script>


<style scoped>
/* 상세 페이지 스타일 */
.post-detail {
  margin-top: 20px;
}

.comment-item {
  margin-bottom: 10px;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
  position: relative;
}

textarea {
  width: 100%;
  margin-top: 10px;
}

.post-image {
  width: 100%; /* 부모 요소의 너비에 맞게 조절 */
  max-width: 600px; /* 최대 너비를 600px로 제한 */
  height: auto; /* 비율을 유지하면서 자동으로 높이 조절 */
}

.btn-danger {
  position: absolute;
  top: 10px;
  right: 10px;
}

.comments h2 {
  margin-top: 20px;
  margin-bottom: 10px;
}

.comment-item p {
  margin: 0;
  padding: 0;
}

.comment-item .btn-danger {
  display: block;
  margin-top: 10px;
}
</style>
