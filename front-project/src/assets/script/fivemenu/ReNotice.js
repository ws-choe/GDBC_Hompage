// src/composables/RecruitmentNotice.js
import { ref, onMounted } from 'vue';
import axios from 'axios';
import { useRouter } from 'vue-router';
import { useUserStore } from '@/store/SignUp';
import { storeToRefs } from 'pinia';

export const useRecruitmentNotice = () => {
  const router = useRouter();
  const userStore = useUserStore();
  const { isLoggedIn, isAdmin } = storeToRefs(userStore);

  const currentPage = ref(1);
  const totalPages = ref(1);
  const posts = ref([]);

  const fetchPosts = async () => {
    try {
      const response = await axios.get('http://localhost:3000/posts', {
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
        router.push({ name: 'WrPrRecruitmentNotice' });
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
      const response = await axios.post('http://localhost:3000/login', {
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

  return {
    currentPage,
    totalPages,
    posts,
    prevPage,
    nextPage,
    setPage,
    handleClick,
    logout,
  };
};
