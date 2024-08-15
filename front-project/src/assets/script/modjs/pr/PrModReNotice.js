// src/scripts/editPostLogic.js
import { ref, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import axios from 'axios';

export function useEditPostLogic() {
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
      const response = await axios.get(`http://localhost:3000/posts/${id}`);
      post.value = response.data;
    } catch (error) {
      console.error('게시물 불러오기 오류:', error);
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
      await axios.put(`http://localhost:3000/posts/${route.params.id}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      alert('게시물이 수정되었습니다.');
      router.push({ name: 'RecruitmentNotice1', params: { id: route.params.id } });
    } catch (error) {
      console.error('게시물 수정 오류:', error);
    }
  };
  
  onMounted(() => {
    if (route.params.id) {
      fetchPost(route.params.id);
    }
  });
  
  return {
    post,
    selectedImage,
    handleImageChange,
    removeImage,
    handleSubmit
  };
}
