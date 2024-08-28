import { createRouter, createWebHistory } from "vue-router";
import { useUserStore } from "@/store/SignUp";

// 메인, 데이터 로그인 설정
import Home from "../components/Home.vue";
import Login from "../components/Login.vue";
import SignUp from "../components/SignUp.vue";
import MainHome from "../components/MainHome.vue";

// 센터개요
import AgencyIntroduction from "../normalpage//center/AgencyIntroduction.vue";

// 훈련안내, 입학절차, 입학신청
import TrainingContent from "../normalpage/training/TrainingContent.vue";
import AdmissionProcess from "../normalpage/training/AdmissionProcess.vue";
import ApplyForAdmission from "../normalpage/training/ApplyForAdmission.vue";

// 센터 뉴스, 갤러리 등
import CenterNews from "../normalpage/news/CenterNews.vue";
import Scenery from "@/normalpage/news/Scenery.vue";
import Gallery from "../normalpage/news/Gallery.vue";
import History from "@/normalpage/news/History.vue";
import Promotional from "@/normalpage/news/Promotional.vue";

// 과제제안서, 수행계획서, 발표자료, 최종보고서, 코드
import RecommendationProposal from "../normalpage/project/RecommendationProposal.vue";
import ActivityPlan from "../normalpage/project/ActivityPlan.vue";
import Presentation from "../normalpage/project/Presentation.vue";
import FinalReport from "../normalpage/project/FinalReport.vue";
import Code from "../normalpage/project/Code.vue";

// 모집공고, 문의게시판, 채용공고
import RecruitmentNotice from "../normalpage/announcement/RecruitmentNotice.vue";
import QnABoard from "../normalpage/announcement/QnABoard";
import Employment from "../normalpage/announcement/Employment.vue";

// 회원 글쓰기 페이지
import WrDeActivityPlan from '../write/wrde/WrDeActivityPlan.vue';
import WrDeCode from '../write/wrde/WrDeCode.vue';
import WrDeFinalReport from '../write/wrde/WrDeFinalReport.vue';
import WrDePresentation from '../write/wrde/WrDePresentation.vue';
import WrDeRecommendationProposal from '../write/wrde/WrDeRecommendationProposal.vue';
import WrDeQnABoard from '../write/wrde/WrDeQnABoard.vue';

//관리자 글쓰기 페이지
import WrPrEmployment from '../write/wrpr/WrPrEmployment.vue';
import WrPrRecruitmentNotice from '../write/wrpr/WrPrRecruitmentNotice.vue';

//회원 수정 페이지
import ModDeActivityPlan from '../modify/de/ModDeActivityPlan.vue';
import ModDeCode from '../modify/de/ModDeCode.vue';
import ModDeFinalReport from '../modify/de/ModDeFinalReport.vue';
import ModDePresentation from '../modify/de/ModDePresentation.vue';
import ModDeRecommendationProposal from '../modify/de/ModDeRecommendationProposal.vue';
import ModDeQnABoard from '../modify/de/ModDeQnABoard.vue';

//관리자 수정 페이지
import ModPrActivityPlan from '../modify/pr/ModPrActivityPlan.vue';
import ModPrCode from '../modify/pr/ModPrCode.vue';
import ModPrFinalReport from '../modify/pr/ModPrFinalReport.vue';
import ModPrPresentation from '../modify/pr/ModPrPresentation.vue';
import ModPrRecommendationProposal from '../modify/pr/ModPrRecommendationProposal.vue';
import ModPrEmployment from '../modify/pr/ModPrEmployment.vue';
import ModPrQnABoard from '../modify/pr/ModPrQnABoard.vue';
import ModPrRecruitmentNotice from '../modify/pr/ModPrRecruitmentNotice.vue';

//글내용 페이지
import DetActivityPlan from '../detail/DetActivityPlan.vue';
import DetCode from '../detail/DetCode.vue';
import DetFinalReport from '../detail/DetFinalReport.vue';
import DetPresentation from '../detail/DetPresentation.vue';
import DetRecommendationProposal from '../detail/DetRecommendationProposal.vue';
import DetEmployment from '../detail/DetEmployment.vue';
import DetQnABoard from '../detail/DetQnABoard.vue';
import DetRecruitmentNotice from '../detail/DetRecruitmentNotice.vue';

//패스워드 변경 페이지
import ChangePassword from '@/components/ChangePassword.vue';
import ResetPasswordRequest from '@/components/ResetPasswordRequest.vue';

const routes = [
  // 메인
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/signup',
    name: 'SignUp',
    component: SignUp,
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
  },
  {
    path: '/MainHome',
    name: 'MainHome',
    component: MainHome,
    meta: { requiresAuth: true }, // 로그인 필요 표시
  },
  // 기관소개
  {
    path: '/normalpage/center/AgencyIntroduction',
    name: 'AgencyIntroduction',
    component: AgencyIntroduction
  },

  // 훈련개요
  {
    path: '/normalpage/training/TrainingContent',
    name: 'TrainingContent',
    component: TrainingContent
  },
  {
    path: '/normalpage/training/AdmissionProcess',
    name: 'AdmissionProcess',
    component: AdmissionProcess
  },
  {
    path: '/normalpage/training/ApplyForAdmission',
    name: 'ApplyForAdmission',
    component: ApplyForAdmission
  },

  // 소식
  {
    path: '/normalpage/news/CenterNews',
    name: 'CenterNews',
    component: CenterNews
  },
  {
    path: '/normalpage/news/Scenery',
    name: 'Scenery',
    component: Scenery
  },
  {
    path: '/normalpage/news/Gallery',
    name: 'Gallery',
    component: Gallery
  },
  {
    path: '/normalpage/news/History',
    name: 'History',
    component: History
  },
  {
    path: '/normalpage/news/Promotional',
    name: 'Promotional',
    component: Promotional
  },

  // 프로젝트
  {
    path: '/normalpage/project/RecommendationProposal',
    name: 'RecommendationProposal',
    component: RecommendationProposal
  },
  {
    path: '/normalpage/project/ActivityPlan',
    name: 'ActivityPlan',
    component: ActivityPlan
  },
  {
    path: '/normalpage/project/Presentation',
    name: 'Presentation',
    component: Presentation
  },
  {
    path: '/normalpage/project/FinalReport',
    name: 'FinalReport',
    component: FinalReport
  },
  {
    path: '/normalpage/project/Code',
    name: 'Code',
    component: Code
  },

  // 공지사항
  {
    path: '/normalpage/announcement/RecruitmentNotice',
    name: 'RecruitmentNotice',
    component: RecruitmentNotice
  },
  {
    path: '/normalpage/announcement/QnABoard',
    name: 'QnABoard',
    component: QnABoard
  },
  {
    path: '/normalpage/announcement/Employment',
    name: 'Employment',
    component: Employment
  },

  //회원 글쓰기 라우터
  {
    path: '/write/wrde/WrDeActivityPlan',
    name: 'WrDeActivityPlan',
    component: WrDeActivityPlan
  },
  {
    path: '/write/wrde/WrDeCode',
    name: 'WrDeCode',
    component: WrDeCode
  },
  {
    path: '/write/wrde/WrDeFinalReport',
    name: 'WrDeFinalReport',
    component: WrDeFinalReport
  },
  {
    path: '/write/wrde/WrDePresentation',
    name: 'WrDePresentation',
    component: WrDePresentation
  },
  {
    path: '/write/wrde/WrDeRecommendationProposal',
    name: 'WrDeRecommendationProposal',
    component: WrDeRecommendationProposal
  },
  {
    path: '/write/wrde/WrDeQnABoard',
    name: 'WrDeQnABoard',
    component: WrDeQnABoard
  },
  //관리자 글쓰기 페이지
  {
    path: '/write/wrpr/WrPrEmployment',
    name: 'WrPrEmployment',
    component: WrPrEmployment
  },
  {
    path: '/write/wrpr/WrPrRecruitmentNotice',
    name: 'WrPrRecruitmentNotice',
    component: WrPrRecruitmentNotice
  },

  //회원 수정 페이지
  {
    path: '/modify/de/ModDeActivityPlan/:id',
    name: 'ModDeActivityPlan',
    component: ModDeActivityPlan,
  },
  {
    path: '/modify/de/ModDeCode/:id',
    name: 'ModDeCode',
    component: ModDeCode,
  },
  {
    path: '/modify/de/ModDeFinalReport/:id',
    name: 'ModDeFinalReport',
    component: ModDeFinalReport,
  },
  {
    path: '/modify/de/ModDePresentation/:id',
    name: 'ModDePresentation',
    component: ModDePresentation,
    props:true
  },
  {
    path: '/modify/de/ModDeRecommendationProposal/:id',
    name: 'ModDeRecommendationProposal',
    component: ModDeRecommendationProposal,
  },
  {
    path: '/modify/de/ModDeQnABoard/:id',
    name: 'ModDeQnABoard',
    component: ModDeQnABoard,
  },
  //관리자 수정 페이지
  {
    path: '/modify/pr/ModPrActivityPlan/:id',
    name: 'ModPrActivityPlan',
    component: ModPrActivityPlan,
  },
  {
    path: '/modify/pr/ModPrCode/:id',
    name: 'ModPrCode',
    component: ModPrCode,
  },
  {
    path: '/modify/pr/ModPrFinalReport/:id',
    name: 'ModPrFinalReport',
    component: ModPrFinalReport,
  },
  {
    path: '/modify/pr/ModPrPresentation/:id',
    name: 'ModPrPresentation',
    component: ModPrPresentation,
  },
  {
    path: '/modify/pr/ModPrRecommendationProposal/:id',
    name: 'ModPrRecommendationProposal',
    component: ModPrRecommendationProposal,
  },
  {
    path: '/modify/pr/ModPrEmployment/:id',
    name: 'ModPrEmployment',
    component: ModPrEmployment,
  },
  {
    path: '/modify/pr/ModPrQnABoard/:id',
    name: 'ModPrQnABoard',
    component: ModPrQnABoard,
  },
  {
    path: '/modify/pr/ModPrRecruitmentNotice/:id',
    name: 'ModPrRecruitmentNotice',
    component: ModPrRecruitmentNotice,
  },
  // 글내용 페이지
  {
    path: '/detail/DetActivityPlan/:id',
    name: 'DetActivityPlan',
    component: DetActivityPlan,
    props: true
  },
  {
    path: '/detail/DetCode/:id',
    name: 'DetCode',
    component: DetCode,
    props: true
  },
  {
    path: '/detail/DetFinalReport/:id',
    name: 'DetFinalReport',
    component: DetFinalReport,
    props: true
  },
  {
    path: '/detail/DetPresentation/:id',
    name: 'DetPresentation',
    component: DetPresentation,
    props: true
  },
  {
    path: '/detail/DetRecommendationProposal/:id',
    name: 'DetRecommendationProposal',
    component: DetRecommendationProposal,
    props: true
  },
  {
    path: '/detail/DetEmployment/:id',
    name: 'DetEmployment',
    component: DetEmployment,
    props: true
  },
  {
    path: '/detail/DetQnABoard/:id',
    name: 'DetQnABoard',
    component: DetQnABoard,
    props: true
  },
  {
    path: '/detail/DetRecruitmentNotice/:id',
    name: 'DetRecruitmentNotice',
    component: DetRecruitmentNotice,
    props: true
  },
  {
    path: '/user/reset-password',
    name: 'ResetPasswordRequest',
    component: ResetPasswordRequest,
  },
  {
    path: '/user/change-password',
    name: 'ChangePassword',
    component: ChangePassword,
    props: (route) => ({ token: route.query.token }),
  },
];


const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  const userStore = useUserStore();

  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!userStore.isLoggedIn) {
      alert('로그인 하셔야 합니다.');
      next({ name: 'Login' });
    } else {
      next();
    }
  } else {
    next();
  }
});



export default router;
