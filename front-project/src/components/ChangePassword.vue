<template>
  <div class="container my-5">
    <h3 class="text-center">패스워드 변경</h3>
    <form @submit.prevent="changePassword" class="mt-4">
      <div class="form-group">
        <label for="newPassword">변경할 패스워드를 입력하십시오.</label>
        <input
          type="password"
          id="newPassword"
          v-model="newPassword"
          class="form-control"
          required
        />
      </div>
      <button type="submit" class="btn btn-primary btn-block">변경하기</button>
    </form>
    <p v-if="message" class="mt-3 alert alert-info">{{ message }}</p>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'ChangePassword',
  data() {
    return {
      token: this.$route.query.token,
      newPassword: '',
      message: '',
    };
  },
  methods: {
    async changePassword() {
      try {
        const response = await axios.post(
          'http://localhost:80/user/change-password',
          {
            token: this.token,
            newPassword: this.newPassword,
          }
        );
        this.message = response.data.message || '패스워드 변경 완료.';
        if (response.data.redirect) {
          setTimeout(() => {
            this.$router.push(response.data.redirect);
          }, 2000);
        }
      } catch (error) {
        this.message =
          error.response.data.message ||
          '오류가 발생했습니다. 다시 시도해 주세요.';
      }
    },
  },
};
</script>
