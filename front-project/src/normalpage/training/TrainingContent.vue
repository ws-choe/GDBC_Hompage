<template>
    <!-- 고정 페이지 최상단 영역 -->
    <div class="outer-container">
        <div class="inner-container">
           <!-- 헤더 영역 메뉴바 끝 -->
     
         <!-- 중단 부분-->
         <div class="project-container">
             <section id="training-overview" class="section">
                 <h1>훈련 개요</h1>
                 <div class="textline"></div>
                     <div class="support-target">
                         <h2>지원대상</h2>
                         <p>IT 직무<b>(백엔드 / 프론트엔드 / 퍼블리셔)</b> 취업연계 교육을 희망하는 장애인 당사자</p>
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
                             <p class="weq">1개월(120시간) 이상<br>12개월 미만의<br>기간 동안 진행</p>
                         </div>
                     </div>
                     <div class="training-img"><img src="../../assets/image/right.svg" alt="right SVG" /></div>
                     <div class="training-type" id="capacity-training">
                         <div class="trainingbox-header">
                             <h3>재직자근로자
                             <br>
                             능력향상훈련</h3>
                         </div>
                         <div class="trainingbox">
                             <p class="weq">최대 3개월까지 진행,<br>직장인의 직무능력<br>향상 목표</p>
                         </div>
                     </div>
                     <div class="training-img"><img src="../../assets/image/right.svg" alt="right SVG" /></div>
                     <div class="training-type" id="special-training">
                         <div class="trainingbox-header">
                             <h3>특별 과정</h3>
                         </div>
                         <div class="trainingbox">
                             <p class="weq">1개월 미만<br>단기 과정으로<br>특정 주제나 기술 집중</p>
                         </div>
                     </div>
                     <div class="training-img"><img src="../../assets/image/right.svg" alt="right SVG" /></div>
                     <div class="training-capacity">
                         <div class="trainingbox-header">
                             <h3>훈련 인원</h3>
                         </div>
                         <div class="trainingbox">
                             <p class="weq">각 과정당 훈련 인원은<br>10명 내외로 구성<br>이는 보다 밀도 있는<br>교육을 가능하게 함</p>
                         </div>
                     </div>
                 </div>
             </div>
         </section>
   
         <!-- 훈련 지원 섹션 -->
         <section id="training-support" class="section">
             <h2>훈련 지원</h2>
                 <div class="support-itembox">
                     <img src="../../assets/image/groupicon.png" class="groupicon" alt="훈련지원 아이콘">
                 </div>
         </section>
   
         <!-- 훈련 시간표 섹션 -->
         <section id="training-schedule" class="section">
             <h2>훈련 시간표</h2>
             <div class="schedule">
                 <img src="../../assets/image/schedule-img.png" class="schedule-img" alt="훈련시간표">
             </div>
             <div class="schedule-text">
                 <li>세부 맞춤훈련 계획과 훈련생 편의에 따라 탄력적으로 운영 예정</li>
             </div>
         </section>
         </div>
   
         <!-- footer 영억 시작 하단 -->
       
         <!-- footer 영역 끝 -->
      </div>
      </div>
   </template>

<script>
import useTraining from '@/assets/script/twomenu/Training.js';

export default {
  setup() {
    const { currentPage, totalPages, posts, logout } = useTraining();

    return {
      currentPage,
      totalPages,
      posts,
      logout
    };
  }
};
</script>


<style scoped src="@/assets/style/secondmenu/Training.css">

</style>



