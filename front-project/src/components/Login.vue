<template>
  <div class="outer-container">
    <div class="inner-container">
      <div class="d-flex w-100 align-items-center justify-content-between">
        <!-- 로고와 로그인, 회원가입 링크를 포함한 영역 -->
        <div class="d-flex align-items-center">
          <router-link class="navbar-brand" @click="handleLogoClick">
            <img src="@/assets/logo.png" class="logo" alt="로고">
          </router-link>
        </div>
        <div class="d-flex align-items-center">
           <router-link class="nav-link" :to="{ name: 'SignUp' }">회원가입</router-link>
          <div class="divider"></div>
          <router-link class="nav-link" :to="{ name: 'Login' }">로그인</router-link>
        </div>
      </div>
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
          <!-- 버튼을 제거하여 드롭다운이 항상 열려 있도록 설정 -->
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" style="display: none;">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <!-- 네비게이션 항목들 -->
            <ul class="navbar-nav mx-auto mb-2 mb-lg-0 d-flex justify-content-center">
              <!-- 센터개요 드롭다운 -->
              <li class="nav-item dropdown hover-dropdown">
                <a class="nav-link" href="#" role="button">
                  센터개요
                </a>
                <ul class="dropdown-menu text-center">
                  <li><router-link class="dropdown-item" :to="{ name: 'AgencyIntroduction' }">기관 소개</router-link></li>
                  <li><router-link class="dropdown-item" :to="{ name: 'CenterIntoduction' }">센터 소개</router-link></li>
                  <li><router-link class="dropdown-item" :to="{ name: 'WayToCome' }">오시는 길</router-link></li>
                </ul>
              </li>
              <!-- 훈련개요 드롭다운 -->
              <li class="nav-item dropdown hover-dropdown">
                <a class="nav-link" href="#" role="button">
                  훈련개요
                </a>
                <ul class="dropdown-menu text-center">
                  <li><router-link class="dropdown-item" :to="{ name: 'TrainingContent' }">훈련 안내</router-link></li>
                  <li><router-link class="dropdown-item" :to="{ name: 'AdmissionProcess' }">입학 절차</router-link></li>
                  <li><router-link class="dropdown-item" :to="{ name: 'ApplyForAdmission' }">입학 신청</router-link></li>
                  <li><router-link class="dropdown-item" :to="{ name: 'StudyTimeTable' }">학습 시간표</router-link></li>
                </ul>
              </li>
              <!-- 소식 드롭다운 -->
              <li class="nav-item dropdown hover-dropdown">
                <a class="nav-link" href="#" role="button">
                  소식
                </a>
                <ul class="dropdown-menu text-center">
                  <li><router-link class="dropdown-item" :to="{ name: 'CenterNews' }">센터 소식</router-link></li>
                  <li><router-link class="dropdown-item" :to="{ name: 'Gallery' }">갤러리</router-link></li>
                </ul>
              </li>
              <li class="nav-item dropdown hover-dropdown">
                <a class="nav-link" href="#" role="button">
                  프로젝트
                </a>
                <ul class="dropdown-menu text-center">
                  <li><router-link class="dropdown-item" :to="{ name: 'RecommendationProposal' }">과제 제안서</router-link></li>
                  <li><router-link class="dropdown-item" :to="{ name: 'ActivityPlan' }">수행 계획서</router-link></li>
                  <li><router-link class="dropdown-item" :to="{ name: 'Presentation' }">발표 자료</router-link></li>
                  <li><router-link class="dropdown-item" :to="{ name: 'DeFinalReport' }">최종 보고서</router-link></li>
                  <li><router-link class="dropdown-item" :to="{ name: 'DeCode' }">코드</router-link></li>
                </ul>
              </li>
              <!-- 공지사항 드롭다운 -->
              <li class="nav-item dropdown hover-dropdown">
                <a class="nav-link" href="#" role="button">
                  공지사항
                </a>
                <ul class="dropdown-menu text-center">
                  <li><router-link class="dropdown-item" :to="{ name: 'RecruitmentNotice' }">모집 공고</router-link></li>
                  <li><hr class="dropdown-divider"></li>
                  <li><router-link class="dropdown-item" :to="{ name: 'FreeBoard' }">자유 게시판</router-link></li>
                  <li><hr class="dropdown-divider"></li>
                  <li><router-link class="dropdown-item" :to="{ name: 'CourseReviews' }">수강 후기</router-link></li>
                </ul>
              </li>
            </ul>
            <form class="d-flex" role="search">
              <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
              <button class="btn btn-outline-success" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>
      <router-view />
      <div class="justify-content-center text-center">
        <br>
        <br>
        <h1 class="fw-bold">로그인</h1>
        <br>
        <div>
          <form @submit.prevent="loginUser">
        <div>
          <label for="username">아이디</label>
          <input type="text" id="username" :value="username" @input="updateUsername" required />
        </div>
        <div>
          <label for="password">비밀번호</label>
          <input type="password" id="password" :value="password" @input="updatePassword" required />
        </div>
        <div>
          <label for="token">토큰</label>
          <input type="text" id="token" :value="token" @input="updateToken" required />
        </div>
        <button style="width: 100px; height: 50px; border-radius: 5px; background-color: #eeee;" type="submit">로그인</button>
        <router-link
              to="/user/reset-password"
              style="text-decoration: none"
            >
              <button
                style="
                  width: 150px;
                  height: 50px;
                  border-radius: 5px;
                  background-color: #eeee;
                "
                type="button"
              >
                비밀번호 찾기
              </button>
            </router-link>
      </form>
        </div>
     
      </div>
    </div>
  </div>
</template>

<script>
import { useUserStore } from '@/store/SignUp';
import { useRouter } from 'vue-router';
import { computed } from 'vue';

export default {
  name: 'Login',
  setup() {
    const router = useRouter();
    const userStore = useUserStore();

    const username = computed(() => userStore.username);
    const password = computed(() => userStore.password);
    const token = computed(() => userStore.token);

    const loginUser = () => {
      userStore.login((success) => {
        if (success) {
          router.push('/MainHome');
        } else {
          alert('로그인 정보가 일치하지 않습니다. 재확인 하시고 시도해 주세요.');
        }
      });
    };

    const updateUsername = (event) => {
      userStore.setUsername(event.target.value);
    };
    const updatePassword = (event) => {
      userStore.setPassword(event.target.value);
    };
    const updateToken = (event) => {
      userStore.setToken(event.target.value);
    };
    const handleLogoClick = () => {
      if (userStore.checkLogin()) {
        router.push({ name: 'MainHome' });
      } else {
        router.push({ name: 'Home' });
      }
    };

    return {
      username,
      password,
      token,
      loginUser,
      updateUsername,
      updatePassword,
      updateToken,
      handleLogoClick
    };
  },
};
</script>
<style>
/* 드롭다운 메뉴가 마우스 오버 시 열리도록 설정 */
.nav-item.dropdown:hover .dropdown-menu {
  display: block;
}

/* 드롭다운 메뉴의 기본 동작 설정 */
.dropdown-menu {
  display: none; /* 기본적으로 숨기기 */
  position: absolute; /* 메뉴가 드롭다운 영역에 맞게 위치하도록 설정 */
  min-width: 200px; /* 드롭다운 메뉴의 최소 너비 설정 */
  margin-top: 0; /* 메뉴와 상위 항목 사이의 간격 제거 */
}

/* 네비게이션 바 중앙 정렬 설정 */
.navbar-nav {
  display: flex;
  justify-content: center;
  padding: 0; /* 기본 패딩 제거 */
}

.navbar-nav .nav-item {
  margin: 0 15px; /* 항목 간의 간격 설정 */
}

/* 드롭다운 메뉴의 항목 간격 설정 */
.dropdown-item {
  padding: 10px 20px; /* 항목 간의 간격 설정 */
}

/* 검색 폼 오른쪽 정렬 */
.form-inline {
  margin-left: auto;
}
/* 오른쪽 정렬을 위한 추가 스타일 */
.ms-auto {
  margin-left: auto;
}
.logo{
  width: 200px;
}
.dropdown:hover .dropdown-menu {
  display: block;
  margin-top: 0;
}
/*ㅇㅁㄴㅇ*/

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
  font-size: 24px;
  position: relative;
  left: 100px;
}


.auth-links {
  display: flex;
  align-items: center;
  border: 1px solid #ccc; /* 테두리 색상 조정 */
  border-radius: 5px; /* 모서리 둥글게 */
}

.auth-links a {
  padding: 10px 20px; /* 링크의 내부 여백 */
  text-decoration: none;
  color: #000; /* 텍스트 색상 */
}

.divider {
  width: 1px;
  margin: 10px;
  background-color: #ccc; /* 구분선 색상 */
  height: 20px; /* 구분선 높이, 링크와 같은 높이로 설정 */
}
</style>
