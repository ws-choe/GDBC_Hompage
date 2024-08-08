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
  
          <!-- 헤더 영역 메뉴바 시작 -->
      <header>   
        <div class="lnb">
                <ul>
                  <li class="menu-item">
                    <li><a href="#">센터개요</a>
                        <li class="subMenu">
                          <li><router-link  :to="{ name: 'AgencyIntroduction' }">기관 소개</router-link></li>
                          <li><router-link  :to="{ name: 'CenterIntoduction' }">센터 소개</router-link></li>
                          <li><router-link  :to="{ name: 'WayToCome' }">오시는 길</router-link></li>
                    </li>
                  </li>
                    </li>
                    <li><a href="#">훈련개요</a>
                        <li class="subMenu">
                          <li><router-link  :to="{ name: 'TrainingContent' }">훈련 안내</router-link></li>
                          <li><router-link  :to="{ name: 'AdmissionProcess' }">입학 절차</router-link></li>
                          <li><router-link  :to="{ name: 'ApplyForAdmission' }">입학 신청</router-link></li>
                          <li><router-link  :to="{ name: 'StudyTimeTable' }">학습 시간표</router-link></li>
                    </li>
                    </li>
                    <li><a href="#">소식</a>
                        <li class="subMenu">
                          <li><router-link  :to="{ name: 'CenterNews' }">센터 소식</router-link></li>
                          <li><router-link :to="{ name: 'Gallery' }">갤러리</router-link></li>
                    </li>
                    </li>
                    <li><a href="#">프로젝트</a>
                        <li class="subMenu">
                          <li><router-link :to="{ name: 'RecommendationProposal' }">과제 제안서</router-link></li>
                          <li><router-link :to="{ name: 'ActivityPlan' }">수행 계획서</router-link></li>
                          <li><router-link :to="{ name: 'Presentation' }">발표 자료</router-link></li>
                          <li><router-link :to="{ name: 'DeFinalReport' }">최종 보고서</router-link></li>
                          <li><router-link :to="{ name: 'DeCode' }">코드</router-link></li>
                    </li>
                    </li>
                    <li><a href="#">공지사항</a>
                        <li class="subMenu">
                          <li><router-link :to="{ name: 'RecruitmentNotice' }">모집 공고</router-link></li>
                          <li><router-link :to="{ name: 'FreeBoard' }">자유 게시판</router-link></li>
                          <li><router-link :to="{ name: 'CourseReviews' }">수강 후기</router-link></li>
                    </li>
                    </li>  
                    <form class="d-flex" role="search">
                      <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
                      <button class="btn btn-outline-success" type="submit">Search</button>
                    </form>
                </ul>
            </div>
        </header>

        <!-- 헤더 영역 메뉴바 끝 -->
        <!-- 모집 공고 게시판 제목 목록 -->
        <h1>모집 공고 게시판</h1>
        <div class="pagination">
          <button @click="prevPage" :disabled="currentPage === 1">Previous</button>
          <span v-for="page in totalPages" :key="page" @click="setPage(page)" :class="{'active-page': currentPage === page}">
            {{ page }}
          </span>
          <button @click="nextPage" :disabled="currentPage === totalPages">Next</button>
        </div>
  
        <!-- 게시물 제목 목록 -->
        <div class="posts-list">
          <div v-for="post in posts" :key="post.id" class="post-item">
            <!-- 제목 클릭 시 상세 페이지로 이동 -->
            <router-link :to="{ name: 'RecruitmentNotice1', params: { id: post.id } }">
              {{ post.title }}
            </router-link>
          </div>
        </div>
  
        <!-- 글 쓰기 버튼 (관리자만) -->
        <button @click.prevent="handleClick">모집 공고 글 쓰기 버튼</button>
  
        <!-- 푸터 -->
 <!-- footer 영억 시작 하단 -->
 <footer>
  
  <div class="foote-left">
    <div class="logo">
      <img src="@/assets/logo2.png" class="logo2" alt="한국장애인고용공단">
    </div>
    <div class="info">
      <div class="links">
        <a href="#">개인정보처리방침</a>
        <a href="#">서비스이용약관</a>
        <a href="#">저작권보호정책</a>
        <a href="#">찾아오시는길</a>
      </div>
      <div class="contact">
        <p>[08379] 서울시 구로구 디지털로 300, 11층</p>
        <p>구로동, 지밸리비즈플라자</p>
        <p class="phone-fax">전화: 02-6343-5700 | FAX: 050-3470-0117</p>
        <p class="hours">평일 09:00 ~ 18:00 (휴게시간: 12:00 ~ 13:00)</p>
        <p class="tel">TEL: 02-0000-0000</p>
        <p class="fax">FAX: 02-0000-0000</p>
      </div>
    </div>
    <div class="social-icons">
      <div class="social-icons">
        <a href="#"><img src="@/assets/facebook.png" alt="Facebook" class="social-icon"></a>
        <a href="#"><img src="@/assets/instagram.png" alt="Instagram" class="social-icon"></a>
        <a href="#"><img src="@/assets/youtube.png" alt="YouTube" class="social-icon"></a>
      </div>
      </div>
    <div class="foote-right">
      <div class="d-flex buttons">
        <button>공단 운영 웹사이트</button>
        <button>고용노동부 산하기관</button>
      </div>
      <div class="certification">
        <a href="https://www.wa.or.kr/board/list.asp?BoardID=0006" title="새창" target="_blank">
          <img src="@/assets/footerlogo2.png" alt="WA 인증 마크">
        </a>
      </div>
    </div>
  </div>
  
</footer>
<router-view />
</div>
</div>

<!-- footer 영역 끝 -->
 </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  import axios from 'axios';
  import { useRouter } from 'vue-router';
  import { useUserStore } from '@/store/SignUp';
  import { storeToRefs } from 'pinia';
  
  const router = useRouter();
  const userStore = useUserStore();
  const { isLoggedIn, isAdmin } = storeToRefs(userStore);
  
  const currentPage = ref(1);
  const totalPages = ref(1);
  const posts = ref([]);
  
  const fetchPosts = async () => {
    try {
      const response = await axios.get('http://localhost:80/posts', {
        params: { page: currentPage.value }
      });
      posts.value = response.data.posts;
      totalPages.value = response.data.totalPages;
    } catch (error) {
      console.error('Error fetching posts:', error);
    }
  };
  
  const prevPage = () => {
    if (currentPage.value > 1) {
      currentPage.value--;
      fetchPosts();
    }
  };
  
  const nextPage = () => {
    if (currentPage.value < totalPages.value) {
      currentPage.value++;
      fetchPosts();
    }
  };
  
  const setPage = (page) => {
    currentPage.value = page;
    fetchPosts();
  };
  
  const handleClick = async () => {
    if (isLoggedIn.value) {
      if (isAdmin.value) {
        router.push({ name: 'PrModRecruitmentNotice' });
      } else {
        alert('관리자만 접근할 수 있습니다.');
      }
    } else {
      alert('로그인 해주세요.');
      await handleLogin();
      router.push({ name: 'Login' });
    }
  };
  
  const handleLogin = async () => {
    try {
      const response = await axios.post('http://localhost:80/user/login', {
        username: userStore.username,
        password: userStore.password,
      });
  
      if (response.data.message) {
        userStore.isLoggedIn = true;
        userStore.isAdmin = response.data.grade === 1;
        router.push({ name: 'RecruitmentNotice' });
      } else {
        console.error('Login failed');
        userStore.isLoggedIn = false;
      }
    } catch (error) {
      console.error('Error logging in user:', error);
      userStore.isLoggedIn = false;
    }
  };
  
  const logout = () => {
    userStore.isLoggedIn = false;
    userStore.isAdmin = false;
    router.push({ name: 'Home' });
  };
  
  // 초기 데이터 로드
  onMounted(() => {
    fetchPosts();
  });
  </script>
  
  <style>
  /* 메뉴바 */
.lnb {
  background-color: #f8f9fa;
  padding: 10px 0;
}

.lnb > ul {
  display: flex;
  justify-content: center;
  padding: 0;
  margin: 0;
  list-style: none;
}

.lnb > ul > li {
  position: relative;
  margin: 0 10px;
}

.lnb > ul > li:hover > a {
  border-radius: 5px;
}
 
.subMenu {
  display: none;
  position: absolute;
  top: 100%;
  left: 20;
  z-index: 1000;
}

.lnb > ul > li:hover .subMenu {
  display: block;
}

.subMenu li {
  padding: 0;
  margin: 0;
}

.subMenu a {
  display: block;
  padding: 10px 20px;
  color: #333;
  font-weight: 400;
  text-decoration: none;
}

.subMenu a:hover {
  background-color: #f1f1f1;
}


header{
  position: relative;
}

.lnb>ul {display: flex;
  justify-content: center;
  text-align: center;
}

.lnb li { 
  margin-right:2px;
}

.lnb a {display: block;
      width: 140px; 
      height: 40px; 
      text-align: center; 
      line-height: 40px;
      color: blue;
}
.subMenu {
  width: 170px;  
  height:200px; 
  display: none; 
  position: absolute; 
  background-color: white;
}

.lnb>ul:hover .subMenu {
  display: block;
}

ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.menu-item > a {
  text-decoration: none;
  color: black;
  padding: 10px;
  display: block;
  position: relative;
}

.menu-item > a::after {
  content: '';
  position: absolute;
  width: 0;
  height: 2px;
  display: block;
  margin-top: 5px;
  right: 0;
  background: black;
  transition: width 0.3s ease;
  -webkit-transition: width 0.3s ease;
}

.menu-item > a:hover::after, .menu-item > a:focus::after {
  width: 100%;
  left: 0;
  background: black;
}

.sub-menu {
  display: none;
}

.menu-item:hover .sub-menu, .menu-item:focus-within .sub-menu {
  display: block;
}

.sub-menu li {
  padding: 5px 10px;
}

.sub-menu li a {
  text-decoration: none;
  color: black;
}

.sub-menu li a:hover {
  text-decoration: underline;
}
/* 헤더 스타일 끝 */
  /* 전체 레이아웃 스타일 */
  .outer-container {
    width: 100%;
    display: flex;
    justify-content: center;
    padding: 20px 0;
  }
  
  .inner-container {
    width: 1800px;
    padding: 0 20px;
    background-color: #fff;
    border: 1px solid #ddd;
    border-radius: 10px;
    overflow: hidden;
  }
  
  .logo {
    width: 200px;
  }
  
  .logo2 {
    width: 150px;
  }
  
  .posts-list {
    margin-top: 20px;
  }
  
  .post-item {
    margin-bottom: 10px;
  }
  
  .post-item a {
    text-decoration: none;
    color: #007bff;
  }
  
  .post-item a:hover {
    text-decoration: underline;
  }
  
  .pagination {
    margin-top: 20px;
    text-align: center;
  }
  
  .active-page {
    font-weight: bold;
  }
  
  .foote-content {
    justify-content: space-between;
    background-color: #fcfcfc;
    padding: 18px calc(1.6154rem + 50px) 18px 1.6154rem;
    height: 300px;
    margin: 50px;
  }
  
  .foote-left {
    display: flex;
    justify-content: space-between;
    background-color: #f4f4f4;
    padding: 18px calc(1.6154rem + 50px) 18px 1.6154rem;
    height: auto;
    margin: auto;
    
  }
  
  
  .foote-left .logo {
    margin-right: 100px;
  }
  
  .foote-left .info {
    display: flex;
    flex-direction: column;
  }
  
  .foote-left .info .links {
    display: flex;
    gap: 10px;
    margin-bottom: 20px;
  }
  
  .foote-left .info .links a {
  
    text-decoration: none;
    margin-bottom: 5px;
  }
  
  .foote-left .info .contact p {
    margin: 2px 0;
  }
  
  .foote-right {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    position: relative;
  
  }
  
  .foote-right .buttons {
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
    
  }
  
  .foote-right .buttons button {
    margin-bottom: 10px;
    padding: 10px 20px;
    border: none;
    cursor: pointer;
  }
  
  .foote-right .social-icons {
    display: flex;
    margin-bottom: 20px;
  }
  
  .foote-right .social-icons a {
    margin-right: 10px;
  }
  
  .foote-right .certification img {
    width: 100px;
  }
  .logo2 {
  
  }
  .certification {
    width: 100px;
  }
  .box{
      position: relative;
      
  }
  
  .input {
      padding: 10px;
   
      background: none;
      border: 4px solid #ffd52d;
      border-radius: 50px;
      box-sizing: border-box;
      font-family: Comic Sans MS;
      font-size: 26px;
      color: #ffd52d;
      outline: none;
      transition: .5s;
  }
  .box:hover input{
       
      background: #3b3640;
      border-radius: 10px;
  }
  .box i{
      position: absolute;
      top: 50%;
      right: 15px;
      transform: translate(-50%,-50%);
      font-size: 26px;
      color: #ffd52d;
      transition: .2s;
  }
  .box:hover i{
      opacity: 0;
      z-index: -1;
  }
  
  .social-icons {
    display: flex;
    gap: 10px; /* 아이콘 사이의 간격을 조정합니다. 필요에 따라 수정하세요. */
  }
  
  .social-icon {
    width: 24px; /* 아이콘의 너비를 조정합니다. 필요에 따라 수정하세요. */
    height: auto; /* 비율을 유지하면서 높이를 자동으로 조정합니다. */
  }
  </style>
  