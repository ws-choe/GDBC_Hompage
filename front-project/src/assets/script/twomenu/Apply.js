// src/components/FormHandler.js

import { ref } from 'vue';

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
    form.value[fileKey] = event.target.files[0];
  };

  const submitForm = () => {
    const formData = new FormData();
    formData.append('name', form.value.name);
    formData.append('email', form.value.email);
    formData.append('phone', form.value.phone);
    formData.append('agree', form.value.agree);
    formData.append('content', form.value.content);
    if (form.value.file1) formData.append('file1', form.value.file1);
    if (form.value.file2) formData.append('file2', form.value.file2);

    // Form submission logic here, for example, using axios to post data to a server
    // axios.post('/api/apply', formData).then(response => {
    //   console.log('Form submitted successfully:', response);
    // }).catch(error => {
    //   console.error('Error submitting form:', error);
    // });
    console.log('Form data:', formData);
  };

  return {
    form,
    handleFileChange,
    submitForm,
  };
}