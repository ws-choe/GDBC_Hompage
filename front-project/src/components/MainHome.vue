<template>
  <div class="outer-container">
    <div class="inner-container">
  <div class="main-content">
    <div class="topmain">
    <div class="video_box">
      <router-link :to="{ name: 'RecruitmentNotice' }"><img class="sss" src="@/assets/image/메인배너.png"></router-link>
      
    </div>
  </div>

   
    <div class="news-section">
      <h2 class="homename">센터소식 & 이야기</h2>
      <div class="video-container">
        <p></p>
      </div>
      <div class="news-images">
        <iframe class="firstvideo" src="https://www.youtube.com/embed/yiB_a44lCRI?si=XjxUIrJyIbBp2_vH&amp;controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        
        <div>
          <router-link :to="{ name: 'Scenery' }"><h4>더보기</h4></router-link>
            <div class="flip">
                <div class="front" style="background-image: url(https://www.kead.or.kr/assets/image/ko2/04_01b-02.png)">
                   <h1 class="text-shadow">휴게실전경</h1>
                </div>
                <div class="back">
                   <h2>소개</h2>
                   <p>휴게실입니다. 시설을 이용하는 손님과 교육생들, 직원들 모두가 이용할 수 있습니다.</p>
                </div>
            </div>
            <div class="flip">
                <div class="front" style="background-image: url(https://www.kead.or.kr/assets/image/ko2/04_01b-05.png)">
                   <h1 class="text-shadow">훈련실</h1>
                </div>
                <div class="back">
                   <h2>소개</h2>
                   <p>훈련 과정이 이루어지는 장소입니다.</p>
                </div>
            </div>
            <div class="flip">
              <div class="front" style="background-image: url('https://www.kead.or.kr/assets/campus/image/ko2/04_01a-01.png');">
                <h1 class="text-shadow">로비전경</h1>
              </div>
                <div class="back">
                   <h2>소개</h2>
                   <p>로비입니다. 휴게실과 마찬가지로 쉴 수 있는 공간과 자유롭게 이용할 수 있는 커피포트가 있습니다.</p>
                </div>
              </div>
              <div class="flip">
                <div class="front" style="background-image: url(https://www.kead.or.kr/assets/image/ko2/04_01b-03.png)">
                   <h1 class="text-shadow">훈련실</h1>
                </div>
                <div class="back">
                   <h2>소개</h2>
                   <p>훈련 과정이 이루어지는 장소입니다.</p>
                </div>
              </div>
      </div>
    </div>
  </div>
    <div class="curriculum-section">
      <h2 class="homename">분야 커리큘럼</h2>
      <div class="curriculu-grid">
        <div class="card" style="width: 18rem;">
          <img src="@/assets/image/Frontend.png" class="card-img-top" alt="">
          <div class="card-body1">
            <p class="card-text text-center1"><b>Front-End</b><br>
            사용자가 직접 보는 웹페이지를<br> 디자인하고 구현해냅니다.<br>
            <br>
          #HTML #CSS #JavaScript</p>
          </div>
        </div>
        <div class="card" style="width: 18rem;">
          <img src="@/assets/image/backend.png" class="card-img-top" alt="">
          <div class="card-body2">
            <p class="card-text text-center1"><b>Back-End</b><br>
              직접 볼 수 없는 서버, 데이터베이스, 
              <br>애플리케이션 로직을 처리하고 유지관리합니다.<br>
          #HTML #CSS #JavaScript</p>
          </div>
        </div>
        <div class="card" style="width: 18rem;">
          <img src="@/assets/image/DATABASE.png" class="card-img-top" alt="">
          <div class="card-body3">
            <p class="card-text text-center1"><b>Data Base</b><br>
              데이터를 체계적으로 저장, 관리, 
              <br>검색할 수 있는 시스템입니다.<br>
              <br>
              #MariaDB #MySQL    </p>
          </div>
        </div>      
        <div class="card" style="width: 18rem;">
          <img src="@/assets/image/UIUX.png" class="card-img-top" alt="">
          <div class="card-body4">
            <p class="card-text text-center1"><b>UI/UX</b> <br>
              사용자가 웹페이지나 애플리케이션으로 
              <br>접하는 시각적요소, 디자인 및 사용할 때의
              <br>전체적인 경험을 말합니다.
              <br>
              #Figma UI/UX #Notion </p>
          </div>
        </div>
      </div>
    </div>
  
  <!-- 수강후기 -->
  <h2 class="homename">수강후기</h2>
<div class="external">
<div class="horizontal-scroll-wrapper">
<div class="img-wrapper slower">
  <router-link :to="{ name: 'History' }">
    <p class="reviews-title"><strong>강*진 님</strong> / 3기 아카데미 참가생</p>
    <br>
    <p class="reviews-subtitle">나도 할 수 있다는 자신감이 생겼어요!</p>
    <p class="reviews-text">비전공자인 데다 시각장애가 있어 사무직에서 계속 일할 수 있는 방법을 찾고 있었는데, 디지털 코딩 아카데미에서 깊이 있는 공부를 
    할 수 있다는 추천을 받아 오게 되었습니다. 외부 교육의 경우 금전적으로 부담이었는데, 디지털 코딩 아카데미에서는 모든 것을 지원
    해줘서 정말 감사했습니다. 열심히 공부한 덕분에 성적장학금을 받을 수 있었고, 개발자로서의 길을 시작하는 데 큰 도움이 되었습니다.
    </p>
  </router-link>
</div>

<div class="img-wrapper faster">
  <router-link :to="{ name: 'History' }">
    <p class="reviews-title"><strong>정*연 님</strong> / 3기 아카데미 참가생</p>
    <br>
    <p class="reviews-subtitle">든든한 지원 덕분에 부담이 줄었어요</p>
    <p class="reviews-text">
      교통비가 꽤 많이 나와서 부담이 컸는데, 디지털 코딩 아카데미 덕분에 그 부담을 많이 덜 수 있었어요. 또 기업에서도 장애를 인지한 
      상태에서 좀 더 편안한 면접 기회를 제공해줘서 정말 도움이 되었습니다.
    </p>
  </router-link>
</div>

<div class="img-wrapper slower vertical">
  <router-link :to="{ name: 'History' }">
    <p class="reviews-title"><strong>김*지 님</strong> / 3기 아카데미 참가생</p>
    <br>
    <p class="reviews-subtitle">실패도 두렵지 않아요, 도전의 연속입니다!</p>
    <p class="reviews-text">
      코딩을 배우면서 많은 실패를 겪었지만, 그 실패가 새로운 도전이라는 것을 깨닫게 되었습니다. 또한, 장학금과 숙소비 지원도 정말 
      큰 도움이 되었어요.
    </p>
  </router-link>
</div>

<div class="img-wrapper slower slower-down">
  <router-link :to="{ name: 'History' }">
    <p class="reviews-title"><strong>이*우 님</strong> / 3기 아카데미 참가생</p>
    <br>
    <p class="reviews-subtitle">취업 준비에 큰 도움이 되었어요</p>
    <p class="reviews-text">
      디지털 코딩 아카데미를 통해 취업 준비 과정에서 많은 지원을 받았는데, 이 과정이 저에게 가장 큰 혜택이 되었어요. 정말 감사한 마음입니다.
    </p>
  </router-link>
</div>

<div class="img-wrapper">
  <router-link :to="{ name: 'History' }">
    <p class="reviews-title"><strong>이*철 님</strong> / 3기 아카데미 참가생</p>
    <br>
    <p class="reviews-subtitle">내가 할 수 있다는 걸 알게 됐습니다!</p>
    <p class="reviews-text">
      디지털 코딩 아카데미를 통해 '나도 할 수 있다'는 자신감을 얻었습니다. 저에게는 정말 큰 변화였어요.
    </p>
  </router-link>
</div>

<div class="img-wrapper slower">
  <router-link :to="{ name: 'History' }">
    <p class="reviews-title"><strong>최*경 님</strong> / 2기 아카데미 참가생</p>
    <br>
    <p class="reviews-subtitle">장애의 벽을 넘고 새로운 도전에 나섰습니다</p>
    <p class="reviews-text">
      취업 준비를 하면서 장애로 인해 보이지 않는 벽을 많이 느꼈었는데, 디지털 코딩 아카데미 덕분에 좋은 교육 기회를 얻을 수 있어서 정말 감사했습니다. 이제는 배운 것을 나누는 사람이 되고 싶습니다.
    </p>
  </router-link>
</div>

<div class="img-wrapper faster1">
  <router-link :to="{ name: 'History' }">
    <p class="reviews-title"><strong>권* 님</strong> / 2기 아카데미 참가생</p>
    <br>
    <p class="reviews-subtitle">성장하는 나를 느낄 수 있었어요</p>
    <p class="reviews-text">
      디지털 코딩 아카데미 교육을 받으면서 내가 점점 성장하고 있다는 걸 느꼈고, 그 과정이 저에게 큰 동기부여가 되었습니다. 정말 감사해요.
    </p>
  </router-link>
</div>

<div class="img-wrapper slower slower2">
  <router-link :to="{ name: 'History' }">
    <p class="reviews-title"><strong>오*화 님</strong> / 2기 아카데미 참가생</p>
    <br>    
    <p class="reviews-subtitle">제가 좋아하는 일을 찾았어요!</p>
    <p class="reviews-text">
      디지털 코딩 아카데미에서 제가 좋아하는 일을 찾게 되었고, '내가 뭔가를 할 수 있다'는 자신감을 얻게 되었습니다. 이 시간이 저에게 정말 뜻깊었어요.
    </p>
  </router-link>
</div>

<div class="img-wrapper">
  <router-link :to="{ name: 'History' }">
    <p class="reviews-title"><strong>이*용 님</strong> / 1기 아카데미 참가생</p>
    <br>
    <p class="reviews-subtitle">코딩이 이렇게 재미있을 줄 몰랐어요!</p>
    <p class="reviews-text">
      코딩을 정말 재미있게 배울 수 있었고 결과적으로 이 일을 계속해도 되겠다는 확신이 생겼습니다. 6개월 동안 커리큘럼을 진행하면서 힘든 일도
      많았지만, 그 과정에서 많은 것을 배울 수 있었습니다.
    </p>
  </router-link>
</div>

<div class="img-wrapper slower">
  <router-link :to="{ name: 'History' }">
    <p class="reviews-title"><strong>임*택 님</strong> / 1기 아카데미 참가생</p>
    <br>
    <p class="reviews-subtitle">예상보다 더 많은 것을 배웠습니다</p>
    <p class="reviews-text">
      교육 기간 동안 강사님들이 정말 잘 가르쳐주셔서, 기대했던 것보다 훨씬 더 많은 것을 배울 수 있었어요. 커리큘럼 외에도 많은 격려를 받아 정말 감사했습니다.
    </p>
  </router-link>
</div>


    </div>
  </div>
</div>
</div>
</div>
</template>




<script src="@/assets/script/MainHome.js"></script>

<style scoped src="@/assets/style/MainHome.css">

</style>
