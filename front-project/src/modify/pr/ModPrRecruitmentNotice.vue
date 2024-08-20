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
          <label for="image1">이미지1:</label>
          <input
            type="file"
            class="form-control"
            @change="handleImageChange1"
          />
          
          <div v-if="imagePreview1">
          <img :src="imagePreview1" alt="미리보기1" width="200" />
          <button type="button" @click="removeImage1">이미지1 제거</button>
          </div>
          <div v-else>
            <img
              v-if="post.imagePath1"
              :src="`/uploads/${post.imagePath1}`"
              alt="게시물 이미지"
              class="post-image"
            />
            <button v-if="post.imagePath1" type="button" @click="removeImage1">이미지 제거</button>
          </div>        
      </div>
      <div class="form-group">
          <label for="image2">이미지2:</label>
          <input
            type="file"
            class="form-control"
            @change="handleImageChange2"
          />
          
          <div v-if="imagePreview2">
          <img :src="imagePreview2" alt="미리보기2" width="200" />
          <button type="button" @click="removeImage1">이미지2 제거</button>
          </div>
          <div v-else>
            <img
              v-if="post.imagePath2"
              :src="`/uploads/${post.imagePath2}`"
              alt="게시물 이미지"
              class="post-image"
            />
            <button v-if="post.imagePath2" type="button" @click="removeImage2">이미지 제거</button>
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
  imagePath1: "",
  imagePath2:"",
});
const image1 = ref(null);
const imagePreview1 = ref(null);

const image2 = ref(null);
const imagePreview2 = ref(null);
const origin1= ref(true);
const origin2= ref(true);

const fetchPost = async (id) => {
  try {
    const response = await axios.get(`/posts/${id}`);
    post.value = response.data;
  } catch (error) {
    console.error("Error fetching post:", error);
  }
};

const handleImageChange1 = (event) => {
  const file = event.target.files[0];
    if (file) {
      image1.value = file;
      const reader = new FileReader();
      reader.onload = (e) => {
        imagePreview1.value = e.target.result;
      };
      reader.readAsDataURL(file);
      post.value.imagePath1=image1.value;
      origin1.value=false;
    }
};

const removeImage1 = () => {
  post.value.imagePath1=null;
  imagePreview1.value=null;
  origin1.value=false;
};


const handleImageChange2 = (event) => {
  const file = event.target.files[0];
    if (file) {
      image2.value = file;
      const reader = new FileReader();
      reader.onload = (e) => {
        imagePreview2.value = e.target.result;
      };
      reader.readAsDataURL(file);
      post.value.imagePath2=image2.value;
      origin2.value=false;
    }
};

const removeImage2 = () => {
  post.value.imagePath2=null;
  imagePreview2.value=null;
  origin2.value=false;
};

const handleSubmit = async () => {
  const formData = new FormData();
    formData.append('title', post.value.title);
    formData.append('content', post.value.content);

    if(!origin1.value){
        formData.append('image1', post.value.imagePath1);
    }
  
    if(!origin2.value){
      formData.append('image2', post.value.imagePath2);
    }
    
    formData.append('origin1', origin1.value);
    formData.append('origin2', origin2.value);
    
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
