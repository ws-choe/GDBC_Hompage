// src/components/Training.js

import { ref, onMounted } from 'vue';
import axios from 'axios';
import { useRouter } from 'vue-router';
import { useUserStore } from '@/store/SignUp';

export default function useTraining() {
  const router = useRouter();
  const userStore = useUserStore();

  const currentPage = ref(1);
  const totalPages = ref(1);
  const posts = ref([]);

  const fetchPosts = async () => {
    try {
      const response = await axios.get('/posts', {
        params: { page: currentPage.value }
      });
      posts.value = response.data.posts;
      totalPages.value = response.data.totalPages;
    } catch (error) {
      console.error('Error fetching posts:', error);
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
    logout
  };
}