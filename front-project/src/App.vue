<template>
  <header>
    <div class="clear">
      <h1 class="navbar-brand">
        <router-link :to="{ name: 'Home' }">
          <img src="@/assets/image/logo.png" alt="logo" class="logo-img" />
        </router-link>
      </h1>
      <nav class="gnb">
        <li>
          <router-link :to="{ name: 'AgencyIntroduction' }">센터개요</router-link>
          <div>
            <div>
              <ul>
                <li>
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
        <li>
          <router-link :to="{ name: 'TrainingContent' }">훈련안내</router-link>
          <div>
            <div>
              <ul>
                <li>
                  <router-link :to="{ name: 'TrainingContent' }">훈련안내</router-link>
                </li>
                <li>
                  <router-link :to="{ name: 'AdmissionProcess' }">입학절차</router-link>
                </li>
                <li>
                  <router-link :to="{ name: 'ApplyForAdmission' }">입학신청</router-link>
                </li>
              </ul>
            </div>
          </div>
        </li>
        <li class="w2">
          <router-link :to="{ name: 'CenterNews' }">소식</router-link>
          <div>
            <div>
              <ul>
                <li>
                  <router-link :to="{ name: 'CenterNews' }">소식 및 홍보</router-link>
                  <ul>
                    <li>
                      <router-link :to="{ name: 'CenterNews' }"
                        >우리들의이야기</router-link
                      >
                    </li>
                    <li>
                      <router-link :to="{ name: 'CenterNews' }">홍보영상</router-link>
                    </li>
                    <li>
                      <router-link :to="{ name: 'CenterNews' }">수강생인터뷰</router-link>
                    </li>
                    <li>
                      <router-link :to="{ name: 'CenterNews' }">수강후기</router-link>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
            <div>
              <ul>
                <li>
                  <router-link :to="{ name: 'Gallery' }">갤러리</router-link>
                  <ul>
                    <li><a href="">풍경</a></li>
                    <li><a href="">사진</a></li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </li>
        <li>
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
        <li>
          <router-link :to="{ name: 'RecruitmentNotice' }">공지사항</router-link>
          <div>
            <div>
              <ul>
                <li>
                  <router-link :to="{ name: 'RecruitmentNotice' }">모집공고</router-link>
                </li>
                <li><router-link :to="{ name: 'QnABoard' }">문의게시판</router-link></li>
                <li><router-link :to="{ name: 'Employment' }">채용공고</router-link></li>
              </ul>
            </div>
          </div>
        </li>
      </nav>
      <form action="main" class="main">
        <input type="search" required class="main" />
        <i class="fa fa-search"></i>
        <button onclick="clearInput()" class="main">Clear</button>
      </form>

      <div class="user-actions">
        <div v-if="userStore.isLoggedIn">
          <p>환영합니다, {{ userStore.username }}!</p>
          <button @click="logout" class="btn btn-outline-danger ms-3">로그아웃</button>
        </div>
        <div v-else>
          <ul id="util">
            <router-link class="nav-link" :to="{ name: 'SignUp' }">회원가입</router-link>
            <div class="divider"></div>
            <router-link class="nav-link" :to="{ name: 'Login' }">로그인</router-link>
            <a href="" class="lang" aria-label="영문사이트 바로가기">EN</a>
          </ul>
        </div>
      </div>
    </div>
  </header>
  <div class="bg_gnb"></div>
  <br />
  <!-- 헤더 영역 메뉴바 끝 -->
  <router-view />
  <!-- footer 영억 시작 하단 -->
  <footer>
    <div class="foote-left">
      <div class="logo">
        <img src="@/assets/image/logo2.png" class="logo2" alt="한국장애인고용공단" />
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
          <a href="#"
            ><img src="@/assets/image/facebook.png" alt="Facebook" class="social-icon"
          /></a>
          <a href="#"
            ><img src="@/assets/image/instagram.png" alt="Instagram" class="social-icon"
          /></a>
          <a href="#"
            ><img src="@/assets/image/youtube.png" alt="YouTube" class="social-icon"
          /></a>
        </div>
      </div>
      <div class="foote-right">
        <div class="d-flex buttons">
          <button>공단 운영 웹사이트</button>
          <button>고용노동부 산하기관</button>
        </div>
        <div class="certification">
          <a
            href="https://www.wa.or.kr/board/list.asp?BoardID=0006"
            title="새창"
            target="_blank"
          >
            <img src="@/assets/image/footerlogo2.png" alt="WA 인증 마크" />
          </a>
        </div>
      </div>
    </div>
  </footer>
  <!-- footer 영역 끝 -->
  <!-- footer 영역 하단 -->
</template>

<script setup>
import { ref, onMounted } from "vue";
import axios from "axios";
import { useRouter } from "vue-router";
import { useUserStore } from "@/store/SignUp";
import { storeToRefs } from "pinia";
import "/src/assets/script/Main.js"; // 외부 스크립트 파일 불러오기

const router = useRouter();
const userStore = useUserStore();
const { isLoggedIn, isAdmin } = storeToRefs(userStore);

const currentPage = ref(1);
const totalPages = ref(1);
const posts = ref([]);

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
      router.push({ name: "RecruitmentNotice" });
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
  router.push({ name: "Home" });
};

// 초기 데이터 로드
onMounted(() => {
  fetchPosts();
});
</script>

<style src="@/assets/style/Main.css"></style>
