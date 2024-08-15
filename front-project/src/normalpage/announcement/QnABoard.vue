<template>
  <!-- 자유 게시판 제목 목록 -->
  <h1>문의 게시판</h1>
  <div class="pagination">
    <button @click="prevPage" :disabled="currentPage === 1">Previous</button>
    <span
      v-for="page in totalPages"
      :key="page"
      @click="setPage(page)"
      :class="{ 'active-page': currentPage === page }"
    >
      {{ page }}
    </span>
    <button @click="nextPage" :disabled="currentPage === totalPages">Next</button>
  </div>

  <!-- 게시물 제목 목록 -->
  <div class="posts-list">
    <div v-for="post in posts" :key="post.id" class="post-item">
      <!-- 제목 클릭 시 상세 페이지로 이동 -->
      <router-link :to="{ name: 'DetQnABoard', params: { id: post.id } }">
        {{ post.title }}
        <p>조회수 {{ post.views }}</p>
      </router-link>
    </div>
  </div>

  <!-- 글 쓰기 버튼 (회원) -->
  <button @click.prevent="handleClick">자유 게시판 글 쓰기 버튼</button>
  <button @click="back">뒤로가기</button>

  <!-- 푸터 -->
</template>

<script setup>
import { ref, onMounted } from "vue";
import axios from "axios";
import { useRouter } from "vue-router";
import { useUserStore } from "@/store/SignUp";
import { storeToRefs } from "pinia";

const router = useRouter();
const userStore = useUserStore();
const { isLoggedIn, isAdmin } = storeToRefs(userStore);

const currentPage = ref(1);
const totalPages = ref(1);
const posts = ref([]);

const fetchPosts = async () => {
  try {
    const response = await axios.get("/qnaboard", {
      params: { page: currentPage.value },
    });
    console.log(response);
    posts.value = response.data.posts;
    totalPages.value = response.data.totalPages;
  } catch (error) {
    console.error("Error fetching posts:", error);
  }
};

const back = () => {
  router.push({ name: "MainHome" });
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

// 버튼 클릭 시 호출되는 함수입니다.
const handleClick = async () => {
  if (isLoggedIn.value) {
    // 일반 회원과 관리자 모두 접근할 수 있게 수정
    router.push({ name: "WrDeQnABoard" });
  } else {
    alert("로그인 해주세요.");
    await handleLogin();
    router.push({ name: "Login" });
  }
};

const handleLogin = async () => {
  try {
    const response = await axios.post("/user/login", {
      username: userStore.username,
      password: userStore.password,
    });

    if (response.data.message) {
      userStore.isLoggedIn = true;
      userStore.isAdmin = response.data.grade === 1; // 관리자는 grade가 1인 경우
      if (userStore.isAdmin) {
        router.push({ name: "WrDeQnABoard" }); // 관리자가 접근하는 페이지
      } else {
        router.push({ name: "WrDeQnABoard" }); // 일반 회원이 접근하는 페이지
      }
    } else {
      console.error("Login failed");
      userStore.isLoggedIn = false;
    }
  } catch (error) {
    console.error("Error logging in user:", error);
    userStore.isLoggedIn = false;
  }
};

const logout = () => {
  userStore.isLoggedIn = false;
  userStore.isAdmin = false;
  router.push({ name: "Home" });
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
