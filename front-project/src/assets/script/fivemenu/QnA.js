import { ref, onMounted } from 'vue';
import axios from 'axios';
import { useRouter } from 'vue-router';
import { useUserStore } from '@/store/SignUp';
import { storeToRefs } from 'pinia';

export function usePostLogic() {
  const router = useRouter();
  const userStore = useUserStore();
  const { isLoggedIn, isAdmin } = storeToRefs(userStore);

  const currentPage = ref(1);
  const totalPages = ref(1);
  const posts = ref([]);

  const fetchPosts = async () => {
    try {
      const response = await axios.get('http://localhost:3000/freeboard', {
        params: { page: currentPage.value }
      });
      console.log(response);
      posts.value = response.data.freeboard;
      totalPages.value = response.data.totalPages;
    } catch (error) {
      console.error('Error fetching posts:', error);
    }
  };

  const back = () => {
    router.push({ name: 'MainHome' });
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
      // 일반 회원과 관리자 모두 접근할 수 있게 수정
      router.push({ name: 'DeModFreeBoard' });
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
        userStore.isAdmin = response.data.grade === 1; // 관리자는 grade가 1인 경우
        if (userStore.isAdmin) {
          router.push({ name: 'DeModFreeBoard' }); // 관리자가 접근하는 페이지
        } else {
          router.push({ name: 'DeModFreeBoard' }); // 일반 회원이 접근하는 페이지
        }
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
    fetchPosts,
    back,
    prevPage,
    nextPage,
    setPage,
    handleClick,
    handleLogin,
    logout
  };
}
