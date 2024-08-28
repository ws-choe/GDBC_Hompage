<template>
   <!-- 고정 페이지 최상단 영역 -->
    <!-- 헤더 영역 메뉴바 끝 -->
    <h2 class="centers">센터 소식</h2>
       <div class="news-container">
          <div class="news">
            <div class="button">
              <router-link class="buttonq" :to="{ name: 'CenterNews' }">센터 소식</router-link>
              <router-link class="buttonq active" :to="{ name: 'Scenery' }">센터 전경</router-link>
              <router-link class="buttonq" :to="{ name: 'Promotional' }">홍보 영상</router-link>
              <router-link class="buttonq" :to="{ name: 'Gallery' }">수강생 갤러리</router-link>
              <router-link class="buttonq" :to="{ name: 'History' }">수강 후기</router-link>
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
              </div>
            </div>
          </div>
          <br>
          
        </div>
         
        <!-- footer 영억 시작 하단 -->
    
         
        <!-- footer 영역 끝 -->
  
    
  
  
    </template>
    
    <script src="@/assets/script/threemenu/Scenery.js"></script>
  
    <style scoped src="@/assets/style/thirdmenu/Scenery.css">
    
    </style>
    