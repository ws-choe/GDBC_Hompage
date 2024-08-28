<template>
  <!-- 헤더 영역 메뉴바 끝 -->
  <!-- 공지사항 카테고리 목록 -->

  <div class="announcement-container">
    <h1 class="announcement-title">모집 공고</h1>
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
      <form class="post-form" @submit.prevent="submitPost">
        <div class="write-box">
          <div class="title-input">
            <input
              v-model="title"
              type="text"
              placeholder="제목"
              class="input"
              required
              style="border: none"
            />
          </div>
          <div class="write-file">
            <div class="file-upload-section">
            <label for="image-upload" class="file-upload-label">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                class="bi bi-file-earmark-arrow-up"
                viewBox="0 0 16 16"
              >
                <path
                  d="M8.5 11.5a.5.5 0 0 1-1 0V7.707L6.354 8.854a.5.5 0 1 1-.708-.708l2-2a.5.5 0 0 1 .708 0l2 2a.5.5 0 0 1-.708.708L8.5 7.707z"
                />
                <path
                  d="M14 14V4.5L9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2M9.5 3A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h5.5z"
                />
              </svg>
              첨부 파일 1
              <input
                id="image-upload"
                type="file"
                multiple
                @change="handleFileChange"
              />
            </label>
            <div class="file-names">
              <p v-if="selectedFiles.values.length">
                선택된 파일:
                {{ selectedFiles.map((file) => file.name).join(', ') }}
              </p>
              <p v-else>선택된 파일 없음</p>
            </div>
            <img
              v-if="imagePreview"
              :src="imagePreview"
              alt="미리보기"
              width="200"
            /></div>

            <div class="file-upload-section">
            <label for="image-upload2" class="file-upload-label">
               <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                class="bi bi-file-earmark-arrow-up"
                viewBox="0 0 16 16"
              >
                <path
                  d="M8.5 11.5a.5.5 0 0 1-1 0V7.707L6.354 8.854a.5.5 0 1 1-.708-.708l2-2a.5.5 0 0 1 .708 0l2 2a.5.5 0 0 1-.708.708L8.5 7.707z"
                />
                <path
                  d="M14 14V4.5L9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2M9.5 3A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h5.5z"
                />
              </svg>
              첨부 파일 2
              <input
                id="image-upload2"
                type="file"
                multiple
                @change="handleFileChange2"
              />
              
            </label>
            <div class="file-names">
              <p v-if="selectedFiles2.values.length">
                선택된 파일:
                {{ selectedFiles2.map((file) => file.name).join(', ') }}
              </p>
              <p v-else>선택된 파일 없음</p>
            </div>
            <img
              v-if="imagePreview2"
              :src="imagePreview2"
              alt="미리보기"
              width="200"
            /></div>

            <div class="file-upload-section">
            <label for="image-upload3" class="file-upload-label">
               <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                class="bi bi-file-earmark-arrow-up"
                viewBox="0 0 16 16"
              >
                <path
                  d="M8.5 11.5a.5.5 0 0 1-1 0V7.707L6.354 8.854a.5.5 0 1 1-.708-.708l2-2a.5.5 0 0 1 .708 0l2 2a.5.5 0 0 1-.708.708L8.5 7.707z"
                />
                <path
                  d="M14 14V4.5L9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2M9.5 3A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h5.5z"
                />
              </svg>
              첨부 파일 3
              <input
                id="image-upload3"
                type="file"
                multiple
                @change="handleFileChange3"
              />
              
            </label>
            <div class="file-names">
              <p v-if="selectedFiles3.values.length">
                선택된 파일:
                {{ selectedFiles3.map((file) => file.name).join(', ') }}
              </p>
              <p v-else>선택된 파일 없음</p>
            </div>
            <img
              v-if="imagePreview3"
              :src="imagePreview3"
              alt="미리보기"
              width="200"
            /></div>

            <div class="file-upload-section">
            <label for="image-upload4" class="file-upload-label">
               <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                class="bi bi-file-earmark-arrow-up"
                viewBox="0 0 16 16"
              >
                <path
                  d="M8.5 11.5a.5.5 0 0 1-1 0V7.707L6.354 8.854a.5.5 0 1 1-.708-.708l2-2a.5.5 0 0 1 .708 0l2 2a.5.5 0 0 1-.708.708L8.5 7.707z"
                />
                <path
                  d="M14 14V4.5L9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2M9.5 3A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h5.5z"
                />
              </svg>
              첨부 파일 4
              <input
                id="image-upload4"
                type="file"
                multiple
                @change="handleFileChange4"
              />
              
            </label>
            <div class="file-names">
              <p v-if="selectedFiles4.values.length">
                선택된 파일:
                {{ selectedFiles4.map((file) => file.name).join(', ') }}
              </p>
              <p v-else>선택된 파일 없음</p>
            </div>
            <img
              v-if="imagePreview4"
              :src="imagePreview4"
              alt="미리보기4"
              width="200"
            /></div>

          </div>
        </div>
        <textarea
          v-model="content"
          placeholder="내용을 입력해주세요."
          class="textarea"
          required
        ></textarea>
        <div class="button-group">
          <button type="submit" class="cancel-button" @click="$router.go(-1)">
            취소
          </button>
          <button type="submit" class="write-button">
            {{ isEditing ? '수정' : '등록' }}
          </button>
        </div>
      </form>
    </div>
  </div>
  <!-- footer 영억 시작 하단 -->

  <!-- footer 영역 끝 -->

  <router-view />
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
const image2 = ref(null);
const imagePreview2 = ref(null);
const image3 = ref(null);
const imagePreview3 = ref(null);
const image4 = ref(null);
const imagePreview4 = ref(null);
const isEditing = ref(false);
const selectedFiles = ref([]);
const selectedFiles2 = ref([]);
const selectedFiles3 = ref([]);
const selectedFiles4 = ref([]);

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

const handleFileChange2 = (event) => {
  const files = event.target.files;
  selectedFiles2.value = Array.from(files);

  if (files.length > 0) {
    const file = files[0];
    image2.value = file;
    const reader = new FileReader();
    reader.onload = (e) => {
      imagePreview2.value = e.target.result;
    };
    reader.readAsDataURL(file);
  }
};
const handleFileChange3 = (event) => {
  const files = event.target.files;
  selectedFiles3.value = Array.from(files);

  if (files.length > 0) {
    const file = files[0];
    image3.value = file;
    const reader = new FileReader();
    reader.onload = (e) => {
      imagePreview3.value = e.target.result;
    };
    reader.readAsDataURL(file);
  }
};
const handleFileChange4 = (event) => {
  const files = event.target.files;
  selectedFiles4.value = Array.from(files);

  if (files.length > 0) {
    const file = files[0];
    image4.value = file;
    const reader = new FileReader();
    reader.onload = (e) => {
      imagePreview4.value = e.target.result;
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
  if (image2.value) {
    formData.append('image2', image2.value);
  }
  if (image3.value) {
    formData.append('image3', image3.value);
  }
  if (image4.value) {
    formData.append('image4', image4.value);
  }

  try {
    if (isEditing.value) {
      await axios.put(`/posts/${route.params.id}`, formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
    } else {
      await axios.post('/posts', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
    }
    router.push({ name: 'RecruitmentNotice' });
  } catch (error) {
    console.error(
      'Error submitting post:',
      error.response ? error.response.data : error.message
    );
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
<style scoped src="@/assets/style/writestyle/PrWrite.css"></style>
