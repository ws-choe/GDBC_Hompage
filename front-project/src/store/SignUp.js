import axios from 'axios';
import { defineStore } from 'pinia';

export const useUserStore = defineStore('user', {
  state: () => ({
    username: '',
    password: '',
    confirmPassword: '',
    email: '',
    address: '',
    detailedAddress: '',
    phone: '',
    signupMethod: '',
    isLoggedIn: false,
    isAdmin: false,
    id: null, // 추가된 id 필드
    token: '', // 추가된 토큰 필드
  }),
  actions: {
    setUsername(username) {
      this.username = username;
    },
    setPassword(password) {
      this.password = password;
    },
    setConfirmPassword(confirmPassword) {
      this.confirmPassword = confirmPassword;
    },
    setEmail(email) {
      this.email = email;
    },
    setAddress(address) {
      this.address = address;
    },
    setDetailedAddress(detailedAddress) {
      this.detailedAddress = detailedAddress;
    },
    setPhone(phone) {
      this.phone = phone;
    },
    setSignupMethod(signupMethod) {
      this.signupMethod = signupMethod;
    },
    setToken(token) {
      this.token = token;
    },
    async register(callback) {
      try {
        const payload = {
          username: this.username,
          password: this.password,
          email: this.email,
          address: this.address,
          detailedAddress: this.detailedAddress,
          phone: this.phone,
          signupMethod: this.signupMethod,
        };

        const response = await axios.post('/user/register', payload);

        if (response.data.message) {
          console.log('User registered successfully');
          // Optionally handle response token if needed
          if (callback) callback();
        } else {
          console.error('Registration failed');
        }
      } catch (error) {
        console.error('Error registering user:', error);
      }
    },

    getters: {
      isUserLoggedIn: (state) => state.isLoggedIn
    },
    
    async login(callback) {
      try {
        const payload = {
          username: this.username,
          password: this.password,
          token: this.token, // Add token field here
        };
    
        const response = await axios.post('/user/login', payload);
    
        // 응답이 JSON 형식이 아닌 경우를 대비해 처리
        if (!response.headers['content-type'].includes('application/json')) {
          console.error('서버 응답 형식이 JSON이 아닙니다.');
          throw new Error('Invalid response format');
        }
    
        if (response.data.token) {
          console.log('User logged in successfully');
          this.isLoggedIn = true;
          this.isAdmin = response.data.grade === 1;
          this.id = response.data.id; // 로그인 후 ID 설정
          this.token = response.data.token; // Save the token
          sessionStorage.setItem('user', JSON.stringify({
            username: this.username,
            isLoggedIn: this.isLoggedIn,
            isAdmin: this.isAdmin,
            id: this.id,
            token: this.token, // Save token in session storage
          }));
          if (callback) callback(true);
        } else {
          console.error('Login failed');
          this.isLoggedIn = false;
          this.token = ''; // Clear token on failed login
          if (callback) callback(false);
        }
      } catch (error) {
        console.error('Error logging in user:', error);
        this.isLoggedIn = false;
        this.token = ''; // Clear token on error
        if (callback) callback(false);
      }
    },
    
    logout() {
      this.username = '';
      this.password = '';
      this.isLoggedIn = false;
      this.isAdmin = false;
      this.id = null; // 로그아웃 시 ID도 초기화
      this.token = ''; // Clear token on logout
      this.$reset();
      sessionStorage.removeItem('user'); // Remove user data from session storage
    },
    loadUserFromSession() {
      const storedUser = sessionStorage.getItem('user');
      if (storedUser) {
        const userData = JSON.parse(storedUser);
        this.username = userData.username;
        this.isAdmin = userData.isAdmin;
        this.isLoggedIn = userData.isLoggedIn;
        this.id = userData.id; // 세션에서 ID 로드
        this.token = userData.token; // Load token from session storage
      }
    }
  },
  persist: {
    enabled: true,
    strategies: [
      {
        key: 'user',
        storage: sessionStorage,
      },
    ],
  },
});

