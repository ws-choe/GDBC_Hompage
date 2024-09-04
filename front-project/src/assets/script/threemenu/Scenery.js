

export default {
   data() {
     return {
       selectedCategory: '우리들의 이야기',
       newsList: [
         { img: 'image/3Dprinterroom.png', title: '3D프린터실', category: '우리들의 이야기' },
         { img: 'image/Broadcastingroom1.png', title: '방송실', category: '우리들의 이야기' },
         { img: 'image/Broadcastingroom2.png', title: '방송실', category: '우리들의 이야기' },
         { img: 'image/conferenceroom.png', title: '대회의실', category: '우리들의 이야기' },
         { img: 'image/corridor.png', title: '복도', category: '우리들의 이야기' },
         { img: 'image/corridor2.png', title: '복도2', category: '우리들의 이야기' },
         { img: 'image/lobby.png', title: '로비', category: '우리들의 이야기' },
         { img: 'image/lobby2.png', title: '로비2', category: '우리들의 이야기' },
         { img: 'image/multipurposeroom.png', title: '다목적실', category: '우리들의 이야기' },
         { img: 'image/Restarea.png', title: '휴게공간', category: '우리들의 이야기' },
         { img: 'image/Restarea2.png', title: '휴게공간2', category: '우리들의 이야기' },
         { img: 'image/trainingroomiMAC.png', title: '훈련실(iMAC)', category: '우리들의 이야기' },
         { img: 'image/trainingroomwindows.png', title: '훈련실2(windows)', category: '우리들의 이야기' },
         { img: 'image/trainingroom3.png', title: '훈련실3', category: '우리들의 이야기' },
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


