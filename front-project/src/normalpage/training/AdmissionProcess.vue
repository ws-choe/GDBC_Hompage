<template>
  <!-- 고정 페이지 최상단 영역 -->

  <!-- 헤더 영역 메뉴바 끝 -->

  <!-- 중단 부분-->
  <div class="project-container">
  <section id="admission-procedure" class="section">
    <h1 class="admission-title">입학 절차</h1>
    <div class="textline"></div>
    <div class="regular-admission">
      <h3>정규훈련* 입학절차</h3>
      <p>* 양성훈련과정, 일반훈련, 특별훈련</p>
      <div class="admission-steps">
        <img
          src="../../assets/image/admission-steps.png"
          class="admission-steps-img"
          alt="정규훈련 입학절차"
        />
      </div>
    </div>

    <div class="customized-admission">
      <h3>맞춤훈련 입학절차</h3>
      <p>훈련생 입학절차</p>
      <div class="admission-steps">
        <img
          src="../../assets/image/customized-steps.png"
          class="customized-steps-img"
          alt="맞춤훈련 입학절차"
        />
      </div>
    </div>
    <div class="apply-button-container">
      <router-link class="apply-button" :to="{ name: 'ApplyForAdmission' }"
        >지원신청 바로가기</router-link
      >
    </div>
  </section>
  </div>

  <!-- footer 영억 시작 하단 -->

  <!-- footer 영역 끝 -->

  <router-view />
</template>

<script setup>
//import { useUserStore } from '@/store/SignUp';
//import { useRouter } from 'vue-router';
//import { computed } from 'vue';
//const router = useRouter();
//const userStore = useUserStore();

/*const handleClick = (routeName) => {
      if (userStore.isLoggedIn) {
        router.push({ name: routeName });
      } else {
        alert('비회원은 접근 불가능한 페이지입니다.');
      }
    }; */
</script>

<style scoped src="@/assets/style/secondmenu/Admis.css"></style>
