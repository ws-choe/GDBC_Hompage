

export default {
   data() {
     return {
       selectedCategory: '우리들의 이야기',
       newsList: [
         { img: 'image/기사사진1.png', title: '', category: '우리들의 이야기' },
         { img: 'image/기사사진1.png', title: 'sad', category: '우리들의 이야기' },
         { img: 'image/tr1.png', title: '', category: '우리들의 이야기' },
         { img: 'image/tr2.png', title: '', category: '우리들의 이야기' },
         { img: 'image/tr3.png', title: '', category: '우리들의 이야기' },
         { img: 'image/Main.png', title: '', category: '우리들의 이야기' },
         { img: 'image/Main.png', title: '', category: '우리들의 이야기' },
         { img: 'image/Main.png', title: '', category: '우리들의 이야기' },
         { img: 'image/Main.png', title: '', category: '우리들의 이야기' },
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


