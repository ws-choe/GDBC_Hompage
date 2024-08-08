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
              <!-- 프로젝트 드롭다운 -->
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
    <div>
      <div class="container">
        <hr>
        <br>
        <br>
    <h1>회원가입</h1>
    <form @submit.prevent="registerUser">
      <div>
        <label for="username">아이디:</label>
        <input type="text" id="username" :value="username" @input="updateUsername" required />
      </div>
      <div>
        <label for="password">비밀번호:</label>
        <input type="password" id="password" :value="password" @input="updatePassword" required />
      </div>
      <div>
        <label for="confirmPassword">비밀번호 확인:</label>
        <input type="password" id="confirmPassword" :value="confirmPassword" @input="updateConfirmPassword" required />
        <label id="qpassword" :style="{ color: qpasswordColor }">{{ qpasswordMessage }}</label>
      </div>
      <div>
        <label for="email">이메일:</label>
        <input type="email" id="email" :value="email" @input="updateEmail" required />
      </div>
      <div>
        <label for="address">주소:</label>
        <input type="text" id="address" :value="address" @input="updateAddress" required />
        <br>
        <button class="postcode-btn" @click="openPostcodePopup" type="button">우편번호 검색</button>
      </div>
      <div>
        <label for="detailedAddress">상세 주소:</label>
        <input type="text" id="detailedAddress" :value="detailedAddress" @input="updateDetailedAddress" required />
      </div>
      <div>
        <label for="phone">핸드폰 번호:</label>
        <input type="text" id="phone" :value="phone" @input="updatePhone" required />
      </div>
      <div>
        <label for="signup-method">가입경로:</label>
        <select id="signup-method" :value="signupMethod" @change="updateSignupMethod" required>
          <option value="">선택해주세요</option>
          <option value="기업추천">기업 추천</option>
          <option value="지인 추천">지인 추천</option>
          <option value="센터 소개">센터 소개</option>
          <option value="카페 홍보">카페 홍보</option>
        </select>
      </div>
      <button class="submit-btn" type="submit" :disabled="!isPasswordMatch">회원가입</button>
      <br>
      <br>
      <br>
    </form>
  </div>
  </div>
      <hr />
      <figure>
         <blockquote class="blockquote">
            <p class="h6 fw-bold">
               주소
            </p>
         </blockquote>
         <figcaption class="blockquote-footer">
            <cite title="Source Title" class="h6 fw-bold">번호</cite>
         </figcaption>
      </figure>
      <hr />
   </div>
   </div>
   
</template>

<script>
import { useUserStore } from '@/store/SignUp';
import { useRouter } from 'vue-router';
import { computed } from 'vue';

export default {
  name: 'SignUp',
  setup() {
    const router = useRouter();
    const userStore = useUserStore();

    const username = computed(() => userStore.username);
    const password = computed(() => userStore.password);
    const confirmPassword = computed(() => userStore.confirmPassword);
    const email = computed(() => userStore.email);
    const address = computed(() => userStore.address);
    const detailedAddress = computed(() => userStore.detailedAddress);
    const phone = computed(() => userStore.phone);
    const signupMethod = computed(() => userStore.signupMethod);
    const qpasswordMessage = computed(() => {
  if (password.value === confirmPassword.value && password.value !== '') {
    return '비밀번호가 일치합니다';
  } else {
    return '비밀번호가 일치하지 않습니다';
  }
});

const qpasswordColor = computed(() => {
  return password.value === confirmPassword.value && password.value !== '' ? 'blue' : 'red';
});

    const isPasswordMatch = computed(() => password.value === confirmPassword.value && password.value !== '');

    const registerUser = () => {
      if (password.value !== confirmPassword.value) {
        alert('비밀번호가 일치하지 않습니다.');
        return;
      }
      userStore.register(() => {
        router.push('/login');
      });
    };

    const updateUsername = (event) => {
      userStore.setUsername(event.target.value);
    };
    const updatePassword = (event) => {
      userStore.setPassword(event.target.value);
    };
    const updateConfirmPassword = (event) => {
      userStore.setConfirmPassword(event.target.value);
    };
    const updateEmail = (event) => {
      userStore.setEmail(event.target.value);
    };
    const updateAddress = (event) => {
      userStore.setAddress(event.target.value);
    };
    const updateDetailedAddress = (event) => {
      userStore.setDetailedAddress(event.target.value);
    };
    const updatePhone = (event) => {
      userStore.setPhone(event.target.value);
    };
    const updateSignupMethod = (event) => {
      userStore.setSignupMethod(event.target.value);
    };
    const handleLogoClick = () => {
      if (userStore.checkLogin()) {
        router.push({ name: 'MainHome' });
      } else {
        router.push({ name: 'Home' });
      }
    };

    const openPostcodePopup = () => {
      new daum.Postcode({
        oncomplete: (data) => {
          userStore.setAddress(data.address);
        }
      }).open();
    };
    

    return {
      username,
      password,
      confirmPassword,
      email,
      address,
      detailedAddress,
      phone,
      signupMethod,
      qpasswordMessage,
      isPasswordMatch,
      registerUser,
      updateUsername,
      updatePassword,
      updateConfirmPassword,
      updateEmail,
      updateAddress,
      updateDetailedAddress,
      updatePhone,
      updateSignupMethod,
      openPostcodePopup,
      qpasswordColor,
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
    /* .inner-container.container {
    } */

    h1 {
      text-align: center;
      color: #333;
      margin-bottom: 20px;
    }

    form > div {
      margin-bottom: 20px;
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    label {
      display: block;
      margin-bottom: 8px;
      color: #555;
      font-weight: bold;
      width: 100%;
      max-width: 400px; /* 레이블의 너비를 조정 */
    }

    input[type="text"],
    input[type="password"],
    input[type="email"],
    select {
      width: 100%;
      max-width: 400px; /* 입력 필드의 너비를 조정 */
      padding: 10px;
      border: 1px solid #ccc;
      border-radius: 4px;
      font-size: 14px;
      box-sizing: border-box;
    }

    .postcode-btn {
      width: 150px; /* 우편번호 버튼 너비 조정 */
      height: 50px;
      padding: 10px;
      background-color: #597a9e;
      color: white;
      border: none;
      border-radius: 4px;
      cursor: pointer;
      font-size: 15px;
      margin-top: 10px;
      position: relative; 
      right: 125px;
    }

    .submit-btn {
      width: 100%;
      max-width: 200px;
      height: 50px; /* 제출 버튼의 너비를 조정 */
      padding: 10px 20px;
      background-color: #007BFF;
      color: white;
      border: none;
      border-radius: 4px;
      cursor: pointer;
      font-size: 14px;
      margin-top: 20px;
      position: relative;
      left: 550px;
    }

    button:disabled {
      background-color: #aaa;
      cursor: not-allowed;
    }

    #qpassword {
      color: red;
      margin-top: 5px;
      font-size: 12px;
      width: 100%;
      max-width: 400px; /* qpassword 메시지의 너비를 조정 */
    }
</style>
