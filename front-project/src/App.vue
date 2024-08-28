<template>
  <header>
    <div class="clear">
      <h1 class="navbar-brand">
        <router-link :to="isLoggedIn ? { name: 'MainHome' } : { name: 'Home' }">
          <img src="@/assets/image/logo.png" alt="logo" class="logo-img" />
        </router-link>
      </h1>
      <div class="menu-toggle" @click="toggleMenu">
        <span class="bar"></span>
        <span class="bar"></span>
        <span class="bar"></span>
      </div>
      <nav class="gnb" :class="{ 'active': isMenuOpen }">
        <li id="subblack">
          <router-link :to="{ name: 'AgencyIntroduction' }">센터개요</router-link>
          <div>
            <div>
              <ul>
                <li class="bbbb">
                  <router-link :to="{ name: 'AgencyIntroduction' }">바로가기</router-link>
                  <ul>
                    <li>
                      <router-link :to="{ name: 'AgencyIntroduction' }"
                        >기관소개</router-link
                      >
                    </li>
                    <li>
                      <router-link :to="{ name: 'AgencyIntroduction' }"
                        >센터소개</router-link
                      >
                    </li>
                    <li>
                      <router-link :to="{ name: 'AgencyIntroduction' }"
                        >오시는길</router-link
                      >
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </li>
        <li id="subblack">
          <router-link :to="{ name: 'TrainingContent' }">훈련안내</router-link>
          <div>
            <div>
              <ul>
                <li>
                  <router-link :to="{ name: 'TrainingContent' }">훈련개요</router-link>
                </li>
                <li>
                  <router-link :to="{ name: 'AdmissionProcess' }">입학절차</router-link>
                </li>
              </ul>
            </div>
          </div>
        </li>
        <li id="subblack">
          <router-link :to="{ name: 'CenterNews' }">소식</router-link>
          <div>
            <div>
              <ul>
                <li>
                  <router-link :to="{ name: 'CenterNews' }">센터소식</router-link>
                </li>
                <li>
                  <router-link :to="{ name: 'Scenery' }">센터전경</router-link>
                </li>
                <li>
                  <router-link :to="{ name: 'Promotional' }">홍보영상</router-link>
                </li>
                <li>
                  <router-link :to="{ name: 'Gallery' }">수강생갤러리</router-link>
                </li>
                <li>
                  <router-link :to="{ name: 'History' }">수강후기</router-link>
                </li>
              </ul>
            </div>
          </div>
        </li>
        <li id="subblack">
          <router-link :to="{ name: 'RecommendationProposal' }">프로젝트</router-link>
          <div>
            <div>
              <ul>
                <li>
                  <router-link :to="{ name: 'RecommendationProposal' }"
                    >과제제안서</router-link
                  >
                </li>
                <li>
                  <router-link :to="{ name: 'ActivityPlan' }">수행계획서</router-link>
                </li>
                <li>
                  <router-link :to="{ name: 'Presentation' }">발표자료</router-link>
                </li>
                <li>
                  <router-link :to="{ name: 'FinalReport' }">최종보고서</router-link>
                </li>
                <li><router-link :to="{ name: 'Code' }">코드</router-link></li>
              </ul>
            </div>
          </div>
        </li>
        <li id="subblack">
          <router-link :to="{ name: 'RecruitmentNotice' }">공지사항</router-link>
          <div>
            <div>
              <ul>
                <li>
                  <router-link :to="{ name: 'RecruitmentNotice' }">모집공고</router-link>
                </li>
                <li><router-link :to="{ name: 'Employment' }">채용공고</router-link></li>
                <li><router-link :to="{ name: 'QnABoard' }">문의게시판</router-link></li>
              </ul>
            </div>
          </div>
        </li>
        
      </nav>

      <div class="user-actions">
        <div class="user-actions-box" v-if="userStore.isLoggedIn">
          <p>환영합니다, {{ userStore.username }}!</p>
          <button @click="logout" class="logout-btn ms-3">로그아웃</button>
        </div>
        <div v-else>
          <ul id="util">
            <router-link class="nav-link" :to="{ name: 'SignUp' }">회원가입</router-link>
            <div class="divider"></div>
            <router-link class="nav-link" :to="{ name: 'Login' }">로그인</router-link>
          </ul>
        </div>
      </div>
    </div>

  </header>

  <!-- 헤더 영역 메뉴바 끝 -->
   <div class="middle">
  <router-view />
  <!-- 화살표 버튼 추가 -->
      <i class="fa-sharp fa-solid fa-arrow-up"
        v-show="showBackToTop" 
        @click="scrollToTop" 
        
      >
      </i>
      
      

  <!-- footer 영억 시작 하단 -->
  <footer>
    <div class="foote-left">
      <div class="logo">
        <img src="@/assets/image/logo2.png" class="logo2" alt="한국장애인고용공단" />
      </div>
      <div class="info">
        <div class="links">
          <a href="#">개인정보처리방침</a>
          |<br/>
          <a href="#">서비스이용약관</a>
          |<br/>
          <a href="#">저작권보호정책</a>
          |<br/>
          <a href="#">찾아오시는길</a>
        </div>
        <div class="contact">
          <p class="address">주소 : <a class="subb">[08379] 서울시 구로구 디지털로 300, 11층</a></p>
          <p><a class="subb">구로동, 지밸리비즈플라자</a></p>
          <p class="hours">운영시간 : <a class="subb">평일 09:00 ~ 18:00 (휴게시간: 12:00 ~ 13:00)</a></p>
          <p class="phone-fax">전화: <a class="subbb">02-6343-5700</a> | FAX: <a class="subbb">050-3470-0117</a></p>
        </div>
      </div>
      <div class="social-icons">
        <div class="social-icons">
          <a href="https://www.facebook.com/keadofficial"
            ><img src="@/assets/image/facebook.png" alt="Facebook" class="social-icon"
          /></a>
          <a href="https://www.instagram.com/haha_kead/?igsh=MXJpejZmYnoxcm9waw%3D%3D"
            ><img src="@/assets/image/instagram.png" alt="Instagram" class="social-icon"
          /></a>
          <a href="https://www.youtube.com/channel/UC475tcGR71CTgU8tsKtYXAA"
            ><img src="@/assets/image/youtube.png" alt="YouTube" class="social-icon"
          /></a>
          <a href="https://pf.kakao.com/_QZuIxl"
          ><img src="@/assets/image/kakaotalk.png" alt="kakaotalk" class="social-icon"
        /></a>
        <a href="https://post.naver.com/my.nhn?memberNo=3501412"
        ><img src="@/assets/image/blog.png" alt="Naver-Blog" class="social-icon"
      /></a>
      <a href="https://blog.naver.com/kead1"
      ><img src="@/assets/image/blog2.png" alt="Naver-Blog2" class="social-icon"
    /></a>
        </div>
      </div>
      <div class="foote-right">
        <div class="d-flex buttons">
          <button><a class="www" href="https://www.kead.or.kr/campus/grdthome/cntntsPage.do?menuId=MENU1050">공단 운영 웹사이트</a></button>
          <button><a class="www" href="https://www.moel.go.kr/agency/org/affiliated/list.do">고용노동부 산하기관</a></button>
        </div>
        <div class="certification">
          <a
            href="https://www.wa.or.kr/board/list.asp?BoardID=0006"
            title="새창"
            target="_blank"
          >
           
          </a>
        </div>
      </div>
    </div>
  </footer>
</div>
  <!-- footer 영역 끝 -->
  <!-- footer 영역 하단 -->
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import axios from "axios";
import { useRouter } from "vue-router";
import { useUserStore } from "@/store/SignUp";
import { storeToRefs } from "pinia";
import "/src/assets/script/Main.js"; // 외부 스크립트 파일 불러오기

// Vue Router 및 User Store 가져오기
const router = useRouter();
const userStore = useUserStore();
const { isLoggedIn, isAdmin } = storeToRefs(userStore);

// 페이지네이션 관련 상태
const currentPage = ref(1);
const totalPages = ref(1);
const posts = ref([]);

// 메뉴 열림 상태
const isMenuOpen = ref(false);

// 메뉴 토글 함수
const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

// 게시물 가져오기 함수
const fetchPosts = async () => {
  try {
    const response = await axios.get("/posts", {
      params: { page: currentPage.value },
    });
    posts.value = response.data.posts;
    totalPages.value = response.data.totalPages;
  } catch (error) {
    console.error("Error fetching posts:", error);
  }
};

// 페이지네이션 함수들
const prevPage = () => {
  if (currentPage.value > 1) {
    currentPage.value--;
    fetchPosts();
  }
};

const nextPage = () => {
  if (currentPage.value < totalPages.value) {
    currentPage.value++;
    fetchPosts();
  }
};

const setPage = (page) => {
  currentPage.value = page;
  fetchPosts();
};

// 로그인 및 접근 제어 처리
const handleClick = async () => {
  if (isLoggedIn.value) {
    if (isAdmin.value) {
      router.push({ name: "PrModRecruitmentNotice" });
    } else {
      alert("관리자만 접근할 수 있습니다.");
    }
  } else {
    alert("로그인 해주세요.");
    await handleLogin();
    router.push({ name: "Login" });
  }
};

const handleLogin = async () => {
  try {
    const response = await axios.post("/user/login", {
      username: userStore.username,
      password: userStore.password,
    });

    if (response.data.message) {
      userStore.isLoggedIn = true;
      userStore.isAdmin = response.data.grade === 1;

      // 로그인 후 사용자에게 적절한 페이지로 리다이렉트
      if (userStore.isLoggedIn) {
        router.push({ name: "MainHome" });
      } else {
        router.push({ name: "Home" });
      }
    } else {
      console.error("Login failed");
      userStore.isLoggedIn = false;
    }
  } catch (error) {
    console.error("Error logging in user:", error);
    userStore.isLoggedIn = false;
  }
};

const logout = () => {
  userStore.isLoggedIn = false;
  userStore.isAdmin = false;
  userStore.$reset();
  router.push({ name: "Home" });
};

// 페이지 맨 위로 이동하는 기능 관련 상태 및 함수
const showBackToTop = ref(false);

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

const handleScroll = () => {
  showBackToTop.value = window.scrollY > 300; // 300px 이상 스크롤 시 버튼 표시
};

// 컴포넌트 마운트 시 초기화 작업
onMounted(() => {
  fetchPosts(); // 게시물 가져오기
  window.addEventListener("scroll", handleScroll);
});

// 컴포넌트 언마운트 시 정리 작업
onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>

<style scoped src="@/assets/style/Main.css"></style>
