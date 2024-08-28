<template>
 
  <div class="main-content">
  <router-view />
  <div class="justify-content-center text-center">
    <br>
    <br>
    <h1 class="fw-bold">로그인</h1>
    <br>
    <div>
      <form @submit.prevent="loginUser">
    <div>
      <label for="username">아이디</label>
      <input type="text" id="username" :value="username" @input="updateUsername" required />
    </div>
    <div>
      <label for="password">비밀번호</label>
      <input type="password" id="password" :value="password" @input="updatePassword" required />
    </div>
    <!-- <div>
      <label for="token">토큰</label>
      <input type="text" id="token" :value="token" @input="updateToken" required />
    </div> -->
    <button class="login-btn" type="submit">로그인</button>
    <router-link to="/user/reset-password" style="text-decoration: none">
      <button class="password-btn" type="button" >비밀번호 찾기</button>
    </router-link>
  </form>
    </div>
 
  </div>
  

 
  <router-view />
</div>



</template>

<script>
import useLogin from '../assets/script/Login';

export default {
name: 'Login',
setup() {
return useLogin();
},
};
</script>

<style scoped src="@/assets/style/Login.css">

</style>