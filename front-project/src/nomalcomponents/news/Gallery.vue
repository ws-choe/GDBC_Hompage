<template>
  <div>
    모집공고를 볼수있는곳
    <!-- 로그인 여부에 따라 클릭 이벤트를 처리합니다. -->
    <button @click.prevent="handleClick">모집 공고 글 쓰기</button>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import axios from 'axios';
import { useRouter } from 'vue-router';
import { useUserStore } from '@/store/SignUp';

const router = useRouter();
const userStore = useUserStore();

const username = ref('');
const password = ref('');

const handleClick = async () => {
  if (userStore.isLoggedIn) {
    if (userStore.isAdmin) {
      router.push({ name: 'PrModRecruitmentNotice' }); // 관리자 권한인 경우 PrModRecruitmentNotice 페이지로 이동
    } else {
      alert('관리자만 접근할 수 있습니다.');
    }
  } else {
    alert('로그인 해주세요.');
    await handleLogin();
  }
};

const handleLogin = async () => {
  try {
    const payload = {
      username: userStore.username,
      password: userStore.password,
    };

    const response = await axios.post('http://localhost:80/user/login', payload);

    if (response.data.message) {
      console.log('User logged in successfully');
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
</script>

<style>
/* 스타일이 필요한 경우 추가합니다. */
</style>
