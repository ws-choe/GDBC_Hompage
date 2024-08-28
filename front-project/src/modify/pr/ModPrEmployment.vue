<template>
  <!-- 공지사항 카테고리 목록 -->

  <div class="announcement-container">
<h1 class="announcement-title">채용공고</h1>
<div class="nav-buttons">
  <router-link class="nav-button" :to="{ name: 'RecruitmentNotice' }"
    >모집공고</router-link
  >
  <router-link class="nav-button active" :to="{ name: 'Employment' }"
    >채용공고</router-link
  >
  <router-link class="nav-button" :to="{ name: 'QnABoard' }"
    >문의게시판</router-link
  >
</div>

<div class="container">
<form @submit.prevent="handleSubmit">
  <div class="write-box">
    <div class="title-input">
      <input v-model="post.title" type="text" placeholder="제목" class="input" required style="border: none;" />
    </div>

    <input id="image-upload" type="file" @change="handleImageChange" style="display: none;" />

    <div v-if="post.image || selectedFiles.length > 0" class="image-delete">
      <p v-if="selectedFiles.length > 0">{{ selectedFiles.map(file => file.name).join(', ') }}</p>
      <p v-else>{{ post.image }}</p>
      <button type="button" @click="removeImage" class="remove-btn">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-square" viewBox="0 0 16 16">
          <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z"/>
          <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"/>
        </svg>
      </button>
    </div>

    <div v-else class="image-box">
      <label for="image-upload" class="file-upload-label">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-file-earmark-arrow-up" viewBox="0 0 16 16">
          <path d="M8.5 11.5a.5.5 0 0 1-1 0V7.707L6.354 8.854a.5.5 0 1 1-.708-.708l2-2a.5.5 0 0 1 .708 0l2 2a.5.5 0 0 1-.708.708L8.5 7.707z"/>
          <path d="M14 14V4.5L9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2M9.5 3A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h5.5z"/>
        </svg> 첨부 파일
      </label>
      <p v-if="selectedFiles.length === 0">선택된 파일 없음</p>
      <div class="file-names">
        <p v-if="selectedFiles.length > 0">선택된 파일: {{ selectedFiles.map(file => file.name).join(', ') }}</p>
      </div>
      <img v-if="imagePreview" :src="imagePreview" alt="미리보기" width="200" />
    </div>
  </div> <!-- write-box 종료 -->

  <textarea v-model="post.content" placeholder="내용을 입력해주세요." class="textarea" required></textarea>

  <div class="button-group">
    <button type="button" class="cancel-button" @click="$router.go(-1)">취소</button>
    <button type="submit" class="write-button">{{ isEditing ? '수정' : '등록' }}</button>
  </div>
</form>
</div>
</div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";
import axios from "axios";

const route = useRoute();
const router = useRouter();

const post = ref({
  title: "",
  content: "",
  image: "",
});

const image = ref(null);
const imagePreview = ref(null);
const origin = ref(true);

const fetchPost = async (id) => {
  try {
    const response = await axios.get(`/employmentboard/${id}`);
    post.value = response.data;
  } catch (error) {
    console.error("Error fetching post:", error);
  }
};

const handleImageChange = (event) => {
  const file = event.target.files[0];
    if (file) {
      image.value = file;
      const reader = new FileReader();
      reader.onload = (e) => {
        imagePreview.value = e.target.result;
      };
      reader.readAsDataURL(file);
      post.value.imagePath=image.value;
      origin.value=false;
    }
};

const removeImage = () => {
  post.value.imagePath=null;
  imagePreview.value=null;
  origin.value=false;
};

const handleSubmit = async () => {
  const formData = new FormData();
    formData.append('title', post.value.title);
    formData.append('content', post.value.content);
    if(post.value.imagePath!=null){
      formData.append('image', post.value.imagePath);
    }
    formData.append('origin', origin.value);
    console.log(origin.value);
  try {
      await axios.put(`/employmentboard/${route.params.id}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      alert('게시물이 수정되었습니다.');
      router.push({ name: "DetEmployment", params: { id: route.params.id } });
    } catch (error) {
      console.error('게시물 수정 오류:', error);
    }
};

onMounted(() => {
  if (route.params.id) {
    fetchPost(route.params.id);
  }
});
</script>

<style scoped src="@/assets/style/modstyle/Mod.css"></style>
