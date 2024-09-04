import { useUserStore } from '@/store/SignUp';
import { useRouter } from 'vue-router';
import { computed } from 'vue';

export default {
  name: 'SignUp',
  setup() {
    const router = useRouter();
    const userStore = useUserStore();

    const username = computed(() => userStore.username);
    const password = computed(() => userStore.password);
    const confirmPassword = computed(() => userStore.confirmPassword);
    const email = computed(() => userStore.email);
    const address = computed(() => userStore.address);
    const detailedAddress = computed(() => userStore.detailedAddress);
    const phone = computed(() => userStore.phone);
    const signupMethod = computed(() => userStore.signupMethod);
    const qpasswordMessage = computed(() => {
  if (password.value === confirmPassword.value && password.value !== '') {
    return '비밀번호가 일치합니다';
  } else {
    return '비밀번호가 일치하지 않습니다';
  }
});

const qpasswordColor = computed(() => {
  return password.value === confirmPassword.value && password.value !== '' ? 'blue' : 'red';
});

    const isPasswordMatch = computed(() => password.value === confirmPassword.value && password.value !== '');

    const registerUser = () => {
      if (password.value !== confirmPassword.value) {
        alert('비밀번호가 일치하지 않습니다.');
        return;
      }
      userStore.register(() => {
        router.push('/login');
      });
    };

    const updateUsername = (event) => {
      userStore.setUsername(event.target.value);
    };
    const updatePassword = (event) => {
      userStore.setPassword(event.target.value);
    };
    const updateConfirmPassword = (event) => {
      userStore.setConfirmPassword(event.target.value);
    };
    const updateEmail = (event) => {
      userStore.setEmail(event.target.value);
    };
    const updateAddress = (event) => {
      userStore.setAddress(event.target.value);
    };
    const updateDetailedAddress = (event) => {
      userStore.setDetailedAddress(event.target.value);
    };
    const updatePhone = (event) => {
      userStore.setPhone(event.target.value);
    };
    const updateSignupMethod = (event) => {
      userStore.setSignupMethod(event.target.value);
    };
    const handleLogoClick = () => {
      if (userStore.checkLogin()) {
        router.push({ name: 'MainHome' });
      } else {
        router.push({ name: 'Home' });
      }
    };

    const openPostcodePopup = () => {
      new daum.Postcode({
        oncomplete: (data) => {
          userStore.setAddress(data.address);
        }
      }).open();
    };
    

    return {
      username,
      password,
      confirmPassword,
      email,
      address,
      detailedAddress,
      phone,
      signupMethod,
      qpasswordMessage,
      isPasswordMatch,
      registerUser,
      updateUsername,
      updatePassword,
      updateConfirmPassword,
      updateEmail,
      updateAddress,
      updateDetailedAddress,
      updatePhone,
      updateSignupMethod,
      openPostcodePopup,
      qpasswordColor,
      handleLogoClick
    };
  },
};