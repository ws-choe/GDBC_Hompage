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
          <p>환영합니다, {{ username }}!</p>
          <button @click="logout" class="btn btn-outline-danger ms-3">로그아웃</button>
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
      <div class="main-content">
      <div class="banner">
        <h1>장애인 디지털 코딩아카데미</h1>
        <p>IT 직무(프론트 엔드 개발, 풀스택, 빅데이터)향상과정</p>
        <p>취업연계교육을 희망하는 장애인 당사자</p>
        <p>교육 일정: 2024년 <span class="highlight">하반기</span></p>
        <p>신청 마감: <span class="highlight">2024년 24시 마감</span></p>
        <button class="apply-button">신청 Click!!</button>
      </div>
      <div class="news-section">
        <h2>소식이야기</h2>
        <div class="video-container">
          <p>홍보영상</p>
        </div>
        <div class="news-images">
          <img src="n" alt="News Image 1">
          <img src="" alt="News Image 2">
          <img src="" alt="News Image 3">
          <img src="" alt="News Image 4">
        </div>
      </div>
      <div class="curriculum-section">
        <h2>분야 커리큘럼</h2>
        <div class="curriculum-grid">
          <div class="curriculum-item">프론트엔드</div>
          <div class="curriculum-item">백엔드</div>
          <div class="curriculum-item">DB</div>
          <div class="curriculum-item">UI/UX</div>
        </div>
      </div>
      <div class="testimonials-section">
        <h2>수강 후기</h2>
        <p>"많은 수강생들이 열정과 노력으로 성공을 이뤄냈습니다."</p>
        <div class="testimonial">
          <p><strong>홍길동 님</strong></p>
          <p>3기 문학소문생 카카오(주) IT 개발 팀 프론트 엔드 sw직무 근무</p>
          <p>체계적인 커리큘럼을 통해 개발 기초를 탄탄히 쌓을 수 있었고, 실무적인 프로젝트 경험을 통해 자신감을 얻었습니다. 초보자에게도 적극 추천합니다!</p>
        </div>
      </div>
    </div>
    <div class="footer">
      <div class="contact-info">
        <p>한국장애인고용공단</p>
        <p>전화: 02-6343-5700</p>
        <p>팩스: 0506-070-0170</p>
        <p>이메일: info@kead.or.kr</p>
        <p>주소: 서울특별시 영등포구 여의도동 여의도동로 101</p>
      </div>
      <div class="social-links">
        <a href="#"><img src="" alt="Facebook"></a>
        <a href="#"><img src="" alt="Instagram"></a>
        <a href="#"><img src="" alt="YouTube"></a>
      </div>
    </div>
    <router-view />
    <div class="justify-content-center text-center">
      <h1 class="text-warning fw-bold">환영합니다</h1>
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
   </div>
   
</template>

<script>
import { useUserStore } from '@/store/SignUp';
import { mapState } from 'pinia';
import { useRouter } from 'vue-router';

export default {
  name: 'MainHome',
  setup() {
    const userStore = useUserStore();
    const router = useRouter();

    const logout = () => {
      userStore.logout();
      router.push({ name: 'Home' });
    };

    const handleLogoClick = () => {
      if (userStore.checkLogin()) {
        router.push({ name: 'MainHome' });
      } else {
        router.push({ name: 'Home' });
      }
    };

    return {
      logout,
      handleLogoClick
    };
  },
  computed: {
    ...mapState(useUserStore, ['username']),
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
.banner {
text-align: center;
background-color: #e9ecef;
padding: 40px;
border-radius: 10px;
}

.banner h1 {
font-size: 36px;
margin-bottom: 20px;
}

.banner p {
font-size: 18px;
}

.banner .highlight {
font-weight: bold;
color: #007bff;
}

.banner .apply-button {
margin-top: 20px;
padding: 10px 20px;
font-size: 18px;
background-color: #007bff;
color: #fff;
border: none;
border-radius: 5px;
}

.news-section {
margin-top: 40px;
}

.news-section h2 {
text-align: center;
margin-bottom: 20px;
}

.video-container {
text-align: center;
margin-bottom: 20px;
}

.news-images {
display: flex;
justify-content: space-around;
}

.news-images img {
width: 23%;
border-radius: 10px;
}

.curriculum-section {
margin-top: 40px;
}

.curriculum-section h2 {
text-align: center;
margin-bottom: 20px;
}

.curriculum-grid {
display: grid;
grid-template-columns: repeat(2, 1fr);
gap: 20px;
justify-items: center;
}

.curriculum-item {
background-color: #e9ecef;
padding: 20px;
border-radius: 10px;
text-align: center;
}

.testimonials-section {
margin-top: 40px;
}

.testimonials-section h2 {
text-align: center;
margin-bottom: 20px;
}

.testimonials-section .testimonial {
background-color: #e9ecef;
padding: 20px;
border-radius: 10px;
}

.footer {
background-color: #343a40;
color: #fff;
padding: 20px;
border-radius: 10px;
margin-top: 40px;
display: flex;
justify-content: space-between;
align-items: center;
}

.contact-info {
max-width: 50%;
}

.social-links img {
width: 30px;
margin-left: 10px;
}
</style>
