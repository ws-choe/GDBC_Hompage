
export default {
   data() {
     return {
       selectedCategory: '우리들의 이야기',
       newsList: [
 
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
 
 
 