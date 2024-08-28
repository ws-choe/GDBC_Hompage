import { ref, computed, onMounted } from 'vue';
import axios from 'axios';
import { useRoute, useRouter } from 'vue-router';
import { useUserStore } from '@/store/SignUp';
import { storeToRefs } from 'pinia';

export const useRecruitmentNoticeDetail = () => {
  const route = useRoute();
  const router = useRouter();
  const userStore = useUserStore();
  const { isLoggedIn, id: userId } = storeToRefs(userStore);

  const post = ref({
    title: '',
    content: '',
    id: 0,
    userId: 0,
    image: ''  // 이미지 파일명 추가
  });
  const comments = ref([]);
  const comment = ref('');
  const isAuthor = computed(() => isLoggedIn.value && post.value.userId === userId.value);

  const fetchPostDetails = async () => {
    try {
      const response = await axios.get(`/posts/${route.params.id}`);
      post.value = response.data;
      console.log('Post Data:', post.value); // 응답 데이터 확인

      const commentsResponse = await axios.get(`/posts/${route.params.id}/comments`);
      console.log('Comments Data:', commentsResponse.data);
      comments.value = commentsResponse.data;
    } catch (error) {
      console.error('Error fetching post details:', error);
    }
  };

  const editPost = () => {
    router.push({ name: 'ModPrRecruitmentNotice', params: { id: route.params.id } });
  };

  const deletePost = async () => {
    if (!confirm('정말로 이 게시글을 삭제하시겠습니까?')) return;

    try {
      await axios.delete(`http://localhost:3000/posts/${post.value.id}`);
      router.push({ name: 'RecruitmentNotice' }); // 게시글 목록 페이지로 이동
    } catch (error) {
      console.error('Error deleting post:', error);
      alert('게시글 삭제 중 오류가 발생했습니다.');
    }
  };

  const submitComment = async () => {
    if (!comment.value.trim()) {
      alert('댓글 내용을 입력해 주세요.');
      return;
    }

    try {
      await axios.post(`http://localhost:3000/posts/${post.value.id}/comments`, {
        content: comment.value,
        authorId: userId.value  // 로그인한 사용자 ID
      });
      comment.value = ''; // 댓글 입력 필드 초기화
      fetchPostDetails(); // 댓글 리스트 갱신
    } catch (error) {
      console.error('Error submitting comment:', error);
      alert('댓글 작성 중 오류가 발생했습니다.');
    }
  };

  const deleteComment = async (commentId) => {
    try {
      await axios.delete(`http://localhost:3000/comments/${commentId}`);
      fetchPostDetails(); // 댓글 리스트 갱신
    } catch (error) {
      console.error('Error deleting comment:', error);
      alert('댓글 삭제 중 오류가 발생했습니다.');
    }
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString() + ' ' + date.toLocaleTimeString();
  };

  const logout = () => {
    userStore.isLoggedIn = false;
    userStore.isAdmin = false;
    router.push({ name: 'Home' });
  };

  // 초기 데이터 로드
  onMounted(() => {
    fetchPostDetails();
  });

  return {
    post,
    comments,
    comment,
    isAuthor,
    editPost,
    deletePost,
    submitComment,
    deleteComment,
    formatDate,
    logout
  };
};
