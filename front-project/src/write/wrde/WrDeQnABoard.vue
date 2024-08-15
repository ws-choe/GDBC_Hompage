<template>
  <h1>자유게시판</h1>

  <div class="container">
    <h1>{{ isEditing ? "게시물 수정" : "게시물 작성" }}</h1>
    <form class="post-form" @submit.prevent="submitPost">
      <input v-model="title" type="text" placeholder="제목" class="input" required />
      <textarea v-model="content" placeholder="내용" class="textarea" required></textarea>
      <div>
        <label for="image-upload">첨부파일:</label>
        <input id="image-upload" type="file" @change="handleFileChange" />
        <img v-if="imagePreview" :src="imagePreview" alt="미리보기" width="200" />
      </div>
      <button type="submit" class="button">
        {{ isEditing ? "수정하기" : "작성하기" }}
      </button>
    </form>
  </div>
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
const image = ref(null);
const imagePreview = ref(null);
const isEditing = ref(false);

const handleFileChange = (event) => {
  const file = event.target.files[0];
  if (file) {
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
    const response = await axios.get(`/qnaboard/${id}`);
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
  if (image.value) {
    formData.append("image", image.value);
  }

  try {
    if (isEditing.value) {
      await axios.put(`/qnaboard/${route.params.id}`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
    } else {
      await axios.post("/qnaboard", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
    }
    router.push({ name: "QnABoard" });
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
