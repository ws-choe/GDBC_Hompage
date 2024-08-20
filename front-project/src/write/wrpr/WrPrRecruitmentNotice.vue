<template>
  <!-- 헤더 영역 메뉴바 끝 -->

  <h1>모집 글 작성 하는곳</h1>
  <h1>모집 글 작성 하는곳</h1>

  <div class="container">
    <h1>{{ isEditing ? "게시물 수정" : "게시물 작성" }}</h1>
    <form class="post-form" @submit.prevent="submitPost">
      <input v-model="title" type="text" placeholder="제목" class="input" required />
      <textarea v-model="content" placeholder="내용" class="textarea" required></textarea>
      <div>
        <label for="image-upload1">첨부파일 1:</label>
        <input id="image-upload1" type="file" @change="handleFileChange1" />
        <img v-if="imagePreview1" :src="imagePreview1" alt="미리보기1" width="200" />
      </div>
      <div>
        <label for="image-upload2">첨부파일2:</label>
        <input id="image-upload2" type="file" @change="handleFileChange2" />
        <img v-if="imagePreview2" :src="imagePreview2" alt="미리보기2" width="200" />
      </div>
      <button type="submit" class="button">
        {{ isEditing ? "수정하기" : "작성하기" }}
      </button>
    </form>
  </div>

  <!-- footer 영억 시작 하단 -->

  <!-- footer 영역 끝 -->

  <router-view />
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";
import axios from "axios";
import { useUserStore } from "@/store/SignUp";
import { storeToRefs } from "pinia";

const route = useRoute();
const router = useRouter();
const userStore = useUserStore();
const { isLoggedIn } = storeToRefs(userStore);

const title = ref("");
const content = ref("");
const image1 = ref(null);
const imagePreview1 = ref(null);

const image2 = ref(null);
const imagePreview2 = ref(null);

const isEditing = ref(false);

const handleFileChange1 = (event) => {
  const file = event.target.files[0];
  if (file) {
    image1.value = file;
    const reader = new FileReader();
    reader.onload = (e) => {
      imagePreview1.value = e.target.result;
    };
    reader.readAsDataURL(file);
  }
};

const handleFileChange2 = (event) => {
  const file = event.target.files[0];
  if (file) {
    image2.value = file;
    const reader = new FileReader();
    reader.onload = (e) => {
      imagePreview2.value = e.target.result;
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
    console.error("Error fetching post:", error);
  }
};

const submitPost = async () => {
  if (!isLoggedIn.value) {
    alert("로그인이 필요합니다.");
    router.push({ name: "Login" });
    return;
  }

  if (!title.value || !content.value || !userStore.id) {
    console.error("Missing required fields: title, content, or userId");
    alert("제목, 내용, 또는 사용자 ID가 없습니다.");
    return;
  }

  const formData = new FormData();
  formData.append("title", title.value);
  formData.append("content", content.value);
  formData.append("userId", userStore.id);
  if (image1.value) {
    formData.append("image1", image1.value);
  }
  if (image2.value) {
    formData.append("image2", image2.value);
  }


  try {
    if (isEditing.value) {
      await axios.put(`/posts/${route.params.id}`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
    } else {
      await axios.post("/posts", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
    }
    router.push({ name: "RecruitmentNotice" });
  } catch (error) {
    console.error(
      "Error submitting post:",
      error.response ? error.response.data : error.message
    );
    alert("게시글 작성/수정 중 오류가 발생했습니다.");
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
