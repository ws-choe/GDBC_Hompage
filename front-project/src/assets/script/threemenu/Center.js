

export default {
   data() {
     return {
       selectedCategory: '우리들의 이야기',
       newsList: [
         { img: 'image/CenterMain.png', title: '', category: '우리들의 이야기' },
         { img: 'image/CenterLobby.png', title: '', category: '우리들의 이야기' },
         { img: 'image/tr1.png', title: '', category: '우리들의 이야기' },
         { img: 'image/tr2.png', title: '', category: '우리들의 이야기' },
         { img: 'image/tr3.png', title: '', category: '우리들의 이야기' },
         { img: 'image/Main.png', title: '', category: '우리들의 이야기' },
         { img: 'image/Main.png', title: '', category: '우리들의 이야기' },
         { img: 'image/Main.png', title: '', category: '우리들의 이야기' },
         { img: 'image/Main.png', title: '', category: '우리들의 이야기' },
         { video: 'https://www.youtube.com/embed/JEm38SAd1BI', title: '홍보영상 1', category: '홍보영상' },
         { video: 'https://www.youtube.com/embed/ApXoWvfEYVU', title: '홍보영상 2', category: '홍보영상' },
         { video: 'https://www.youtube.com/embed/2QgmWsKy4Mo', title: '홍보영상 2', category: '홍보영상' },
         { img: 'image/Main.png', title: '인터뷰 1', category: '수강생 인터뷰' },
         { img: 'image/Main.png', title: '후기 1', category: '수강 후기' }
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
   },


 };


