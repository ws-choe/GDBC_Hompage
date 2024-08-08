<template>
  <div class="outer-container">
    <div class="inner-container">
      <div class="d-flex w-100 align-items-center justify-content-between">
        <div class="d-flex align-items-center">
          <router-link class="navbar-brand" :to="{ name: 'Home' }">
            <img src="@/assets/logo.png" class="logo" alt="로고">
          </router-link>
        </div>
          <div>
              <div>
  <div v-if="userStore.isLoggedIn">
    <p>환영합니다, {{ userStore.username }}!</p>
    <button @click="logout" class="btn btn-outline-danger ms-3">로그아웃</button>
  </div>
  <div v-else>
    <router-link class="nav-link" :to="{ name: 'SignUp' }">회원가입</router-link>
    <div class="divider"></div>
    <router-link class="nav-link" :to="{ name: 'Login' }">로그인</router-link>
  </div>
</div>
        </div>
      </div>
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
        <form class="d-flex" role="search">
            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
            <button class="btn btn-outline-success" type="submit">Search</button>
        </form>
    </div>
</header>

<h1>모집 글 작성 하는곳</h1>
<h1>모집 글 작성 하는곳</h1>

<div class="container">
      <h1>{{ isEditing ? '게시물 수정' : '게시물 작성' }}</h1>
      <form class="post-form" @submit.prevent="submitPost">
        <input v-model="title" type="text" placeholder="제목" class="input" required />
        <textarea v-model="content" placeholder="내용" class="textarea" required></textarea>
        <div>
          <label for="image-upload">첨부파일:</label>
          <input id="image-upload" type="file" @change="handleFileChange" />
          <img v-if="imagePreview" :src="imagePreview" alt="미리보기" width="200" />
        </div>
        <button type="submit" class="button">{{ isEditing ? '수정하기' : '작성하기' }}</button>
      </form>
    </div>



    
          

      <div class="foote">
        <img src="@/assets/logo2.png" class="logo2" alt="로고2">
        <div class="policy-links">
          <a href="#">개인정보처리방침</a>
          <span>|</span>
          <a href="#">서비스이용약관</a>
          <span>|</span>
          <a href="#">저작권보호정책</a>
          <span>|</span>
          <a href="#">찾아오시는길</a>
        </div>
        <div class="d-flex contact-inf">
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
    </div>
  </div>
  
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import axios from 'axios';
import { useUserStore } from '@/store/SignUp';
import { storeToRefs } from 'pinia';

const route = useRoute();
const router = useRouter();
const userStore = useUserStore();
const { isLoggedIn } = storeToRefs(userStore);

const title = ref('');
const content = ref('');
const image = ref(null);
const imagePreview = ref(null);
const isEditing = ref(false);

const handleFileChange = (event) => {
  const file = event.target.files[0];
  if (file) {
    image.value = file;
    const reader = new FileReader();
    reader.onload = (e) => {
      imagePreview.value = e.target.result;
    };
    reader.readAsDataURL(file);
  }
};

const fetchPost = async (id) => {
  try {
    const response = await axios.get(`http://localhost:80/posts/${id}`);
    title.value = response.data.title;
    content.value = response.data.content;
    // 이미지 미리보기 설정 (만약 이미지 URL을 제공하는 경우)
    // imagePreview.value = response.data.imageURL;
  } catch (error) {
    console.error('Error fetching post:', error);
  }
};

const submitPost = async () => {
  if (!isLoggedIn.value) {
    alert('로그인이 필요합니다.');
    router.push({ name: 'Login' });
    return;
  }

  if (!title.value || !content.value || !userStore.id) {
    console.error('Missing required fields: title, content, or userId');
    alert('제목, 내용, 또는 사용자 ID가 없습니다.');
    return;
  }

  const formData = new FormData();
  formData.append('title', title.value);
  formData.append('content', content.value);
  formData.append('userId', userStore.id);
  if (image.value) {
    formData.append('image', image.value);
  }

  try {
    if (isEditing.value) {
      await axios.put(`http://localhost:80/posts/${route.params.id}`, formData, {
        headers: { 'Content-Type': 'multipart/form-data' }
      });
    } else {
      await axios.post('http://localhost:80/posts', formData, {
        headers: { 'Content-Type': 'multipart/form-data' }
      });
    }
    router.push({ name: 'RecruitmentNotice' });
  } catch (error) {
    console.error('Error submitting post:', error.response ? error.response.data : error.message);
    alert('게시글 작성/수정 중 오류가 발생했습니다.');
  }
};

onMounted(() => {
  if (route.params.id) {
    isEditing.value = true;
    fetchPost(route.params.id);
  }
});
</script>
<style>
/* 메뉴바 스타일 */
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

.foote {
  background-color: #f8f8f8; /* 배경색 설정 */
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid #f8f8f8;
}
.contact-inf {
  display: flex;

  gap: 12px;
}

</style>
