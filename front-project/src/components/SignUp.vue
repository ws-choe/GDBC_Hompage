<template>
  <!-- 고정 페이지 최상단 영역 -->
        <!-- 헤더 영역 메뉴바 끝 -->

    <router-view />
    <div>
      <div class="container">
        <hr>
        <br>
        <br>
    <h1>회원가입</h1>
    <form @submit.prevent="registerUser">
      <div>
        <label for="username">아이디:</label>
        <input type="text" id="username" :value="username" @input="updateUsername" required />
      </div>
      <div>
        <label for="password">비밀번호:</label>
        <input type="password" id="password" :value="password" @input="updatePassword" required />
      </div>
      <div>
        <label for="confirmPassword">비밀번호 확인:</label>
        <input type="password" id="confirmPassword" :value="confirmPassword" @input="updateConfirmPassword" required />
        <label id="qpassword" :style="{ color: qpasswordColor }">{{ qpasswordMessage }}</label>
      </div>
      <div>
        <label for="email">이메일:</label>
        <input type="email" id="email" :value="email" @input="updateEmail" required />
      </div>
      <div>
        <label for="address">주소:</label>
        <input type="text" id="address" :value="address" @input="updateAddress" required />
        <br>
        <button class="postcode-btn" @click="openPostcodePopup" type="button">우편번호 검색</button>
      </div>
      <div>
        <label for="detailedAddress">상세 주소:</label>
        <input type="text" id="detailedAddress" :value="detailedAddress" @input="updateDetailedAddress" required />
      </div>
      <div>
        <label for="phone">핸드폰 번호:</label>
        <input type="text" id="phone" :value="phone" @input="updatePhone" required />
      </div>
      <div>
        <label for="signup-method">가입경로:</label>
        <select id="signup-method" :value="signupMethod" @change="updateSignupMethod" required>
          <option value="">선택해주세요</option>
          <option value="기업추천">기업 추천</option>
          <option value="지인 추천">지인 추천</option>
          <option value="센터 소개">센터 소개</option>
          <option value="카페 홍보">카페 홍보</option>
        </select>
      </div>
      <button class="submit-btn" type="submit" :disabled="!isPasswordMatch">회원가입</button>
      <br>
      <br>
      <br>
    </form>
  </div>
  </div>
   
          <!-- footer 영억 시작 하단 -->
     
        <!-- footer 영역 끝 -->
     
  
   
</template>

<script src="@/assets/script/SignUp.js"></script>

<style src="@/assets/style/SignUp.css">

</style>