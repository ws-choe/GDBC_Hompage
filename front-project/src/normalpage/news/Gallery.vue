<template>
<!-- 고정 페이지 최상단 영역 -->

        <!-- 헤더 영역 메뉴바 끝 -->
      
      <!-- 헤더 영역 메뉴바 끝 -->

      
      <div class="news">
        <h2 class="centers">센터 소식</h2>
        <div class="button">
          <button class="buttonq" @click="filterNews('우리들의 이야기')">우리들의 이야기</button>
          <button class="buttonq" @click="filterNews('홍보영상')">홍보영상</button>
          <button class="buttonq" @click="filterNews('수강생 인터뷰')">수강생 인터뷰</button>
          <button class="buttonq"><router-link :to="{ name: 'Gallery' }">갤러리</router-link></button>
        </div>
        <div class="news-items-container">
          <div class="news-items">
            <div class="news-item"  v-for="(news, index) in filteredNewsList" :key="index">
              <template v-if="news.video">
                <iframe :src="news.video" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              </template>
              <template v-else>
                <img :src="require('@/assets/' + news.img)" alt="News image" class="imgs" />
                <p>{{ news.title }}</p>
              </template>
            </div>
            <div class="container">
        <div class="grid">
           <div class="background"></div>
           <div class="background"></div>
           <div class="background"></div>
           <div class="background"></div>
        </div>
     </div>
     
          </div>
        </div>
      </div>
      <br>
  
    <!-- footer 영억 시작 하단 -->
  
     
    <!-- footer 영역 끝 -->


</template>


<script src="@/assets/script/threemenu/Gallery.js"></script>


<style scoped src="@/assets/style/thirdmenu/Gallery.css">

</style>
