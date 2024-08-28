<template>
 <!-- 고정 페이지 최상단 영역 -->
  <!-- 헤더 영역 메뉴바 끝 -->
  <h2 class="centers">센터 소식</h2>
     <div class="news-container">
        <div class="news">
          <div class="button">
            <router-link class="buttonq active" :to="{ name: 'CenterNews' }">센터 소식</router-link>
            <router-link class="buttonq" :to="{ name: 'Scenery' }">센터 전경</router-link>
            <router-link class="buttonq" :to="{ name: 'Promotional' }">홍보 영상</router-link>
            <router-link class="buttonq" :to="{ name: 'Gallery' }">수강생 갤러리</router-link>
            <router-link class="buttonq" :to="{ name: 'History' }">수강 후기</router-link>
          </div>
          <div class="news-items-container">
            <div class="news-items">
              <div class="flip">
                <a href="https://www.ngetnews.com/news/articleView.html?idxno=413730" class="front" style="background-image: url('https://cdn.ngetnews.com/news/photo/202212/413730_35462_1831.jpg');">
                  <h1 class="text-shadow">- 뉴스저널리즘(2022.12.20)</h1>
                  <br><h4>포스코1%나눔재단, '장애인 디지털 아카데미' 졸업생 탄생</h4>
                </a>
              </div>
              <div class="flip">
                <a href="https://biz.heraldcorp.com/view.php?ud=20221220000148" class="front" style="background-image: url('https://res.heraldm.com/content/image/2022/12/20/20221220000155_0.jpg');">
                  <h1 class="text-shadow">- 헤럴드경제(2022.12.20)</h1>
                  <br><h4>포스코1%나눔재단, ‘장애인 디지털 아카데미’ 수료식…“전원 취업까지 동행”</h4>
                </a>
              </div>
              <div class="flip">
                <a href="https://www.cowalknews.co.kr/bbs/board.php?bo_table=HB41_2&wr_id=117" class="front" style="background-image: url('https://www.cowalknews.co.kr/data/editor/2301/thumb-1794555031_1673919677.3496_600x852.jpg');">
                  <h1 class="text-shadow">- 함께걸음(2023.01.17)</h1>
                  <br><h4>포스코1% 나눔재단, 장애인 디지털 코딩 아카데미 수강생 대모집</h4>
                </a>
              </div>
              <div class="flip">
                <a href="https://www.etoday.co.kr/news/view/2354586" class="front" style="background-image: url('https://img.etoday.co.kr/pto_db/2024/04/600/20240426102817_2017616_960_590.jpg');">
                  <h1 class="text-shadow">- 이투데이(2024.04.28)</h1>
                  <br><h4>포스코그룹 임직원의 1%나눔, 장애인에 100% 희망이 되다</h4>
                </a>
              </div>
              <div class="flip">
                <a href="https://magazine.hankyung.com/job-joy/article/202309272576d" class="front" style="background-image: url('https://img.hankyung.com/photo/202309/AD.34635121.1.jpg');">
                  <h1 class="text-shadow">- 한경 JOB&JO4Y (2023-09-27)</h1>
                  <br><h4>장애를 극복하고 개발자로 취업···2년 간 32명 배출한 포스코 ‘장애인 디지털 아카데미’</h4>
                </a>
              </div>
              <div class="flip">
                <a href="https://www.youthdaily.co.kr/mobile/article.html?no=149562" class="front" style="background-image: url('https://www.youthdaily.co.kr/data/photos/20240415/art_17125519844667_13a946.png');">
                  <h1 class="text-shadow">청년일보(2024-04-08)</h1>
                  <br><h4>장애인 코딩전문가 양성 요람...'장애인 디지털 아카데미' 시현회 눈길</h4>
                </a>
              </div>
              <div class="flip">
                <a href="https://www.mk.co.kr/news/special-edition/11019043" class="front" style="background-image: url('https://pimg.mk.co.kr/news/cms/202405/20/20240520_01110203000001_L00.jpg');">
                  <h1 class="text-shadow">매일경제(2024.05.19)</h1>
                  <br><h4>포스코, 장애인 코딩교육 통해 취업문 '활짝' 구로디지털훈련센터에서 열린 장애인 디지털 아카데미 수료식</h4>
                </a>
              </div>
              <div class="flip">
                <a href="https://www.youthdaily.co.kr/mobile/article.html?no=149941" class="front" style="background-image: url('https://www.youthdaily.co.kr/data/photos/20240415/art_17129803115272_e05db2.jpg');">
                  <h1 class="text-shadow">청년일보(2024.04.14)</h1>
                  <br><h4>[장애 청년고용(下)] "장애인 청년 자립 기회 돕는다"…일자리 창출 기관 '눈길' 장애인 청년 취업 맞춤형 교육·일자리 매칭 역할</h4>
                </a>
              </div>
              <div class="flip">
                <a href="https://www.kmib.co.kr/article/view.asp?arcid=0924323243" class="front" style="background-image: url('https://image.kmib.co.kr/online_image/2023/0928/2023092719110880121_1695809468_0924323243.jpg');">
                  <h1 class="text-shadow">국민일보(2023.09.28)</h1>
                  <br><h4>포스코1%나눔재단 ‘장애인 디지털 아카데미’ 2기 수료식… 17명 중 13명 취업 포스코1%나눔재단의 장애인 코딩 전문가 양성 프로그램</h4>
                </a>
              </div>
            </div>
          </div>
        </div>
        <br>
        
      </div>
       
      <!-- footer 영억 시작 하단 -->
  
       
      <!-- footer 영역 끝 -->

  


  </template>
  
  <script src="@/assets/script/threemenu/Center.js"></script>

  <style scoped src="@/assets/style/thirdmenu/Center.css">
  
  </style>
  