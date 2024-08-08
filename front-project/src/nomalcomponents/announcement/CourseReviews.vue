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

      <!-- 수강 후기 게시판 제목 목록 -->
      <h1>수강 후기 게시판</h1>
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
          <router-link :to="{ name: 'DeModCourseReviews', params: { id: post.id } }">
            {{ post.title }}
          </router-link>
        </div>
      </div>

      <!-- 글 쓰기 버튼 (관리자만) -->
      <button @click.prevent="handleClick">수강 후기 쓰기</button>

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
      router.push({ name: 'DeModCourseReviews' });
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
      router.push({ name: 'CourseReviews' });
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

.foote {
  background-color: #f8f8f8;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid #ddd;
}

.contact-inf {
  display: flex;
  gap: 12px;
}
</style>
