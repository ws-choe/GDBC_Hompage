import { ref, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import axios from 'axios';
import { useUserStore } from '@/store/SignUp';
import { storeToRefs } from 'pinia';

export function usePostEditor() {
  const route = useRoute();
  const router = useRouter();
  const userStore = useUserStore();
  const { isLoggedIn, id: userId } = storeToRefs(userStore);

  const title = ref('');
  const content = ref('');
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
      const response = await axios.get(`http://localhost:3000/qnaposts/${id}`);
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

    if (!title.value || !content.value || !userId.value) {
      console.error('Missing required fields: title, content, or userId');
      alert('제목, 내용, 또는 사용자 ID가 없습니다.');
      return;
    }

    const formData = new FormData();
    formData.append('title', title.value);
    formData.append('content', content.value);
    formData.append('userId', userId.value);
    if (image.value) {
      formData.append('image', image.value);
    }

    try {
      if (isEditing.value) {
        await axios.put(`http://localhost:3000/qnaposts/${route.params.id}`, formData, {
          headers: { 'Content-Type': 'multipart/form-data' }
        });
      } else {
        await axios.post('http://localhost:3000/qnaposts', formData, {
          headers: { 'Content-Type': 'multipart/form-data' }
        });
      }
      router.push({ name: 'CourseReviews' });
    } catch (error) {
      console.error('Error submitting post:', error.response ? error.response.data : error.message);
      alert('게시글 작성/수정 중 오류가 발생했습니다.');
    }
  };

  onMounted(() => {
    if (route.params.id) {
      isEditing.value = true;
      fetchPost(route.params.id);
    }
  });

  return {
    title,
    content,
    image,
    imagePreview,
    isEditing,
    handleFileChange,
    removeImage: () => (image.value = null),
    submitPost
  };
}
