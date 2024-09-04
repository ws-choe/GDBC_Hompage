<template>
  <!-- 고정 페이지 최상단 영역 -->
  <div class="outer-container">
    <div class="inner-container">
  <!-- 헤더 영역 메뉴바 끝 -->
  <h2 class="centers">홍보 영상</h2>
  <div class="news-container">
    <div class="news">
      <div class="button">
        <router-link class="buttonq" :to="{ name: 'CenterNews' }">센터 소식</router-link>
        <router-link class="buttonq" :to="{ name: 'Scenery' }">센터 전경</router-link>
        <router-link class="buttonq active" :to="{ name: 'Promotional' }">홍보 영상</router-link>
        <router-link class="buttonq" :to="{ name: 'Gallery' }">수강생 갤러리</router-link>
        <router-link class="buttonq" :to="{ name: 'History' }">수강 후기</router-link>
      </div>
      <div class="videos-items-container">
        <div class="videos-items">
          <div class="videos-item">
            <iframe 
              src="https://www.youtube.com/embed/yiB_a44lCRI" 
              frameborder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowfullscreen>
            </iframe>
          </div>
          <div class="videos-item">
            <iframe 
              src="https://www.youtube.com/embed/mu8Or8ygNUc" 
              frameborder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowfullscreen>
            </iframe>
          </div>
          <div class="videos-item">
            <iframe 
              src="https://www.youtube.com/embed/XlAQZTQDihc" 
              frameborder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowfullscreen>
            </iframe>
          </div>
          <div class="videos-item">
            <iframe 
              src="https://www.youtube.com/embed/2IZmUwboGcM" 
              frameborder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowfullscreen>
            </iframe>
          </div>
          <div class="videos-item">
            <iframe 
              src="https://www.youtube.com/embed/ioBjYfqThkE" 
              frameborder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowfullscreen>
            </iframe>
          </div>

          <div class="videos-item">
            <iframe 
              src="https://www.youtube.com/embed/-0HvgCGWw-g" 
              frameborder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowfullscreen>
            </iframe>
          </div>
          <div class="videos-item">
            <iframe 
              src="https://www.youtube.com/embed/t6kXn12yJfI" 
              frameborder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowfullscreen>
            </iframe>
          </div>
          <div class="videos-item">
            <iframe 
              src="https://www.youtube.com/embed/41yMev34fcI" 
              frameborder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowfullscreen>
            </iframe>
          </div>
          <div class="videos-item">
            <iframe 
              src="https://www.youtube.com/embed/PL_owJHlUqw" 
              frameborder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowfullscreen>
            </iframe>
          </div>
        </div>
      </div>
    </div>
    <br>
  </div>
  <!-- footer 영역 시작 하단 -->
  <!-- footer 영역 끝 -->
   </div>
   </div>
</template>

<script></script>

<style scoped src="@/assets/style/thirdmenu/Promotional.css">
</style>
