export default {
    data() {
      return {
        selectedCategory: '우리들의 이야기',
        newsList: [
          { content: '코딩을 정말 재미있게 배울 수 있었고 결과적으로 이 일을 계속해도 되겠다는 확신이 생겼습니다. 6개월 동안 커리큘럼을 진행하면서 힘든 일도 많았지만, 그 과정에서 많은 것을 배울 수 있었습니다.', title: '이*용/1기 아카데미 참가생', category: '1기생' },
          { content: '교육 기간 동안 강사님들이 정말 잘 가르쳐주셔서, 기대했던 것보다 훨씬 더 많은 것을 배울 수 있었어요. 커리큘럼 외에도 많은 격려를 받아 정말 감사했습니다.', title: '임*택/1기 아카데미 참가생', category: '1기생' },

          { content: '디지털 코딩 아카데미에서 제가 좋아하는 일을 찾게 되었고, 내가 뭔가를 할 수 있다는 자신감을 얻게 되었습니다. 이 시간이 저에게 정말 뜻깊었어요. ', title: '오*화/2기 아카데미 참가생', category: '2기생' },
          { content: '디지털 코딩 아카데미 교육을 받으면서 내가 점점 성장하고 있다는 걸 느꼈고, 그 과정이 저에게 큰 동기부여가 되었습니다. 정말 감사해요.', title: '권*/2기 아카데미 참가생', category: '2기생' },
          { content: '취업 준비를 하면서 장애로 인해 보이지 않는 벽을 많이 느꼈었는데, 디지털 코딩 아카데미 덕분에 좋은 교육 기회를 얻을 수 있어서 정말 감사했습니다. 이제는 배운 것을 나누는 사람이 되고 싶습니다.', title: '최*경/ 2기 아카데미 참가생', category: '2기생' },

          { content: '코딩을 배우면서 많은 실패를 겪었지만, 그 실패가 새로운 도전이라는 것을 깨닫게 되었습니다. 또한, 장학금과 숙소비 지원도 정말 큰 도움이 되었어요.', title: '김*지/3기 아카데미 참가생', category: '3기생' },
          { content: '디지털 코딩 아카데미를 통해 취업 준비 과정에서 많은 지원을 받았는데, 이 과정이 저에게 가장 큰 혜택이 되었어요. 정말 감사한 마음입니다.', title: '이*우/3기 아카데미 참가생', category: '3기생' },
          { content: '디지털 코딩 아카데미를 통해 "나도 할 수 있다" 는 자신감을 얻었습니다. 저에게는 정말 큰 변화였어요.', title: '이*철/3기 아카데미 참가생', category: '3기생' },
          { content: '취업 준비를 하면서 장애로 인해 보이지 않는 벽을 많이 느꼈었는데, 디지털 코딩 아카데미 덕분에 좋은 교육 기회를 얻을 수 있어서 정말 감사했습니다. 이제는 배운 것을 나누는 사람이 되고 싶습니다.', title: '최*경/3기 아카데미 참가생', category: '3기생' },
          { content: '디지털 코딩 아카데미 교육을 받으면서 내가 점점 성장하고 있다는 걸 느꼈고, 그 과정이 저에게 큰 동기부여가 되었습니다. 정말 감사해요.', title: '권*/3기 아카데미 참가생', category: '3기생' }
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