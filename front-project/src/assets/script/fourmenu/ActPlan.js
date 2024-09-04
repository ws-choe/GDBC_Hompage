// src/components/PostsHandler.js

import { ref, onMounted } from 'vue';
import axios from 'axios';
import { useRouter } from 'vue-router';
import { useUserStore } from '@/store/SignUp';
import { storeToRefs } from 'pinia';

export default function usePostsHandler() {
  const router = useRouter();
  const userStore = useUserStore();
  const { isLoggedIn, isAdmin } = storeToRefs(userStore);

  const currentPage = ref(1);
  const totalPages = ref(1);
  const posts = ref([]);

  const searchTerm = ref('');
  const category = ref('title');
  const filteredPosts = ref([]);

  const fetchPosts = async () => {
    try {
      const response = await axios.get('/activity', {
        params: { page: currentPage.value }
      });
      posts.value = response.data.posts;
      totalPages.value = response.data.totalPages;
      applyFilter();
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
      const response = await axios.post('/user/login', {
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

  // 날짜 형식 변환
  function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toISOString().split('T')[0];
  }

  // 검색 기능
  const applyFilter = () => {
    if (searchTerm.value.trim() === '') {
      filteredPosts.value = posts.value;
    } else {
      filteredPosts.value = posts.value.filter(post =>
        post[category.value].toString().toLowerCase().includes(searchTerm.value.trim().toLowerCase())
      );
    }
  };

  const searchPosts = () => {
    applyFilter();
  };

  return {
    currentPage,
    totalPages,
    posts,
    searchTerm,
    category,
    filteredPosts,
    fetchPosts,
    prevPage,
    nextPage,
    setPage,
    handleClick,
    handleLogin,
    logout,
    formatDate,
    searchPosts
  };
}