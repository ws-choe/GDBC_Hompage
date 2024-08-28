<template>
<!-- 고정 페이지 최상단 영역 -->

        <!-- 헤더 영역 메뉴바 끝 -->
      
      <!-- 헤더 영역 메뉴바 끝 -->
      <h2 class="centers">센터 소식</h2>
      <div class="news-container">
      <div class="news">
        <div class="button">
          <router-link class="buttonq" :to="{ name: 'CenterNews' }">센터 소식</router-link>
          <router-link class="buttonq" :to="{ name: 'Scenery' }">센터 전경</router-link>
          <router-link class="buttonq" :to="{ name: 'Promotional' }">홍보 영상</router-link>
          <router-link class="buttonq active" :to="{ name: 'Gallery' }">수강생 갤러리</router-link>
          <router-link class="buttonq" :to="{ name: 'History' }">수강 후기</router-link>
        </div>
        <p class="bba">1기 프로젝트</p>
        <ul class="wi">
          <li>
            <a>
              <figure>
                <img src='@/assets/image/image3/1기생수업1.png' alt='Volcano and lava field against a stormy sky'>
                <figcaption>1기생 수업</figcaption>
              </figure>
            </a>
          </li>
          <li>
            <a>
              <figure>
                <img src='@/assets/image/image3/1기생수업2.png'>
                <figcaption>1기생 수업2</figcaption>
              </figure>
            </a>
          </li>
          <li>
            <a>
              <figure>
                <img src='@/assets/image/image3/1기생수업3.png'>
                <figcaption>1기생 수업3</figcaption>
              </figure>
            </a>
          </li>
          <li>
            <a>
              <figure>
                <img src='@/assets/image/image3/1기생수업4.png'>
                <figcaption>1기생 수업4</figcaption>
              </figure>
            </a>
          </li>
          <li>
            <a>
              <figure>
                <img src='@/assets/image/image3/1기생수업5.png'>
                <figcaption>1기생 수업5</figcaption>
              </figure>
            </a>
          </li>
          <li>
            <a>
              <figure>
                <img src='@/assets/image/image3/1기생수업6.png'>
                <figcaption>1기생 수업6</figcaption>
              </figure>
            </a>
          </li>
          <li>
            <a>
              <figure>
                <img src='@/assets/image/image3/1기생수업7.png'>
                <figcaption>1기생 수업7</figcaption>
              </figure>
            </a>
          </li>
          <li>
            <a>
              <figure>
                <img src='@/assets/image/image3/1기생수업8.png'>
                <figcaption>1기생 단체사진</figcaption>
              </figure>
            </a>
          </li>
          <li>
            <a>
              <figure>
                <img src='@/assets/image/image3/1기생수업6.png'>
                <figcaption>1기생 수업6</figcaption>
              </figure>
            </a>
          </li>
        </ul>
        <p class="bba">2기 프로젝트</p>
        <ul class="wi">
          <li>
            <a>
              <figure>
                <img src='@/assets/image/image3/2기생수업.jpg'>
                <figcaption>2기생 수업</figcaption>
              </figure>
            </a>
          </li>
          <li>
            <a>
              <figure>
                <img src='@/assets/image/image3/2기생수업2.jpg'>
                <figcaption>2기생 수업2</figcaption>
              </figure>
            </a>
          </li>
          <li>
            <a>
              <figure>
                <img src='@/assets/image/image3/2기생수업발.jpg'>
                <figcaption>2기생 수업발표</figcaption>
              </figure>
            </a>
          </li>
          <li>
            <a>
              <figure>
                <img src='@/assets/image/image3/2기생회의.jpg'>
                <figcaption>2기생 회의</figcaption>
              </figure>
            </a>
          </li>
          <li>
            <a>
              <figure>
                <img src='@/assets/image/image3/2기생회의2.jpg'>
                <figcaption>2기생 회의2</figcaption>
              </figure>
            </a>
          </li>
          <li>
            <a>
              <figure>
                <img src='@/assets/image/image3/2기수료식1.png'>
                <figcaption>2기생 수료식2</figcaption>
              </figure>
            </a>
          </li>
          <li>
            <a>
              <figure>
                <img src='@/assets/image/image3/2기수료식2.png'>
                <figcaption>2기생 수료식3</figcaption>
              </figure>
            </a>
          </li>
          <li>
            <a>
              <figure>
                <img src='@/assets/image/image3/2기수료식3.png'>
                <figcaption>2기생 수료식4</figcaption>
              </figure>
            </a>
          </li>
          <li>
            <a>
              <figure>
                <img src='@/assets/image/image3/2기수료식6.png'>
                <figcaption>2기생 수료식5</figcaption>
              </figure>
            </a>
          </li>
          <li>
            <a>
              <figure>
                <img src='@/assets/image/image3/2기프로젝트시연.png'>
                <figcaption>2기생 프로젝트 시연</figcaption>
              </figure>
            </a>
          </li>
          <li>
            <a>
              <figure>
                <img src='@/assets/image/image3/2기프로젝트시연2.png'>
                <figcaption>2기생 프로젝트 시연2</figcaption>
              </figure>
            </a>
          </li>
          <li>
            <a>
              <figure>
                <img src='@/assets/image/포스코2기입학식.png'>
                <figcaption>2기생 입학식</figcaption>
              </figure>
            </a>
          </li>
        </ul>
        <p class="bba">3기 프로젝트</p>
        <ul class="wi">
          <li>
            <a>
              <figure>
                <img src='@/assets/image/포스코3기수료식.png'>
                <figcaption>3기생 수료식</figcaption>
              </figure>
            </a>
          </li>
          <li>
            <a>
              <figure>
                <img src='@/assets/image/image33/adas(16).jpg'>
                <figcaption>3기생 단체사진</figcaption>
              </figure>
            </a>
          </li>
          <li>
            <a>
              <figure>
                <img src='@/assets/image/image33/adas(18).jpg'>
                <figcaption>3기생 단체사진2</figcaption>
              </figure>
            </a>
          </li>
          <li>
            <a>
              <figure>
                <img src='@/assets/image/image33/adas(6).jpg'>
                <figcaption>3기생 수업</figcaption>
              </figure>
            </a>
          </li>
          <li>
            <a>
              <figure>
                <img src='@/assets/image/image33/adas(9).jpg'>
                <figcaption>3기생 프로젝트</figcaption>
              </figure>
            </a>
          </li>
          <li>
            <a>
              <figure>
                <img src='@/assets/image/image33/adas(10).jpg'>
                <figcaption>3기생 프로젝트2</figcaption>
              </figure>
            </a>
          </li>
          <li>
            <a>
              <figure>
                <img src='@/assets/image/image33/adas(5).jpg'>
                <figcaption>3기생 프로젝트3</figcaption>
              </figure>
            </a>
          </li>
          <li>
            <a>
              <figure>
                <img src='@/assets/image/image33/adas(2).jpg'>
                <figcaption>3기생 프로젝트 회의</figcaption>
              </figure>
            </a>
          </li>
          <li>
            <a>
              <figure>
                <img src='@/assets/image/image33/adas(6).jpg'>
                <figcaption>3기생 프로젝트 회의2</figcaption>
              </figure>
            </a>
          </li>
        </ul>
        <p class="bba">4&4.5기 프로젝트</p>
        <ul class="wi">
          <li>
            <a>
              <figure>
                <img src='@/assets/image/포스코4기입학식.png'>
                <figcaption>4기생 입학식</figcaption>
              </figure>
            </a>
          </li>
          <li>
            <a>
              <figure>
                <img src='@/assets/image/포스코4.5기입학식.png'>
                <figcaption>4.5기생 입학식</figcaption>
              </figure>
            </a>
          </li>
          <li>
            <a>
              <figure>
                <img src='@/assets/image/image4n4.5/aaa(9).jpg'>
                <figcaption>합동프로젝트1</figcaption>
              </figure>
            </a>
          </li>
          <li>
            <a>
              <figure>
                <img src='@/assets/image/image4n4.5/aaa(10).jpg'>
                <figcaption>합동프로젝트2</figcaption>
              </figure>
            </a>
          </li>
          <li>
            <a>
              <figure>
                <img src='@/assets/image/image4n4.5/aaa(11).jpg'>
                <figcaption>합동프로젝트3</figcaption>
              </figure>
            </a>
          </li>
          <li>
            <a>
              <figure>
                <img src='@/assets/image/image4n4.5/aaa(12).jpg'>
                <figcaption>합동프로젝트4</figcaption>
              </figure>
            </a>
          </li>
          <li>
            <a>
              <figure>
                <img src='@/assets/image/image4n4.5/aaa(13).jpg'>
                <figcaption>합동프로젝트5</figcaption>
              </figure>
            </a>
          </li>
          <li>
            <a>
              <figure>
                <img src='@/assets/image/image4n4.5/aaa(14).jpg'>
                <figcaption>합동프로젝트6</figcaption>
              </figure>
            </a>
          </li>
          <li>
            <a>
              <figure>
                <img src='@/assets/image/image4n4.5/aaa(15).jpg'>
                <figcaption>합동프로젝트7</figcaption>
              </figure>
            </a>
          </li>
          <li>
            <a>
              <figure>
                <img src='@/assets/image/image4n4.5/aaa(16).jpg'>
                <figcaption>합동프로젝트8</figcaption>
              </figure>
            </a>
          </li>
          <li>
            <a>
              <figure>
                <img src='@/assets/image/image4n4.5/aaa(17).jpg'>
                <figcaption>합동프로젝트9</figcaption>
              </figure>
            </a>
          </li>
          <li>
            <a>
              <figure>
                <img src='@/assets/image/image4n4.5/aaa(18).jpg'>
                <figcaption>합동프로젝트10</figcaption>
              </figure>
            </a>
          </li>
          <li>
            <a>
              <figure>
                <img src='@/assets/image/image4n4.5/aaa(19).jpg'>
                <figcaption>합동프로젝트11</figcaption>
              </figure>
            </a>
          </li>
          <li>
            <a>
              <figure>
                <img src='@/assets/image/image4n4.5/aaa(20).jpg'>
                <figcaption>합동프로젝트12</figcaption>
              </figure>
            </a>
          </li>
        </ul>
      </div>
    </div>
  
    <!-- footer 영억 시작 하단 -->
  
     
    <!-- footer 영역 끝 -->


</template>


<script src="@/assets/script/threemenu/Gallery.js"></script>


<style scoped src="@/assets/style/thirdmenu/Gallery.css">

</style>
