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

<!-- 수정 삭제 -->
<div v-if="isAuthor" class="edit-delete-buttons">
      <button @click="editPost" class="edit-btn" style="background: none; border: none;"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil" viewBox="0 0 16 16">
        <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325"/>
      </svg> 수정</button>
      <button @click="deletePost" class="delete-btn" style="background: none; border: none;"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash3" viewBox="0 0 16 16">
<path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5M11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47M8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5"/>
</svg> 삭제</button>
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

      <div class="down" style="display: block; text-align: left; padding-left: 0;">

  <div v-if="post.imagePath" style="margin-bottom: 10px; text-align: left;">
    <template v-if="isImage(post.imagePath)">
    </template>
    <template v-else>
      <div style="display: flex; align-items: center; margin-top: 5px; text-align: left;">
        <p style="margin: 0; margin-right: 10px;">첨부 문서: {{ getFileName(post.imagePath) }}</p>
        <a
          :href="`/uploads/${post.imagePath}`"
          target="_blank"
          class="btn btn-secondary"
          style="display: inline-block;"
        >다운로드</a>
      </div>
    </template>
  </div>
</div>
<div class="post-line"></div>


      <div v-if="post.imagePath">
        <template v-if="isImage(post.imagePath)">
          <img
            class="post-image"
            :src="`/uploads/${post.imagePath}`"
            alt="게시물 이미지"
          />
        </template>
        <template v-else>
        </template>
      </div>




    <div class="content-box">
      <p style="margin: 0;">{{ post.content }}</p>
    </div>
    <div class="comment-input-container">
    <div class="textarea-wrapper">
      <textarea v-model="comment" placeholder="내용을 입력하세요." rows="4"></textarea>
      <button @click="submitComment" class="btn-inside-textarea"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil" viewBox="0 0 16 16">
        <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325"/>
      </svg> 댓글달기</button>
    </div>
  </div>

  <div class="comments">
    <div v-for="comment in comments.slice().reverse()" :key="comment.id" class="comment-item">
      <div class="comment-info">
        <p class="comment-username">{{ comment.author.username }}</p>
        <p class="comment-date">{{ formatDate(comment.createdAt) }}</p>
        <button
          v-if="comment.authorId === userStore.id"
          @click="deleteComment(comment.id)"
          class="comment-delete-btn">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-circle" viewBox="0 0 16 16">
            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
            <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"/>
          </svg>
        </button>
      
       
      </div>
      <p class="comment-content">{{ comment.content }}</p>
    </div>
  </div>

    <div class="button-group">
    <button type="submit" class="list-button" @click="$router.go(-1)">목록</button>
  </div>
  </div>
  </div>



</template>

<script setup>
import { ref, onMounted, computed } from "vue";
import axios from "axios";
import { useRoute, useRouter } from "vue-router";
import { useUserStore } from "@/store/SignUp";
import { storeToRefs } from "pinia";

const route = useRoute();
const router = useRouter();
const userStore = useUserStore();
const { isLoggedIn, id: userId } = storeToRefs(userStore);

const post = ref({
title: "",
content: "",
id: 0,
userId: 0,
imagePath: "", // 이미지 파일명 추가
imagePath2:"",
imagePath3:"",
imagePath4:""
});
const comments = ref([]);
const comment = ref("");
const isAuthor = computed(() => isLoggedIn.value && post.value.userId === userId.value);

// 이미지 파일인지 확인하는 함수
const isImage = (filename) => {
  const extension = filename.split('.').pop().toLowerCase();
  return ['jpg', 'jpeg', 'png', 'gif', 'jfif'].includes(extension);
};

// 파일 이름만 추출하는 함수
const getFileName = (filename) => {
  return filename.split('/').pop();
};

const fetchPostDetails = async () => {
try {
  await axios.put(`/posts/${route.params.id}/view`);
const response = await axios.get(`/posts/${route.params.id}`);
post.value = response.data;
console.log("Post Data:", post.value); // 응답 데이터 확인

const commentsResponse = await axios.get(
  `/posts/${route.params.id}/comments`
);
console.log("Comments Data:", commentsResponse.data);
comments.value = commentsResponse.data;
} catch (error) {
console.error("Error fetching post details:", error);
}
};

const editPost = () => {
router.push({ name: "ModPrRecruitmentNotice", params: { id: route.params.id } });
};

const back = () => {
router.push({ name: "RecruitmentNotice" });
};

const deletePost = async () => {
if (!confirm("정말로 이 게시글을 삭제하시겠습니까?")) return;

try {
await axios.delete(`/posts/${post.value.id}`);
router.push({ name: "RecruitmentNotice" }); // 게시글 목록 페이지로 이동
} catch (error) {
console.error("Error deleting post:", error);
alert("게시글 삭제 중 오류가 발생했습니다.");
}
};

const submitComment = async () => {
if (!comment.value.trim()) {
alert("댓글 내용을 입력해 주세요.");
return;
}

try {
await axios.post(`/posts/${post.value.id}/comments`, {
  content: comment.value,
  authorId: userId.value, // 로그인한 사용자 ID
});
comment.value = ""; // 댓글 입력 필드 초기화
fetchPostDetails(); // 댓글 리스트 갱신
} catch (error) {
console.error("Error submitting comment:", error);
alert("댓글 작성 중 오류가 발생했습니다.");
}
};

const deleteComment = async (commentId) => {
  try {
    await axios.delete(`/posts/${post.value.id}/comments/${commentId}`);
    fetchPostDetails(); // 댓글 리스트 갱신
  } catch (error) {
    console.error('Error deleting comment:', error);
    alert('댓글 삭제 중 오류가 발생했습니다.');
  }
};

//다운로드 이벤트 추가 최원석
const downloadImage = (filename) => {
  const url = `/posts/download/${filename}`;
  window.open(url, '_blank'); // 새 탭에서 다운로드
};

const formatDate = (dateString) => {
const date = new Date(dateString);
return date.toLocaleDateString() + " " + date.toLocaleTimeString();
};

const logout = () => {
userStore.isLoggedIn = false;
userStore.isAdmin = false;
router.push({ name: "Home" });
};

// 초기 데이터 로드
onMounted(() => {
fetchPostDetails();
});
</script>

<style scoped src="@/assets/style/detailstyle/Detail.css"></style>