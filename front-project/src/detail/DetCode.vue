<template>
  <!-- 프로젝트 카테고리 목록 -->
  <div class="project-container">
       <h1 class="project-title">코드</h1>
       <div class="nav-buttons">
         <router-link class="nav-button" :to="{ name: 'RecommendationProposal' }">과제 제안서</router-link>
         <router-link class="nav-button" :to="{ name: 'ActivityPlan' }">수행 계획서</router-link>
         <router-link class="nav-button" :to="{ name: 'Presentation' }">발표 자료</router-link>
         <router-link class="nav-button" :to="{ name: 'FinalReport' }">최종 보고서</router-link>
         <router-link class="nav-button active" :to="{ name: 'Code' }">코드</router-link>
       </div>

     <!-- 게시글 상세 내용 -->
     <div class="post-line"></div>
       <div class="post-detail" v-if="post.title">
         <h1 class="post-title">{{ post.title }}</h1>
         <div class="post-subtitle">
           <p class="created">등록일 : {{ formatDate(post.created_at) }}</p>
           <p>조회수 : {{ post.views }}</p>
         </div>
         <div class="post-line"></div>
         <p class="upload-label">첨부파일</p>
         <div class="post-line"></div>

       <div v-if="post.imagePath">
         <img class="post-image" :src="`/uploads/${post.imagePath}`" alt="게시물 이미지">
       </div>
       <div v-else>
         <p>이미지가 없습니다</p>
       </div>
       <p>{{ post.content }}</p>
       <div class="post-line"></div>
       <div class="button-group">
       <button type="submit" class="list-button" @click="$router.go(-1)">목록</button>
       <div v-if="isAuthor" class="edit-delete-buttons">
         <button @click="editPost" class="edit-btn"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil" viewBox="0 0 16 16">
           <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325"/>
         </svg>수정</button>
         <button @click="deletePost" class="delete-btn"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash3" viewBox="0 0 16 16">
 <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5M11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47M8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5"/>
</svg>삭제</button>
       </div>
     </div>
     </div>
     </div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue';
import axios from 'axios';
import { useRoute, useRouter } from 'vue-router';
import { useUserStore } from '@/store/SignUp';
import { storeToRefs } from 'pinia';

const route = useRoute();
const router = useRouter();
const userStore = useUserStore();
const { isLoggedIn, id: userId } = storeToRefs(userStore);

const post = ref({
 title: '',
 content: '',
 id: 0,
 userId: 0,
 image: ''  // 이미지 파일명 추가
});
const comments = ref([]);
const comment = ref('');
const isAuthor = computed(() => isLoggedIn.value && post.value.userId === userId.value);

const fetchPostDetails = async () => {
 try {
   const response = await axios.get(`/code/${route.params.id}`);
   post.value = response.data;
   console.log('Post Data:', post.value); // 응답 데이터 확인

   const commentsResponse = await axios.get(`/code/${route.params.id}/comments`);
   console.log('Comments Data:', commentsResponse.data);
   comments.value = commentsResponse.data;
 } catch (error) {
   console.error('Error fetching post details:', error);
 }
};

const editPost = () => {
 router.push({ name: 'ModDeCode', params: { id: route.params.id } });
};

const deletePost = async () => {
 if (!confirm('정말로 이 게시글을 삭제하시겠습니까?')) return;

 try {
   await axios.delete(`/code/${post.value.id}`);
   router.push({ name: 'Code' }); // 게시글 목록 페이지로 이동
 } catch (error) {
   console.error('Error deleting post:', error);
   alert('게시글 삭제 중 오류가 발생했습니다.');
 }
};

const formatDate = (dateString) => {
 const date = new Date(dateString);
 return date.toLocaleDateString() + ' ' + date.toLocaleTimeString();
};

const logout = () => {
 userStore.isLoggedIn = false;
 userStore.isAdmin = false;
 router.push({ name: 'Home' });
};

// 초기 데이터 로드
onMounted(() => {
 fetchPostDetails();
});
</script>

<style>

</style>