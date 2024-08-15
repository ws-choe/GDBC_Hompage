export default {
  data() {
    return {
      firstSectionVisible: false,
      sectionGroups: [
        `<strong>구로디지털훈련센터</strong>는 2021년 11월 29일에 개소하였으며,
          넓고 쾌적한 공간에서 다양한 교육을 제공하고 있습니다.
          저희 센터는 총 면적 1,362.04㎡(약 412평)로, 여러 가지 최신 시설과 편의 공간을 자랑합니다.`,
        `이곳에서는 <strong>7개의 훈련실</strong>이 마련되어 있으며,
          기업 지원을 위한 사무 공간인 파트너 스페이스도 갖추고 있습니다.
          뿐만 아니라, 3D 프린터실과 IT 관련 창업 교육을 위한 스타트업실도 준비되어 있어,
          <strong>다양한 창의적 아이디어를 실현할 수 있는 환경</strong>이 조성되어 있습니다.
          또한, 다목적실, 카페형 휴게공간, 회의실, 전산실, 훈련지원실 등 다양한 부대시설도 제공되어 있어
          학습과 네트워킹을 위한 편리한 공간을 제공합니다.`,
        `<strong>센터의 주요 훈련 장비</strong>로는 모든 강의실에 설치된 248cm(98인치) 전자칠판, 3D 프린터, 협동 로봇,
          그리고 인공지능과 소프트웨어 개발을 위한 다양한 프로그램들이 있습니다.
          이 모든 것이 모여 학습자들이 최신 IT기술을 익힐 수 있는 최적의 환경을 제공하고 있습니다!`
      ],
      groupVisible: [false, false, false],
      images: [
        { title: "이미지 1", filename: "image/Main.png" },
        { title: "이미지 2", filename: "image/CenterLobby.png" },
        { title: "이미지 3", filename: "image/CenterMain.png" },
        { title: "이미지 4", filename: "image/tr1.png" },
        { title: "이미지 5", filename: "image/tr2.png" },
        { title: "이미지 6", filename: "image/tr3.png" }
      ],
      directions: [
        "image/경로.png"
      ],

      directionss: [
        "image/위치.png"
      ],

      duplicatedImages: [], // 원래 이미지와 클론된 이미지를 저장할 배열
      autoSlideTimer: null, // 자동 슬라이드를 위한 타이머 변수 추가
      scrollAmount: 200, // 한 번에 스크롤할 픽셀 양
      isDown: false,
      startX: 0,
      scrollLeft: 0
    };
  },
  mounted() {
    setTimeout(() => {
      this.firstSectionVisible = true;
    }, 500);

    this.sectionGroups.forEach((group, index) => {
      setTimeout(() => {
        this.groupVisible[index] = true;
      }, 1000 + index * 1500);
    });

    this.setupCarousel(); // 캐러셀 설정 추가
    this.startAutoSlide(); // 자동 슬라이드 시작

    // 이벤트 리스너 추가
    window.addEventListener('mouseup', this.endDrag);
    window.addEventListener('mousemove', this.onDrag);
  },
  beforeDestroy() {
    // 이벤트 리스너 제거
    window.removeEventListener('mouseup', this.endDrag);
    window.removeEventListener('mousemove', this.onDrag);
    this.stopAutoSlide(); // 자동 슬라이드 타이머 제거
  },
  methods: {
    setupCarousel() {
      // 이미지를 두 번 반복하여 무한 루프처럼 보이도록 설정
      this.duplicatedImages = [...this.images, ...this.images];
      
      // 부드러운 순환을 위해 중간 지점으로 스크롤 시작
      this.$nextTick(() => {
        const carousel = this.$refs.carousel;
        if (carousel) {
          carousel.scrollLeft = carousel.scrollWidth / 2;
        }
      });
    },
    startAutoSlide() {
      if (!this.autoSlideTimer) { // 타이머가 이미 설정되어 있는 경우는 재설정하지 않음
        this.autoSlideTimer = setInterval(() => {
          this.autoSlide();
        }, 20); // 짧은 간격으로 부드럽게 이동
      }
    },
    stopAutoSlide() {
      if (this.autoSlideTimer) {
        clearInterval(this.autoSlideTimer); // 타이머 정지
        this.autoSlideTimer = null; // 타이머 변수 초기화
      }
    },
    autoSlide() {
      const carousel = this.$refs.carousel;
      if (carousel) {
        const maxScrollLeft = carousel.scrollWidth / 2; // 중간 지점까지만 스크롤

        if (carousel.scrollLeft >= maxScrollLeft) {
          carousel.scrollLeft = 0; // 다시 처음으로
        } else {
          carousel.scrollLeft += 1; // 천천히 스크롤
        }
      }
    },
    startDrag(e) {
      this.isDown = true;
      this.startX = e.pageX - e.currentTarget.offsetLeft;
      this.scrollLeft = e.currentTarget.scrollLeft;
      this.stopAutoSlide(); // 드래그 중에는 자동 슬라이드 정지
    },
    endDrag() {
      this.isDown = false;
      this.startAutoSlide(); // 드래그 종료 후 자동 슬라이드 재개
    },
    onDrag(e) {
      if (!this.isDown) return;
      e.preventDefault();
      const x = e.pageX - e.currentTarget.offsetLeft;
      const walk = (x - this.startX) * 1; // 드래그 중 속도 조절 (예: 1로 줄이기)
      e.currentTarget.scrollLeft = this.scrollLeft - walk;
    },
    getSectionStyle(groupIndex) {
      const colors = ['#f5a623', '#b7e4a1', '#a2d9ff']; // 연한 주황색, 연두색, 하늘색
      const borderRadius = '30px'; // 원하는 border-radius 값

      return {
        'background-color': colors[groupIndex],
        'border-radius': borderRadius
      };
    }
  }
};
