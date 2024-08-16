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
            class="form-control"
            @change="handleImageChange"
          />
          
          <div v-if="imagePreview">
          <img :src="imagePreview" alt="미리보기" width="200" />
          <button type="button" @click="removeImage">이미지 제거</button>
          </div>
          <div v-else>
            <img
              v-if="post.imagePath"
              :src="`/uploads/${post.imagePath}`"
              alt="게시물 이미지"
              class="post-image"
            />
            <button v-if="post.imagePath" type="button" @click="removeImage">이미지 제거</button>
          </div>        
      </div>
      <button type="submit" class="btn btn-primary">수정하기</button>
    </form>
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
    const response = await axios.get(`/posts/${id}`);
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
      await axios.put(`/posts/${route.params.id}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      alert('게시물이 수정되었습니다.');
      router.push({ name: "DetRecruitmentNotice", params: { id: route.params.id } });
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

<style scoped>
/* 스타일 추가 */
.post-image {
  width: 100%;
  max-width: 600px;
  height: auto;
  margin-top: 10px;
}
</style>
