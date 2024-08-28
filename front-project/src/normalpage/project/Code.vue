<template>
  <!-- 프로젝트 카테고리 목록 -->

  <div class="project-container">
    <h1 class="project-title">코드</h1>
    <div class="nav-buttons">
      <router-link class="nav-button" :to="{ name: 'RecommendationProposal' }"
        >과제 제안서</router-link
      >
      <router-link class="nav-button" :to="{ name: 'ActivityPlan' }"
        >수행 계획서</router-link
      >
      <router-link class="nav-button" :to="{ name: 'Presentation' }"
        >발표 자료</router-link
      >
      <router-link class="nav-button" :to="{ name: 'FinalReport' }"
        >최종 보고서</router-link
      >
      <router-link class="nav-button active" :to="{ name: 'Code' }">코드</router-link>
    </div>

    <!-- 검색창 -->
    <div class="search-write-container">
      <div class="search-container">
        <select v-model="category" class="category-select">
          <option value="title">제목</option>
          <option value="userId">작성자</option>
        </select>
        <input v-model="searchTerm" type="text" class="search-input" placeholder="검색" />
        <button @click="searchPosts" class="search-btn">
          <svg
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            width="24px"
            height="24px"
            viewBox="0 0 24 24"
            aria-labelledby="searchIconTitle"
            stroke="#406E43"
            stroke-width="2"
            stroke-linecap="square"
            stroke-linejoin="miter"
            fill="none"
            color="#406E43"
          >
            <title id="searchIconTitle">Search</title>
            <path d="M14.4121122,14.4121122 L20,20" />
            <circle cx="10" cy="10" r="6" />
          </svg>
        </button>
      </div>
      <button @click.prevent="handleClick" class="write">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="currentColor"
          class="bi bi-pencil"
          viewBox="0 0 16 16"
        >
          <path
            d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325"
          />
        </svg>
        글쓰기
      </button>
    </div>

    <!-- 게시판 테이블 -->

    <table class="posts-table">
      <thead>
        <tr>
          <th>번호</th>
          <th>제목</th>
          <th>작성자</th>
          <th>등록일</th>
          <th>조회수</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="post in filteredPosts" :key="post.id" class="post-item">
          <td>{{ post.id }}</td>
          <!-- 제목 클릭 시 상세 페이지로 이동 -->
          <td>
            <router-link :to="{ name: 'DetCode', params: { id: post.id } }">{{
              post.title
            }}</router-link>
          </td>
          <td>{{ post.user.username }}</td>
          <td>{{ formatDate(post.created_at) }}</td>
          <td>{{ post.views }}</td>
        </tr>
      </tbody>
    </table>

    <!-- 쪽수 -->
    <div class="pagination">
      <button @click="prevPage" :disabled="currentPage === 1">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-chevron-left"
          viewBox="0 0 16 16"
        >
          <path
            fill-rule="evenodd"
            d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0"
          />
        </svg>
      </button>
      <span class="pagw"
        v-for="page in totalPages"
        :key="page"
        @click="setPage(page)"
        :class="{ 'active-page': currentPage === page }"
      >
        {{ page }}
      </span>
      <button @click="nextPage" :disabled="currentPage === totalPages">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-chevron-right"
          viewBox="0 0 16 16"
        >
          <path
            fill-rule="evenodd"
            d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"
          />
        </svg>
      </button>
    </div>
  </div>
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

const searchTerm = ref("");
const category = ref("title");
const filteredPosts = ref([]);

const fetchPosts = async (kw, category) => {
  try {
    const response = await axios.get("/code", {
      params: { page: currentPage.value, kw:kw, category:category },
    });
    filteredPosts.value = response.data.posts;
    totalPages.value = response.data.totalPages;
    searchTerm.value = response.data.kw;
  } catch (error) {
    console.error("Error fetching posts:", error);
  }
};

const prevPage = () => {
  if (currentPage.value > 1) {
    currentPage.value--;
    fetchPosts(searchTerm.value, category.value);
  }
};

const nextPage = () => {
  if (currentPage.value < totalPages.value) {
    currentPage.value++;
    fetchPosts(searchTerm.value, category.value);
  }
};

const setPage = (page) => {
  currentPage.value = page;
  fetchPosts(searchTerm.value, category.value);
};

const handleClick = async () => {
  if (isLoggedIn.value) {
    if (isAdmin.value) {
      router.push({ name: "WrDeCode" });
    } else {
      alert("관리자만 접근할 수 있습니다.");
    }
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
      userStore.isAdmin = response.data.grade === 1;
      router.push({ name: "Code" });
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

// 날짜 형식 변환
function formatDate(dateString) {
  const date = new Date(dateString);
  return date.toISOString().split("T")[0];
}

// 검색 기능
const searchPosts = () => {
fetchPosts(searchTerm.value, category.value);
};
</script>

<style scoped src="@/assets/style/fourthmenu/Code.css"></style>