<template>
 

 <div class="project-container">
        <h1 class="project-title">과제 제안서</h1>
        <div class="nav-buttons">
          <router-link class="nav-button active" :to="{ name: 'RecommendationProposal' }">과제 제안서</router-link>
          <router-link class="nav-button" :to="{ name: 'ActivityPlan' }">수행 계획서</router-link>
          <router-link class="nav-button" :to="{ name: 'Presentation' }">발표 자료</router-link>
          <router-link class="nav-button" :to="{ name: 'FinalReport' }">최종 보고서</router-link>
          <router-link class="nav-button" :to="{ name: 'Code' }">코드</router-link>
        </div>
      </div>

      <div class="container">
        <form class="post-form" @submit.prevent="submitPost">
          <div class="write-box">
            <div class="title-input">
              <input v-model="title" type="text" placeholder="제목" class="input" required style="border: none;"/>
            </div>
            <div class="write-file">
              <label for="image-upload" class="file-upload-label">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-file-earmark-arrow-up" viewBox="0 0 16 16">
                  <path d="M8.5 11.5a.5.5 0 0 1-1 0V7.707L6.354 8.854a.5.5 0 1 1-.708-.708l2-2a.5.5 0 0 1 .708 0l2 2a.5.5 0 0 1-.708.708L8.5 7.707z"/>
                  <path d="M14 14V4.5L9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2M9.5 3A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h5.5z"/>
                </svg> 첨부 파일
                <input id="image-upload" type="file" multiple @change="handleFileChange" />
              </label>
              <div class="file-names">
                <p v-if="selectedFiles.length">선택된 파일: {{ selectedFiles.map(file => file.name).join(', ') }}</p>
                <p v-else>선택된 파일 없음</p>
              </div>
              <img v-if="imagePreview" :src="imagePreview" alt="미리보기" width="200" />
            </div>
          </div>
          <textarea v-model="content" placeholder="내용을 입력해주세요." class="textarea" required></textarea>
          <div class="button-group">
            <button type="submit" class="cancel-button" @click="$router.go(-1)">취소</button>
            <button type="submit" class="write-button">{{ isEditing ? '수정' : '등록' }}</button>
        </div>
        </form>
        
      </div>
  
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import axios from 'axios';
import { useUserStore } from '@/store/SignUp';
import { storeToRefs } from 'pinia';

const route = useRoute();
const router = useRouter();
const userStore = useUserStore();
const { isLoggedIn } = storeToRefs(userStore);

const title = ref('');
const content = ref('');
const image = ref(null);
const imagePreview = ref(null);
const isEditing = ref(false);
const selectedFiles = ref([]);

const handleFileChange = (event) => {
  const files = event.target.files;
  selectedFiles.value = Array.from(files);

  if (files.length > 0) {
    const file = files[0];
    image.value = file;
    const reader = new FileReader();
    reader.onload = (e) => {
      imagePreview.value = e.target.result;
    };
    reader.readAsDataURL(file);
  }
};

const fetchPost = async (id) => {
  try {
    const response = await axios.get(`/posts/${id}`);
    title.value = response.data.title;
    content.value = response.data.content;
    // 이미지 미리보기 설정 (만약 이미지 URL을 제공하는 경우)
    // imagePreview.value = response.data.imageURL;
  } catch (error) {
    console.error('Error fetching post:', error);
  }
};

const submitPost = async () => {
  if (!isLoggedIn.value) {
    alert('로그인이 필요합니다.');
    router.push({ name: 'Login' });
    return;
  }

  if (!title.value || !content.value || !userStore.id) {
    console.error('Missing required fields: title, content, or userId');
    alert('제목, 내용, 또는 사용자 ID가 없습니다.');
    return;
  }

  const formData = new FormData();
  formData.append('title', title.value);
  formData.append('content', content.value);
  formData.append('userId', userStore.id);
  if (image.value) {
    formData.append('image', image.value);
  }

  try {
    if (isEditing.value) {
      await axios.put(`/posts/${route.params.id}`, formData, {
        headers: { 'Content-Type': 'multipart/form-data' }
      });
    } else {
      await axios.post('/posts', formData, {
        headers: { 'Content-Type': 'multipart/form-data' }
      });
    }
    router.push({ name: 'RecommendationProposal' });
  } catch (error) {
    console.error('Error submitting post:', error.response ? error.response.data : error.message);
    alert('게시글 작성/수정 중 오류가 발생했습니다.');
  }
};

onMounted(() => {
  if (route.params.id) {
    isEditing.value = true;
    fetchPost(route.params.id);
  }
});

</script>

<style>


</style>
  