<template>
  <!-- 고정 페이지 최상단 영역 -->
  <div class="outer-container">
    <div class="inner-container">
      <div class="d-flex w-100 align-items-center justify-content-between">
        <div class="d-flex align-items-center">
          <router-link class="navbar-brand" :to="{ name: 'Home' }">
            <img src="@/assets/logo.png" class="logo" alt="로고">
          </router-link>
        </div>
        <div class="d-flex align-items-center">
          <router-link class="nav-link" :to="{ name: 'SignUp' }">회원가입</router-link>
          <div class="divider"></div>
          <router-link class="nav-link" :to="{ name: 'Login' }">로그인</router-link>
        </div>
      </div>
      <!-- 헤더 영역 메뉴바 시작 -->
      <header>   
        <div class="lnb">
                <ul>
                  <li class="menu-item">
                    <li><a href="#">센터개요</a>
                        <li class="subMenu">
                          <li><router-link  :to="{ name: 'AgencyIntroduction' }">기관 소개</router-link></li>
                          <li><router-link  :to="{ name: 'CenterIntoduction' }">센터 소개</router-link></li>
                          <li><router-link  :to="{ name: 'WayToCome' }">오시는 길</router-link></li>
                    </li>
                  </li>
                    </li>
                    <li><a href="#">훈련개요</a>
                        <li class="subMenu">
                          <li><router-link  :to="{ name: 'TrainingContent' }">훈련 안내</router-link></li>
                          <li><router-link  :to="{ name: 'AdmissionProcess' }">입학 절차</router-link></li>
                          <li><router-link  :to="{ name: 'ApplyForAdmission' }">입학 신청</router-link></li>
                          <li><router-link  :to="{ name: 'StudyTimeTable' }">학습 시간표</router-link></li>
                    </li>
                    </li>
                    <li><a href="#">소식</a>
                        <li class="subMenu">
                          <li><router-link  :to="{ name: 'CenterNews' }">센터 소식</router-link></li>
                          <li><router-link :to="{ name: 'Gallery' }">갤러리</router-link></li>
                    </li>
                    </li>
                    <li><a href="#">프로젝트</a>
                        <li class="subMenu">
                          <li><router-link :to="{ name: 'RecommendationProposal' }">과제 제안서</router-link></li>
                          <li><router-link :to="{ name: 'ActivityPlan' }">수행 계획서</router-link></li>
                          <li><router-link :to="{ name: 'Presentation' }">발표 자료</router-link></li>
                          <li><router-link :to="{ name: 'DeFinalReport' }">최종 보고서</router-link></li>
                          <li><router-link :to="{ name: 'DeCode' }">코드</router-link></li>
                    </li>
                    </li>
                    <li><a href="#">공지사항</a>
                        <li class="subMenu">
                          <li><router-link :to="{ name: 'RecruitmentNotice' }">모집 공고</router-link></li>
                          <li><router-link :to="{ name: 'FreeBoard' }">자유 게시판</router-link></li>
                          <li><router-link :to="{ name: 'CourseReviews' }">수강 후기</router-link></li>
                    </li>
                    </li>  
                    <form class="d-flex" role="search">
                      <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
                      <button class="btn btn-outline-success" type="submit">Search</button>
                    </form>
                </ul>
            </div>
        </header>

        <!-- 헤더 영역 메뉴바 끝 -->
  
      <!-- 중단 부분-->

          <section id="training-overview" class="section">
              <h1>훈련 개요</h1>
              <div class="textline"></div>
                  <div class="support-target">
                      <h2>지원대상</h2>
                      <p>IT 직무(백엔드 / 프론트엔드 / 퍼블리셔) 취업연계 교육을 희망하는 장애인 당사자</p>
                      <div class="support-textline"></div>
                  </div>
          <div class="education-details">
              <h2>교육내용 및 일정</h2>
              <div class="training-types">
                  <div class="training-type" id="regular-training">
                      <div class="trainingbox-header">
                          <h3>양성 훈련</h3>
                      </div>
                      <div class="trainingbox">
                          <p>1개월(120시간) 이상<br>12개월 미만의<br>기간 동안 진행</p>
                      </div>
                  </div>
                  <div class="training-img"><img src="../../assets/right.svg" alt="right SVG" /></div>
                  <div class="training-type" id="capacity-training">
                      <div class="trainingbox-header-alt">
                          <h3 class="trainingbox-header-title">재직자근로자</h3>
                          <h3 class="trainingbox-header-subtitle">능력향상훈련</h3>
                      </div>
                      <div class="trainingbox">
                          <p>최대 3개월까지 진행,<br>직장인의 직무능력<br>향상 목표</p>
                      </div>
                  </div>
                  <div class="training-img"><img src="../../assets/right.svg" alt="right SVG" /></div>
                  <div class="training-type" id="special-training">
                      <div class="trainingbox-header">
                          <h3>특별 과정</h3>
                      </div>
                      <div class="trainingbox">
                          <p>1개월 미만<br>단기 과정으로<br>특정 주제나 기술 집중</p>
                      </div>
                  </div>
                  <div class="training-img"><img src="../../assets/right.svg" alt="right SVG" /></div>
                  <div class="training-capacity">
                      <div class="trainingbox-header">
                          <h3>훈련 인원</h3>
                      </div>
                      <div class="trainingbox">
                          <p>각 과정당 훈련 인원은<br>10명 내외로 구성<br>이는 보다 밀도 있는<br>교육을 가능하게 함</p>
                      </div>
                  </div>
              </div>
          </div>
      </section>

      <!-- 훈련 지원 섹션 -->
      <section id="training-support" class="section">
          <h2>훈련 지원</h2>
              <div class="support-itembox">
                  <img src="../../assets/groupicon.png" class="groupicon" alt="훈련지원 아이콘">
              </div>
      </section>

      <!-- 훈련 시간표 섹션 -->
      <section id="training-schedule" class="section">
          <h2>훈련 시간표</h2>
          <div class="schedule">
              <img src="../../assets/schedule-img.png" class="schedule-img" alt="훈련시간표">
          </div>
          <div class="schedule-text">
              <li>세부 맞춤훈련 계획과 훈련생 편의에 따라 탄력적으로 운영 예정</li>
          </div>
      </section>

      <!-- footer 영억 시작 하단 -->
      <footer>
  
          <div class="foote-left">
            <div class="logo">
              <img src="@/assets/logo2.png" class="logo2" alt="한국장애인고용공단">
            </div>
            <div class="info">
              <div class="links">
                <a href="#">개인정보처리방침</a>
                <a href="#">서비스이용약관</a>
                <a href="#">저작권보호정책</a>
                <a href="#">찾아오시는길</a>
              </div>
              <div class="contact">
                <p>[08379] 서울시 구로구 디지털로 300, 11층</p>
                <p>구로동, 지밸리비즈플라자</p>
                <p class="phone-fax">전화: 02-6343-5700 | FAX: 050-3470-0117</p>
                <p class="hours">평일 09:00 ~ 18:00 (휴게시간: 12:00 ~ 13:00)</p>
                <p class="tel">TEL: 02-0000-0000</p>
                <p class="fax">FAX: 02-0000-0000</p>
              </div>
            </div>
            <div class="social-icons">
              <div class="social-icons">
                <a href="#"><img src="@/assets/facebook.png" alt="Facebook" class="social-icon"></a>
                <a href="#"><img src="@/assets/instagram.png" alt="Instagram" class="social-icon"></a>
                <a href="#"><img src="@/assets/youtube.png" alt="YouTube" class="social-icon"></a>
              </div>
              </div>
            <div class="foote-right">
              <div class="d-flex buttons">
                <button>공단 운영 웹사이트</button>
                <button>고용노동부 산하기관</button>
              </div>
              <div class="certification">
                <a href="https://www.wa.or.kr/board/list.asp?BoardID=0006" title="새창" target="_blank">
                  <img src="@/assets/footerlogo2.png" alt="WA 인증 마크">
                </a>
              </div>
            </div>
          </div>
          
      </footer>
      <!-- footer 영역 끝 -->
   
     
      <router-view />
    </div>
  </div>

  
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

<style>
/* 메뉴바 */
.lnb {
  background-color: #f8f9fa;
  padding: 10px 0;
}

.lnb > ul {
  display: flex;
  justify-content: center;
  padding: 0;
  margin: 0;
  list-style: none;
}

.lnb > ul > li {
  position: relative;
  margin: 0 10px;
}

.lnb > ul > li:hover > a {
  border-radius: 5px;
}
 
.subMenu {
  display: none;
  position: absolute;
  top: 100%;
  left: 20;
  z-index: 1000;
}

.lnb > ul > li:hover .subMenu {
  display: block;
}

.subMenu li {
  padding: 0;
  margin: 0;
}

.subMenu a {
  display: block;
  padding: 10px 20px;
  color: #333;
  font-weight: 400;
  text-decoration: none;
}

.subMenu a:hover {
  background-color: #f1f1f1;
}


header{
  position: relative;
}

.lnb>ul {display: flex;
  justify-content: center;
  text-align: center;
}

.lnb li { 
  margin-right:2px;
}

.lnb a {display: block;
      width: 140px; 
      height: 40px; 
      text-align: center; 
      line-height: 40px;
      color: blue;
}
.subMenu {
  width: 170px;  
  height:200px; 
  display: none; 
  position: absolute; 
  background-color: white;
}

.lnb>ul:hover .subMenu {
  display: block;
}

ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.menu-item > a {
  text-decoration: none;
  color: black;
  padding: 10px;
  display: block;
  position: relative;
}

.menu-item > a::after {
  content: '';
  position: absolute;
  width: 0;
  height: 2px;
  display: block;
  margin-top: 5px;
  right: 0;
  background: black;
  transition: width 0.3s ease;
  -webkit-transition: width 0.3s ease;
}

.menu-item > a:hover::after, .menu-item > a:focus::after {
  width: 100%;
  left: 0;
  background: black;
}

.sub-menu {
  display: none;
}

.menu-item:hover .sub-menu, .menu-item:focus-within .sub-menu {
  display: block;
}

.sub-menu li {
  padding: 5px 10px;
}

.sub-menu li a {
  text-decoration: none;
  color: black;
}

.sub-menu li a:hover {
  text-decoration: underline;
}

/* 전체 레이아웃 스타일 */
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
  width: 200px;
}

.logo2 {
  width: 150px;
}
.auth-links {
  display: flex;
  align-items: center;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.auth-links a {
  padding: 10px 20px;
  text-decoration: none;
  color: #000;
}

.divider {
  width: 1px;
  margin: 10px;
  background-color: #ccc;
  height: 20px;
}

.banner {
  background-image: url('/src/assets/Main.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  text-align: center;
  background-color: #e9ecef;
  padding: 40px;
  border-radius: 10px;
}

.sub-banner{
  content: "";

  background: rgba(255, 255, 255, 0.8); /* 반투명 배경 */
  z-index: 1; /* 배경 위에 텍스트가 위치하도록 설정 */
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

.curriculu-grid {
  display: flex;
  grid-template-columns: repeat(2, 1fr);
  gap: 200px;
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

/* 하단 */

.foote-content {
  justify-content: space-between;
  background-color: #fcfcfc;
  padding: 18px calc(1.6154rem + 50px) 18px 1.6154rem;
  height: 300px;
  margin: 50px;
}

.foote-left {
  display: flex;
  justify-content: space-between;
  background-color: #f4f4f4;
  padding: 18px calc(1.6154rem + 50px) 18px 1.6154rem;
  height: auto;
  margin: auto;
  
}


.foote-left .logo {
  margin-right: 100px;
}

.foote-left .info {
  display: flex;
  flex-direction: column;
}

.foote-left .info .links {
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
}

.foote-left .info .links a {

  text-decoration: none;
  margin-bottom: 5px;
}

.foote-left .info .contact p {
  margin: 2px 0;
}

.foote-right {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  position: relative;

}

.foote-right .buttons {
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  
}

.foote-right .buttons button {
  margin-bottom: 10px;
  padding: 10px 20px;
  border: none;
  cursor: pointer;
}

.foote-right .social-icons {
  display: flex;
  margin-bottom: 20px;
}

.foote-right .social-icons a {
  margin-right: 10px;
}

.foote-right .certification img {
  width: 100px;
}
.logo2 {

}
.certification {
  width: 100px;
}
.box{
    position: relative;
    
}

.input {
    padding: 10px;
 
    background: none;
    border: 4px solid #ffd52d;
    border-radius: 50px;
    box-sizing: border-box;
    font-family: Comic Sans MS;
    font-size: 26px;
    color: #ffd52d;
    outline: none;
    transition: .5s;
}
.box:hover input{
     
    background: #3b3640;
    border-radius: 10px;
}
.box i{
    position: absolute;
    top: 50%;
    right: 15px;
    transform: translate(-50%,-50%);
    font-size: 26px;
    color: #ffd52d;
    transition: .2s;
}
.box:hover i{
    opacity: 0;
    z-index: -1;
}

.social-icons {
  display: flex;
  gap: 10px; /* 아이콘 사이의 간격을 조정합니다. 필요에 따라 수정하세요. */
}

.social-icon {
  width: 24px; /* 아이콘의 너비를 조정합니다. 필요에 따라 수정하세요. */
  height: auto; /* 비율을 유지하면서 높이를 자동으로 조정합니다. */
}

/* 훈련안내 시작*/

#training-overview{
  margin-top: 40px;
}

h1 {
  text-align:left;
}

.textline {
  width: 368px;
  height: 2px;
  background-color: #002D67;
}

.support-textline{
  width: 420px;
  height: 22px;
  background-color: #B8C9B9;
}

.support-target {
  margin: 30px 0 0 30px;
  position: relative;
  font-size: 18px;
}

.support-target p {
  color: #002D67;
}

.support-textline{
  position: absolute;
  top: 59px;
  left: 20px;
  width: 305px;
  height: 13px;
  z-index: -1;
}

.education-details h2 {
  margin: 30px 0 0 30px;
}

.trainingbox-header {
  width: 252px;
  height: 80px;
  background-color: #406E43;
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
  position: relative;
}

.trainingbox-header h3 {
  position: absolute;
  width: 252px;
  display: flex;
  text-align: center;
  justify-content: center; 
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  margin: 0;
  color: white;
}

.trainingbox {
  width: 252px;
  height: 291px;
  border: 1px solid #002D67;
  border-bottom-left-radius: 30px;
  border-bottom-right-radius: 30px;
  position: relative;
}

.trainingbox p {
  position: absolute;
  width: 252px;
  height: 291px;
  text-align: center;
  display: flex;
  justify-content: center; 
  align-items: center;

}

.trainingbox-header-alt {
  width: 252px;
  height: 80px;
  background-color: #406E43;
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
  position: relative;
  display: flex; /* 추가 */
  align-items: center; /* 수직 중앙 정렬 */
  justify-content: center; /* 수평 중앙 정렬 */
  flex-direction: column; /* 수직으로 쌓이게 설정 */
  text-align: center;
  color: white;
  padding: 0; /* 패딩 제거 */
  margin: 0; /* 마진 제거 */
  
}

.trainingbox-header-title {
  font-size: 20px;

}


.training-types {
  display: flex;
  margin: 60px auto;
  max-width: 1200px;
}

.training-img {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 30px;
}

#training-support {
  margin: 30px 0 0 30px;
  position: relative;
}

.groupicon {
  width: 1044px;
  height: 274px;
  position: relative;
  
}

.support-itembox {
  width: 1237px;
  height: 451px;
  background-color: #F5F7F9;
  border-radius: 89px;
  position: relative;
  margin-top: 20px;
  padding: 30px;
  display: flex; /* 추가 */
  justify-content: center; /* 추가 */
  align-items: center; /* 추가 */
}

#training-schedule {
  margin: 30px;
}

.schedule {
  position: relative;
  width: 1059px;
  height: 130px;
}

.schedule-img {
  width: 100%;
  height: 100%;
}

.schedule-text {
  margin: 30px 0;
}
</style>



