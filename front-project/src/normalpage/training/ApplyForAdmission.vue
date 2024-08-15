<template>
  <!-- 고정 페이지 최상단 영역 -->
  
        <!-- 헤더 영역 메뉴바 끝 -->
    <div class="application-container">
      <h1>지원신청</h1>
      <form @submit.prevent="submitForm" enctype="multipart/form-data">
        <table>
          <tr>
            <td>이름</td>
            <td><input type="text" v-model="form.name" required /></td>
          </tr>
          <tr>
            <td>이메일</td>
            <td><input type="email" v-model="form.email" required /></td>
          </tr>
          <tr>
            <td>휴대폰</td>
            <td><input type="tel" v-model="form.phone" required /></td>
          </tr>
          <tr>
            <td>개인정보동의</td>
            <td>
              <input type="checkbox" v-model="form.agree" required />
              <span>입력하신 내용은 지원 외에 다른 용도로 사용되지 않습니다.<br />개인정보 동의하시면 체크해주세요.</span>
            </td>
          </tr>
          <tr>
            <td>내용</td>
            <td><textarea v-model="form.content" required></textarea></td>
          </tr>
          <tr>
            <td>첨부파일1</td>
            <td>
              <input type="file" @change="handleFileChange($event, 'file1')" />
              <span v-if="form.file1">{{ form.file1.name }}</span>
              <span v-else>선택된 파일 없음 | 첨부파일1에 지원서를 첨부해주세요</span>
            </td>
          </tr>
          <tr>
            <td>첨부파일2</td>
            <td>
              <input type="file" @change="handleFileChange($event, 'file2')" />
              <span v-if="form.file2">{{ form.file2.name }}</span>
              <span v-else>선택된 파일 없음 | 첨부파일2에 개인정보 수집 이용 동의서를 첨부해주세요</span>
            </td>
          </tr>
        </table>
        <button type="submit">지원 신청하기</button>
      </form>
    </div>


  </template>
  
  <script>
import useFormHandler from '@/assets/script/twomenu/Apply.js';

export default {
  setup() {
    const { form, handleFileChange, submitForm } = useFormHandler();

    return {
      form,
      handleFileChange,
      submitForm,
    };
  }
};
</script>

<style scoped src="@/assets/style/secondmenu/Apply.css"></style>
  