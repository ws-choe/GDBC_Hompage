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
              <a href="#">센터개요</a>
              <ul class="subMenu">
                <li><router-link :to="{ name: 'AgencyIntroduction' }">기관 소개</router-link></li>
                <li><router-link :to="{ name: 'CenterIntoduction' }">센터 소개</router-link></li>
                <li><router-link :to="{ name: 'WayToCome' }">오시는 길</router-link></li>
              </ul>
            </li>
            <li class="menu-item">
              <a href="#">훈련개요</a>
              <ul class="subMenu">
                <li><router-link :to="{ name: 'TrainingContent' }">훈련 안내</router-link></li>
                <li><router-link :to="{ name: 'AdmissionProcess' }">입학 절차</router-link></li>
                <li><router-link :to="{ name: 'ApplyForAdmission' }">입학 신청</router-link></li>
                <li><router-link :to="{ name: 'StudyTimeTable' }">학습 시간표</router-link></li>
              </ul>
            </li>
            <li class="menu-item">
              <a href="#">소식</a>
              <ul class="subMenu">
                <li><router-link :to="{ name: 'CenterNews' }">센터 소식</router-link></li>
                <li><router-link :to="{ name: 'Gallery' }">갤러리</router-link></li>
              </ul>
            </li>
            <li class="menu-item">
              <a href="#">프로젝트</a>
              <ul class="subMenu">
                <li><router-link :to="{ name: 'RecommendationProposal' }">과제 제안서</router-link></li>
                <li><router-link :to="{ name: 'ActivityPlan' }">수행 계획서</router-link></li>
                <li><router-link :to="{ name: 'Presentation' }">발표 자료</router-link></li>
                <li><router-link :to="{ name: 'DeFinalReport' }">최종 보고서</router-link></li>
                <li><router-link :to="{ name: 'DeCode' }">코드</router-link></li>
              </ul>
            </li>
            <li class="menu-item">
              <a href="#">공지사항</a>
              <ul class="subMenu">
                <li><router-link :to="{ name: 'RecruitmentNotice' }">모집 공고</router-link></li>
                <li><router-link :to="{ name: 'FreeBoard' }">자유 게시판</router-link></li>
                <li><router-link :to="{ name: 'CourseReviews' }">수강 후기</router-link></li>
              </ul>
            </li>
          </ul>
        </div>
      </header>
      <!-- 헤더 영역 메뉴바 끝 -->

      <!-- 센터 소식 영역 시작 -->
      <div class="container">
        <div class="first">
          <h1>센터 소식</h1>
          <div>구로 디지털 훈련센터 소개</div>
          <section class="slide-in">
            <h2>Q. 구로 디지털 훈련센터는 어떤 기관인가요?</h2>
            <h3>A. 훈련생 역량 수준별 IT 훈련과정과 기업 맞춤훈련과정을 운영합니다.</h3>
          </section>
        </div>

        <div class="second">
          <h1>센터 개요</h1>
          <section class="slide-in-left">
            <h2>구로디지털훈련센터는 2021년 개소하였으며, 다양한 교육을 제공합니다.</h2>
          </section>
          <section class="slide-in-left">
            <h2>7개의 훈련실과 3D 프린터실, 스타트업실 등이 마련되어 있습니다.</h2>
          </section>
          <section class="slide-in-left">
            <h2>최신 기술을 체험하고 익힐 수 있는 환경을 제공합니다.</h2>
          </section>
        </div>

        <div class="tirst">
          <section>
            <div class="image">이미지 1</div>
            <div class="image">이미지 2</div>
            <div class="image">이미지 3</div>
            <div class="image">이미지 4</div>
            <div class="image">이미지 5</div>
            <div class="image">이미지 6</div>
            <div class="image">이미지 7</div>
          </section>
        </div>
        <!--지도 api 부분 -->
        <div class="for">
          <h2 class="section-title">오시는 길</h2>
          <div class="direction-container">
            <div>
              <h1>지도 데이터</h1>
              <div v-for="location in locations" :key="location.id">
                <h2>{{ location.name }}</h2>
                <p>{{ location.description }}</p>
                <div :id="'map-' + location.id" class="map-container"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- 센터 소식 영역 끝 -->

      <!-- footer 영역 시작 하단 -->
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
            <a href="#"><img src="@/assets/facebook.png" alt="Facebook" class="social-icon"></a>
            <a href="#"><img src="@/assets/instagram.png" alt="Instagram" class="social-icon"></a>
            <a href="#"><img src="@/assets/youtube.png" alt="YouTube" class="social-icon"></a>
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
      <br>
      <router-view />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';

const locations = ref([]);

onMounted(async () => {
  try {
    const response = await axios.get('e3ad1695d6db8a274ee944cc06e07a16');
    locations.value = response.data;

    document.addEventListener("DOMContentLoaded", function() {
      let firstSection = document.querySelector('.slide-in');
      setTimeout(() => {
        firstSection.classList.add('visible');
      }, 500);

      let secondSections = document.querySelectorAll('.second .slide-in-left');
      secondSections.forEach((section, index) => {
        setTimeout(() => {
          section.classList.add('visible');
        }, 1000 + index * 500); // 순차적으로 나타나도록 설정
      });

      // 드래그로 이미지 슬라이드 기능
      const slider = document.querySelector('.tirst section');
      let isDown = false;
      let startX;
      let scrollLeft;

      slider.addEventListener('mousedown', (e) => {
        isDown = true;
        slider.classList.add('active');
        startX = e.pageX - slider.offsetLeft;
        scrollLeft = slider.scrollLeft;
      });

      slider.addEventListener('mouseleave', () => {
        isDown = false;
        slider.classList.remove('active');
      });

      slider.addEventListener('mouseup', () => {
        isDown = false;
        slider.classList.remove('active');
      });

      slider.addEventListener('mousemove', (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - slider.offsetLeft;
        const walk = (x - startX) * 3; // 스크롤 속도
        slider.scrollLeft = scrollLeft - walk;
      });

      // 이미지 확대 기능
      const images = document.querySelectorAll('.tirst .image');
      const modal = document.getElementById("myModal");
      const modalImg = document.getElementById("img01");
      const closeModal = document.querySelector('.close');

      images.forEach(img => {
        img.addEventListener('click', function () {
          modal.style.display = "block";
          modalImg.src = 'https://via.placeholder.com/450x450'; // 여기에 이미지 경로를 추가하세요
        });
      });

      closeModal.addEventListener('click', function () {
        modal.style.display = "none";
      });

      // 각 위치에 대해 지도 초기화
      locations.value.forEach(location => {
        const container = document.getElementById('map-' + location.id);
        const options = {
          center: new kakao.maps.LatLng(location.lat, location.lng),
          level: 3
        };
        const map = new kakao.maps.Map(container, options);

        const markerPosition = new kakao.maps.LatLng(location.lat, location.lng); 
        const marker = new kakao.maps.Marker({
          position: markerPosition
        });
        marker.setMap(map);

        const infowindow = new kakao.maps.InfoWindow({
          content: `<div style="padding:5px;">${location.name}</div>`
        });
        infowindow.open(map, marker);
      });
    });

  } catch (error) {
    console.error('API 요청 실패:', error);
  }
});
</script>

<style>
/* 기존 CSS */
.first { color: red; }
/* 메뉴바 */
.lnb { background-color: #f8f9fa; padding: 10px 0; }
.lnb > ul { display: flex; justify-content: center; padding: 0; margin: 0; list-style: none; }
.lnb > ul > li { position: relative; margin: 0 10px; }
.lnb > ul > li:hover > a { border-radius: 5px; }
.subMenu { display: none; position: absolute; top: 100%; left: 20; z-index: 1000; }
.lnb > ul > li:hover .subMenu { display: block; }
.subMenu li { padding: 0; margin: 0; }
.subMenu a { display: block; padding: 10px 20px; color: #333; font-weight: 400; text-decoration: none; }
.subMenu a:hover { background-color: #f1f1f1; }
header { position: relative; }
.lnb > ul { display: flex; justify-content: center; text-align: center; }
.lnb li { margin-right: 2px; }
.lnb a { display: block; width: 140px; height: 40px; text-align: center; line-height: 40px; color: blue; }
.subMenu { width: 170px; height: 200px; display: none; position: absolute; background-color: white; }
.lnb > ul:hover .subMenu { display: block; }
ul { list-style: none; padding: 0; margin: 0; }
.menu-item > a { text-decoration: none; color: black; padding: 10px; display: block; position: relative; }
.menu-item > a::after { content: ''; position: absolute; width: 0; height: 2px; display: block; margin-top: 5px; right: 0; background: black; transition: width 0.3s ease; -webkit-transition: width 0.3s ease; }
.menu-item > a:hover::after, .menu-item > a:focus::after { width: 100%; left: 0; background: black; }
.sub-menu { display: none; }
.menu-item:hover .sub-menu, .menu-item:focus-within .sub-menu { display: block; }
.sub-menu li { padding: 5px 10px; }
.sub-menu li a { text-decoration: none; color: black; }
.sub-menu li a:hover { text-decoration: underline; }
/* 전체 레이아웃 스타일 */
.outer-container { width: 100%; display: flex; justify-content: center; padding: 20px 0; }
.inner-container { width: 1800px; padding: 0 20px; background-color: #fff; border: 1px solid #ddd; border-radius: 10px; overflow: hidden; }
.logo { width: 200px; }
.logo2 { width: 150px; }
.auth-links { display: flex; align-items: center; border: 1px solid #ccc; border-radius: 5px; }
.auth-links a { padding: 10px 20px; text-decoration: none; color: #000; }
.divider { width: 1px; margin: 10px; background-color: #ccc; height: 20px; }
.banner { background-image: url('/src/assets/Main.png'); background-size: cover; background-position: center; background-repeat: no-repeat; text-align: center; background-color: #e9ecef; padding: 40px; border-radius: 10px; }
.sub-banner { content: ""; background: rgba(255, 255, 255, 0.8); z-index: 1; }
.banner h1 { font-size: 36px; margin-bottom: 20px; }
.banner p { font-size: 18px; }
.banner .highlight { font-weight: bold; color: #007bff; }
.banner .apply-button { margin-top: 20px; padding: 10px 20px; font-size: 18px; background-color: #007bff; color: #fff; border: none; border-radius: 5px; }
.news-section { margin-top: 40px; }
.news-section h2 { text-align: center; margin-bottom: 20px; }
.video-container { text-align: center; margin-bottom: 20px; }
.news-images { display: flex; justify-content: space-around; }
.news-images img { width: 23%; border-radius: 10px; }
.curriculum-section { margin-top: 40px; }
.curriculum-section h2 { text-align: center; margin-bottom: 20px; }
.curriculu-grid { display: flex; grid-template-columns: repeat(2, 1fr); gap: 200px; justify-items: center; }
.curriculum-item { background-color: #e9ecef; padding: 20px; border-radius: 10px; text-align: center; }
.testimonials-section { margin-top: 40px; }
.testimonials-section h2 { text-align: center; margin-bottom: 20px; }
.testimonials-section .testimonial { background-color: #e9ecef; padding: 20px; border-radius: 10px; }
/* 하단 */
.foote-content { justify-content: space-between; background-color: #fcfcfc; padding: 18px calc(1.6154rem + 50px) 18px 1.6154rem; height: 300px; margin: 50px; }
.foote-left { display: flex; justify-content: space-between; background-color: #f4f4f4; padding: 18px calc(1.6154rem + 50px) 18px 1.6154rem; height: auto; margin: auto; }
.foote-left .logo { margin-right: 100px; }
.foote-left .info { display: flex; flex-direction: column; }
.foote-left .info .links { display: flex; gap: 10px; margin-bottom: 20px; }
.foote-left .info .links a { text-decoration: none; margin-bottom: 5px; }
.foote-left .info .contact p { margin: 2px 0; }
.foote-right { display: flex; flex-direction: column; align-items: flex-end; position: relative; }
.foote-right .buttons { display: flex; flex-direction: column; margin-bottom: 20px; }
.foote-right .buttons button { margin-bottom: 10px; padding: 10px 20px; border: none; cursor: pointer; }
.foote-right .social-icons { display: flex; margin-bottom: 20px; }
.foote-right .social-icons a { margin-right: 10px; }
.foote-right .certification img { width: 100px; }
.logo2 { }
.certification { width: 100px; }
.box { position: relative; }
.input { padding: 10px; background: none; border: 4px solid #ffd52d; border-radius: 50px; box-sizing: border-box; font-family: Comic Sans MS; font-size: 26px; color: #ffd52d; outline: none; transition: .5s; }
.box:hover input { background: #3b3640; border-radius: 10px; }
.box i { position: absolute; top: 50%; right: 15px; transform: translate(-50%,-50%); font-size: 26px; color: #ffd52d; transition: .2s; }
.box:hover i { opacity: 0; z-index: -1; }
.social-icons { display: flex; gap: 10px; }
.social-icon { width: 24px; height: auto; }
/* 추가 CSS */
body { font-family: Arial, sans-serif; line-height: 1.6; margin: 0; padding: 0; background-color: #f4f4f4; }
.container { width: 80%; margin: auto; overflow: hidden; }
h1, h2, h3 { color: #333; }
.first, .second, .tirst, .for { background: #fff; padding: 20px; margin-bottom: 20px; box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); }
.first h1, .second h1 { font-weight: bold; border-bottom: 2px solid #333; padding-bottom: 10px; margin-bottom: 20px; display: inline-block; }
.first span, .second section h2 { font-weight: 300; color: #666; }
.slide-in { opacity: 0; transform: translateX(100%); transition: all 0.5s ease-out; }
.slide-in.visible { opacity: 1; transform: translateX(0); }
.slide-in-left { opacity: 0; transform: translateX(-100%); transition: all 0.5s ease-out; }
.slide-in-left.visible { opacity: 1; transform: translateX(0); }
.tirst section { display: flex; flex-wrap: nowrap; overflow: hidden; cursor: grab; }
.tirst section:active { cursor: grabbing; }
.tirst section div { flex: 0 0 auto; width: 450px; height: 450px; margin: 5px; background: #ccc; display: flex; justify-content: center; align-items: center; cursor: pointer; }
.modal { display: none; position: fixed; z-index: 1000; left: 0; top: 0; width: 100%; height: 100%; overflow: auto; background-color: rgba(0, 0, 0, 0.8); }
.modal-content { margin: 10% auto; display: block; width: 80%; max-width: 700px; }
.close { position: absolute; top: 20px; right: 35px; color: #fff; font-size: 40px; font-weight: bold; transition: 0.3s; }
.close:hover, .close:focus { color: #bbb; text-decoration: none; cursor: pointer; }
.map-container { width: 50%; height: 450px; margin-left: 20px; }
.direction-container { display: flex; align-items: flex-start; margin-top: 20px; }
.direction-image { width: 50%; height: auto; }
#map { width: 100%; height: 100%; }
h2.section-title { font-size: 24px; border-bottom: 2px solid black; padding-bottom: 5px; margin-top: 40px; }
</style>
