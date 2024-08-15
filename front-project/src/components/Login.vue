<template>
 
      <div class="main-content"></div>
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
        <button style="width: 100px; height: 50px; border-radius: 5px; background-color: #eeee;" type="submit">로그인</button>
        <router-link to="/user/reset-password" style="text-decoration: none">
          <button
            style="
              width: 150px;
              height: 50px;
              border-radius: 5px;
              background-color: #eeee;
            "
            type="button"
          >
            비밀번호 찾기
          </button>
        </router-link>
      </form>
        </div>
     
      </div>
      
   
     
      <router-view />


 
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

<style src="@/assets/style/Login.css">

</style>