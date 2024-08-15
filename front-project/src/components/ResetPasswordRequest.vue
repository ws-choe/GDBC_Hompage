<template>
  <div class="container my-5">
    <h3 class="text-center">비밀번호 재설정하기</h3>
    <form @submit.prevent="resetPassword" class="mt-4">
      <div class="form-group">
        <label for="email">이메일 주소를 입력하십시오.</label>
        <input
          type="email"
          id="email"
          v-model="email"
          class="form-control"
          required
        />
      </div>
      <button type="submit" class="btn btn-primary btn-block">
        이메일 발송하기
      </button>
    </form>
    <p v-if="message" class="mt-3 alert alert-info">{{ message }}</p>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'ResetPasswordRequest',
  data() {
    return {
      email: '',
      message: '',
    };
  },
  methods: {
    async resetPassword() {
      try {
        const response = await axios.post('/user/reset-password', {
          email: this.email,
        });
        this.message = '발송 완료.';
      } catch (error) {
        this.message =
          error.response.data.message ||
          '오류가 발생했습니다. 다시 시도해 주세요.';
      }
    },
  },
};
</script>

<style scoped>
/* 필요에 따라 스타일 추가 */
</style>
