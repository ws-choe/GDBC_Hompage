<template>
  <div>
    최종보고서 기록을 볼수있는곳
      <!-- 로그인 여부에 따라 클릭 이벤트를 처리합니다. -->
       <button  @click.prevent="handleClick" >최종 보고서</button>
  </div>
</template>
  
  <script setup>
  import { useUserStore } from '@/store/SignUp';
  import { useRouter } from 'vue-router';
  
  const router = useRouter();
  const userStore = useUserStore();
  
  const handleClick = () => {
    if (userStore.isLoggedIn) {
      router.push({ name: 'DeModFinalReport' }); // 로그인 한 경우 DeModFinalReport 페이지로 이동
    } else {
      alert('비회원은 접근 불가능한 권한입니다. 로그인 해주세요.');
      router.push({ name: 'Login' }); // 로그인 페이지로 리다이렉트
    }
  };
  </script>
  
  <style>
  /* 스타일이 필요한 경우 추가합니다. */
  </style>