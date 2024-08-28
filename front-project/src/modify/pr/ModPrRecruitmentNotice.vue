<template>

  
  <!-- 공지사항 카테고리 목록 -->

  <div class="announcement-container">
  <h1 class="announcement-title">모집공고</h1>
  <div class="nav-buttons">
    <router-link class="nav-button active" :to="{ name: 'RecruitmentNotice' }"
      >모집공고</router-link
    >
    <router-link class="nav-button" :to="{ name: 'Employment' }"
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

      <div class="form-group">
          <label for="image2">이미지2:</label>
          <input
            type="file"
            class="form-control"
            @change="handleImageChange2"
          />
          
          <div v-if="imagePreview2">
          <img :src="imagePreview2" alt="미리보기2" width="200" />
          <button type="button" @click="removeImage2">이미지2 제거</button>
          </div>
          <div v-else>
            <img
              v-if="post.imagePath2"
              :src="`/uploads/${post.imagePath2}`"
              alt="게시물 이미지"
              class="post-image"
            />
            <button v-if="post.imagePath2" type="button" @click="removeImage2">이미지2 제거</button>
        </div>
      </div>

      <div class="form-group">
          <label for="image3">이미지3:</label>
          <input
            type="file"
            class="form-control"
            @change="handleImageChange3"
          />
          <div v-if="imagePreview3">
          <img :src="imagePreview3" alt="미리보기3" width="200" />
          <button type="button" @click="removeImage2">이미지3 제거</button>
          </div>
          <div v-else>
            <img
              v-if="post.imagePath3"
              :src="`/uploads/${post.imagePath3}`"
              alt="게시물 이미지"
              class="post-image"
            />
            <button v-if="post.imagePath3" type="button" @click="removeImage3">이미지 제거</button>
          </div>
      </div>

      <div class="form-group">
          <label for="image4">이미지4:</label>
          <input
            type="file"
            class="form-control"
            @change="handleImageChange4"
          />
          <div v-if="imagePreview4">
          <img :src="imagePreview4" alt="미리보기" width="200" />
          <button type="button" @click="removeImage4">이미지 제거</button>
          </div>
          <div v-else>
            <img
              v-if="post.imagePath4"
              :src="`/uploads/${post.imagePath4}`"
              alt="게시물 이미지"
              class="post-image"
            />
            <button v-if="post.imagePath4" type="button" @click="removeImage4">이미지 제거</button>
          </div>
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
  imagePath: "",
  imagePath2:"",
  imagePath3: "",
  imagePath4:"",
});
const image = ref(null);
const imagePreview = ref(null);

const image2 = ref(null);
const imagePreview2 = ref(null);
const image3 = ref(null);
const imagePreview3 = ref(null);
const image4 = ref(null);
const imagePreview4 = ref(null);
const origin= ref(true);
const origin2= ref(true);
const origin3= ref(true);
const origin4= ref(true);

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

const handleImageChange3 = (event) => {
  const file = event.target.files[0];
    if (file) {
      image3.value = file;
      const reader = new FileReader();
      reader.onload = (e) => {
        imagePreview3.value = e.target.result;
      };
      reader.readAsDataURL(file);
      post.value.imagePath3=image3.value;
      origin3.value=false;
    }
};

const removeImage3 = () => {
  post.value.imagePath3=null;
  imagePreview3.value=null;
  origin3.value=false;
};


const handleImageChange4 = (event) => {
  const file = event.target.files[0];
    if (file) {
      image4.value = file;
      const reader = new FileReader();
      reader.onload = (e) => {
        imagePreview4.value = e.target.result;
      };
      reader.readAsDataURL(file);
      post.value.imagePath4=image4.value;
      origin4.value=false;
    }
};

const removeImage4 = () => {
  post.value.imagePath4=null;
  imagePreview4.value=null;
  origin4.value=false;
};
const handleSubmit = async () => {
  const formData = new FormData();
    formData.append('title', post.value.title);
    formData.append('content', post.value.content);

    if(!origin.value){
        formData.append('image', post.value.imagePath);
    }
  
    if(!origin2.value){
      formData.append('image2', post.value.imagePath2);
    }
    if(!origin3.value){
        formData.append('image3', post.value.imagePath3);
    }
  
    if(!origin4.value){
      formData.append('image4', post.value.imagePath4);
    }
    
    formData.append('origin', origin.value);
    formData.append('origin2', origin2.value);
    formData.append('origin3', origin3.value);
    formData.append('origin4', origin4.value);
    
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

<style scoped src="@/assets/style/modstyle/Mod.css"></style>
