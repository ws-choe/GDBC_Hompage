// src/components/FormHandler.js

import { ref } from 'vue';
import axios from 'axios';

export default function useFormHandler() {
  const form = ref({
    name: '',
    email: '',
    phone: '',
    agree: false,
    content: '',
    file1: null,
    file2: null,
  });

  const handleFileChange = (event, fileKey) => {
    const file = event.target.files[0];
    if (file) {
      form.value[fileKey] = file; // 파일을 form에 저장
    }
  };

  const submitForm = async () => {
    const formData = new FormData();
    formData.append('name', form.value.name);
    formData.append('email', form.value.email);
    formData.append('phone', form.value.phone);
    formData.append('agree', form.value.agree);
    formData.append('content', form.value.content);
    if (form.value.file1) {
      formData.append('file1', form.value.file1);
    }
    if (form.value.file2) {
      formData.append('file2', form.value.file2);
    }

    try {
      const response = await axios.post('/apply', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log('Submission successful:', response.data);
      alert('신청서 접수 되었습니다.');
      window.location.href = 'http://gdbc.mirae.network/'; //배포시 실제 주소로 변경
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return {
    form,
    handleFileChange,
    submitForm,
  };
}
