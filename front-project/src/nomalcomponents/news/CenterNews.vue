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
        <div class="news">
          <h2 class="centers">센터 소식</h2>
          <div class="button">
            <button class="buttonq" @click="filterNews('우리들의 이야기')">우리들의 이야기</button>
            <button class="buttonq" @click="filterNews('홍보영상')">홍보영상</button>
            <button class="buttonq" @click="filterNews('수강생 인터뷰')">수강생 인터뷰</button>
            <button class="buttonq" @click="filterNews('수강 후기')">수강 후기</button>
          </div>
          <div class="news-items-container">
            <div class="news-items">
              <div class="news-item" v-for="(news, index) in filteredNewsList" :key="index">
                <img :src="require('@/assets/' + news.img)" alt="News image" />
                <p>{{ news.title }}</p>
              </div>
            </div>
          </div>
        </div>
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
  <script>
  export default {
    data() {
      return {
        selectedCategory: '우리들의 이야기',
        newsList: [
          { img: 'CenterMain.png', title: '', category: '우리들의 이야기' },
          { img: 'CenterLobby.png', title: '', category: '우리들의 이야기' },
          { img: 'tr1.png', title: '', category: '우리들의 이야기' },
          { img: 'tr2.png', title: '', category: '우리들의 이야기' },
          { img: 'tr3.png', title: '', category: '우리들의 이야기' },
          { img: 'Main.png', title: '', category: '우리들의 이야기' },
          { img: 'Main.png', title: '', category: '우리들의 이야기' },
          { img: 'Main.png', title: '', category: '우리들의 이야기' },
          { img: 'Main.png', title: '', category: '우리들의 이야기' },
          { img: 'Main.png', title: '홍보영상 1', category: '홍보영상' },
          { img: 'Main.png', title: '홍보영상 2', category: '홍보영상' },
          { img: 'Main.png', title: '인터뷰 1', category: '수강생 인터뷰' },
          { img: 'Main.png', title: '후기 1', category: '수강 후기' }
        ]
      };
    },
    computed: {
      filteredNewsList() {
        return this.newsList.filter(news => news.category === this.selectedCategory);
      }
    },
    methods: {
      filterNews(category) {
        this.selectedCategory = category;
      }
    }
  };
  </script>


  <style>
  .news {
    text-align:  left;
  }
  

  .centers{
    text-align: left;
  }
  .buttonq {
    padding: 10px;
    justify-content: center;
    margin: 2rem;
    background-color: rgb(255, 189, 46);
    border-radius: 30px;
    border-style: none;
    color: white;
    width: 160px;
    
  } 

  .buttonq:active {
    background-color: rgb(245, 158, 8) ;
  }

  .buttons button {
    margin: 0 0.5rem;
    padding: 0.5rem 1rem;
  }
  .news-items-container {
    display: flex;
    justify-content: center; /* 수평 중앙 정렬 */
    align-items: center; /* 수직 중앙 정렬 */
    height: 100%; /* 컨테이너의 높이를 100%로 설정하여 가운데 정렬 */
  }
  
  .news-items {
    --s: 300px; /* 아이템 크기 */
    --g: 10px;  /* 간격 */
    --f: 1.5;   /* 확대 배율 */
    display: grid;
    gap: var(--g);
    width: calc(3 * var(--s) + 2 * var(--g));
    aspect-ratio: 1;
    grid-template-columns: repeat(3, auto); /* 3열 그리드 */
  }
  
  .news-item {
   position: relative;
  }
  
  .news-item img {
    width: 0;
  height: 0;
  min-height: 100%;
  min-width: 100%;
  object-fit: cover;
  cursor: pointer;
  filter: grayscale(80%);
  transition: width .35s linear, height .35s linear, filter .35s linear;
  }
  .news-item img:hover {
    filter: grayscale(0);
    width: calc(var(--s) * var(--f));
    height: calc(var(--s) * var(--f));
  }
  
  .news-item p {
    position: absolute;
    bottom: 10px;
    left: 50%;
    transform: translateX(-50%);
    background-color: rgba(0, 0, 0, 0.5);
    color: white;
    padding: 5px;
    margin: 0;
    text-align: center;
  }
  /* 첫 번째 줄 아이템에 대한 추가 스타일링 */
.first-row:nth-child(1) {
  grid-column: 1; /* 첫 번째 열에 배치 */
}

.first-row:nth-child(2) {
  grid-column: 2; /* 두 번째 열에 배치 */
  grid-column: span 2; /* 중앙 아이템을 두 개 열을 차지하게 설정 */
}

.first-row:nth-child(3) {
  grid-column: 3; /* 세 번째 열에 배치 */
}

/* 두 번째 줄 아이템 스타일링 */
.news-item:not(.first-row) {
  /* 두 번째 줄 및 이후의 아이템에 대한 기본 스타일 유지 */
}
.gallery {
  --s: 150px; /* control the size */
  --g: 10px;  /* control the gap */
  --f: 1.5;   /* control the scale factor */
  
  display: grid;
  gap: var(--g);
  width: calc(3*var(--s) + 2*var(--g));
  aspect-ratio: 1;
  grid-template-columns: repeat(3,auto);
}

.gallery > img {
  width: 0;
  height: 0;
  min-height: 100%;
  min-width: 100%;
  object-fit: cover;
  cursor: pointer;
  filter: grayscale(80%);
  transition: .35s linear;
}

.gallery img:hover{
  filter: grayscale(0);
  width:  calc(var(--s)*var(--f));
  height: calc(var(--s)*var(--f));
}
  </style>
  