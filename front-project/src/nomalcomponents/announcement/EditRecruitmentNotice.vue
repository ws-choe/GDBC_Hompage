<template>
    <div class="edit-container">
      <h1>게시물 수정</h1>
      <form @submit.prevent="handleSubmit">
        <div class="form-group">
          <label for="title">제목:</label>
          <input
            v-model="post.title"
            type="text"
            id="title"
            class="form-control"
            required
          />
        </div>
        <div class="form-group">
          <label for="content">내용:</label>
          <textarea
            v-model="post.content"
            id="content"
            class="form-control"
            rows="10"
            required
          ></textarea>
        </div>
        <div class="form-group">
          <label for="image">이미지:</label>
          <input
            type="file"
            id="image"
            class="form-control"
            @change="handleImageChange"
          />
          <div v-if="post.image">
            <img
              :src="`http://localhost:80/uploads/${post.image}`"
              alt="게시물 이미지"
              class="post-image"
            />
            <button type="button" @click="removeImage">이미지 제거</button>
          </div>
        </div>
        <button type="submit" class="btn btn-primary">수정하기</button>
      </form>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  import { useRoute, useRouter } from 'vue-router';
  import axios from 'axios';
  
  const route = useRoute();
  const router = useRouter();
  
  const post = ref({
    title: '',
    content: '',
    image: ''
  });
  
  const selectedImage = ref(null);
  
  const fetchPost = async (id) => {
    try {
      const response = await axios.get(`http://localhost:80/posts/${id}`);
      post.value = response.data;
    } catch (error) {
      console.error('Error fetching post:', error);
    }
  };
  
  const handleImageChange = (event) => {
    selectedImage.value = event.target.files[0];
  };
  
  const removeImage = () => {
    post.value.image = null;
  };
  
  const handleSubmit = async () => {
    const formData = new FormData();
    formData.append('title', post.value.title);
    formData.append('content', post.value.content);
    formData.append('image', selectedImage.value);
    formData.append('removeImage', post.value.image ? 'false' : 'true');
  
    try {
      await axios.put(`http://localhost:80/posts/${route.params.id}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      alert('게시물이 수정되었습니다.');
      console.log("====================");
      router.push({ name: 'RecruitmentNotice1', params: { id: route.params.id } });
    } catch (error) {
      console.error('Error updating post:', error);
    }
  };
  
  onMounted(() => {
    if (route.params.id) {
      fetchPost(route.params.id);
    }
  });
  </script>
  
  <style scoped>
  /* 스타일 추가 */
  .post-image {
    width: 100%;
    max-width: 600px;
    height: auto;
    margin-top: 10px;
  }
  </style>
  