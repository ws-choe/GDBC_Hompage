import { createRouter, createWebHistory } from "vue-router";
import { useUserStore } from "@/store/SignUp";

// 메인, 데이터 로그인 설정
import Home from "../components/Home.vue";
import Login from "../components/Login.vue";
import SignUp from "../components/SignUp.vue";
import MainHome from "@/components/MainHome.vue";

// 기관, 센터 소개 등
import AgencyIntroduction from "../nomalcomponents/centerinformation/AgencyIntroduction.vue";
import CenterIntoduction from "../nomalcomponents/centerinformation/CenterIntroduction.vue";
import WayToCome from "../nomalcomponents/centerinformation/WayToCome.vue";

// 훈련, 절차 시간표 등등
import TrainingContent from "../nomalcomponents/traininginformation/TrainingContent.vue";
import AdmissionProcess from "../nomalcomponents/traininginformation/AdmissionProcess.vue";
import ApplyForAdmission from "../nomalcomponents/traininginformation/ApplyForAdmission.vue";
import StudyTimeTable from "../nomalcomponents/traininginformation/StudyTimeTable.vue";

// 센터 뉴스, 갤러리 등(갤러리의 존폐유무 고려)
import CenterNews from "../nomalcomponents/news/CenterNews.vue";
import Gallery from "../nomalcomponents/news/Gallery.vue";

// 비로그인 시
import RecommendationProposal from "../nomalcomponents/project/RecommendationProposal.vue";
import ActivityPlan from "../nomalcomponents/project/ActivityPlan.vue";
import Presentation from "../nomalcomponents/project/Presentation.vue";
import DeFinalReport from "../nomalcomponents/project/DeFinalReport.vue";
import DeCode from "../nomalcomponents/project/DeCode.vue";

// 그냥 비로그인시
import RecruitmentNotice from "../nomalcomponents/announcement/RecruitmentNotice.vue";
import FreeBoard from "../nomalcomponents/announcement/FreeBoard";
import CourseReviews from "../nomalcomponents/announcement/CourseReviews.vue";

// 관리자 로그인시!
import PrModRecruitmentNotice from "../modify/pr/PrModRecruitmentNotice.vue";
import PrModRecommendationProposal from "../modify/pr/PrModRecommendationProposal.vue";
import PrModActivityplan from "../modify/pr/PrModActivityplan.vue";
import PrModPresentation from "../modify/pr/PrModPresentation.vue";
import PrModCenterNews from "../modify/pr/PrModCenterNews.vue";
import PrModGallery from "../modify/pr/PrModGallery.vue";
import PrModStudyTimeTable from "../modify/pr/PrModStudyTimeTable.vue";
import PrModTrainingContent from "../modify/pr/PrModTrainingContent.vue";

//회원로그인시
import DeModFinalReport from '../modify/de/DeModFinalReport.vue';
import DeModCode from '../modify/de/DeModCode.vue';
import DeModFreeBoard from '../modify/de/DeModFreeBoard.vue';
import DeModCourseReviews from '../modify/de/DeModCourseReviews.vue';

//추가
import RecruitmentNotice1 from "@/nomalcomponents/announcement/RecruitmentNotice1.vue";
import EditRecruitmentNotice from "@/nomalcomponents/announcement/EditRecruitmentNotice.vue";

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
    path: '/recruitment-notice1/:id',
    name: 'RecruitmentNotice1',
    component: RecruitmentNotice1,
    props: true
  },
  {
    path: '/edit-recruitment-notice/:id',
    name: 'EditRecruitmentNotice',
    component: EditRecruitmentNotice,
    props: true
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
    path: '/nomalcomponents/centerinformation/AgencyIntroduction',
    name: 'AgencyIntroduction',
    component: AgencyIntroduction
  },
  {
    path: '/nomalcomponents/centerinformation/CenterIntoduction',
    name: 'CenterIntoduction',
    component: CenterIntoduction
  },
  {
    path: '/nomalcomponents/centerinformation/WayToCome',
    name: 'WayToCome',
    component: WayToCome
  },

  // 훈련개요
  {
    path: '/nomalcomponents/traininginformation/TrainingContent',
    name: 'TrainingContent',
    component: TrainingContent
  },
  {
    path: '/nomalcomponents/traininginformation/AdmissionProcess',
    name: 'AdmissionProcess',
    component: AdmissionProcess
  },
  {
    path: '/nomalcomponents/traininginformation/ApplyForAdmission',
    name: 'ApplyForAdmission',
    component: ApplyForAdmission
  },
  {
    path: '/nomalcomponents/traininginformation/StudyTimeTable',
    name: 'StudyTimeTable',
    component: StudyTimeTable
  },

  // 소식
  {
    path: '/nomalcomponents/news/CenterNews',
    name: 'CenterNews',
    component: CenterNews
  },
  {
    path: '/nomalcomponents/news/Gallery',
    name: 'Gallery',
    component: Gallery
  },

  // 프로젝트
  {
    path: '/nomalcomponents/project/RecommendationProposal',
    name: 'RecommendationProposal',
    component: RecommendationProposal
  },
  {
    path: '/nomalcomponents/project/ActivityPlan',
    name: 'ActivityPlan',
    component: ActivityPlan
  },
  {
    path: '/nomalcomponents/project/Presentation',
    name: 'Presentation',
    component: Presentation
  },
  {
    path: '/nomalcomponents/project/DeFinalReport',
    name: 'DeFinalReport',
    component: DeFinalReport
  },
  {
    path: '/nomalcomponents/project/DeCode',
    name: 'DeCode',
    component: DeCode
  },

  // 공지사항
  {
    path: '/nomalcomponents/announcement/RecruitmentNotice',
    name: 'RecruitmentNotice',
    component: RecruitmentNotice
  },
  {
    path: '/nomalcomponents/announcement/FreeBoard',
    name: 'FreeBoard',
    component: FreeBoard
  },
  {
    path: '/nomalcomponents/announcement/CourseReviews',
    name: 'CourseReviews',
    component: CourseReviews
  },

  // 로그인시 관리자 페이지
  {
    path: '/nomalcomponents/announcement/PrModRecruitmentNotice',
    name: 'PrModRecruitmentNotice',
    component: PrModRecruitmentNotice
  },
  {
    path: '/nomalcomponents/announcement/PrModRecommendationProposal',
    name: 'PrModRecommendationProposal',
    component: PrModRecommendationProposal
  },
  {
    path: '/nomalcomponents/announcement/PrModActivityplan',
    name: 'PrModActivityplan',
    component: PrModActivityplan
  },
  {
    path: '/nomalcomponents/announcement/PrModPresentation',
    name: 'PrModPresentation',
    component: PrModPresentation
  },
  {
    path: '/nomalcomponents/announcement/PrModCenterNews',
    name: 'PrModCenterNews',
    component: PrModCenterNews
  },
  {
    path: '/nomalcomponents/announcement/PrModGallery',
    name: 'PrModGallery',
    component: PrModGallery
  },
  {
    path: '/nomalcomponents/announcement/PrModStudyTimeTable',
    name: 'PrModStudyTimeTable',
    component: PrModStudyTimeTable
  },
  {
    path: '/nomalcomponents/announcement/PrModTrainingContent',
    name: 'PrModTrainingContent',
    component: PrModTrainingContent
  },

  //회원 로그인 페이지
  {
    path: '/modify/de/DeModFinalReport',
    name: 'DeModFinalReport',
    component: DeModFinalReport,
  },
  {
    path: '/modify/de/DeModCode',
    name: 'DeModCode',
    component: DeModCode,
  },
  {
    path: '/modify/de/DeModFreeBoard',
    name: 'DeModFreeBoard',
    component: DeModFreeBoard,
  },
  {
    path: '/modify/de/DeModCourseReviews',
    name: 'DeModCourseReviews',
    component: DeModCourseReviews,
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
