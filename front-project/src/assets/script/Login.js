import { useUserStore } from '@/store/SignUp';
import { useRouter } from 'vue-router';
import { computed } from 'vue';

export default function useLogin() {  // 이 부분 확인
  const router = useRouter();
  const userStore = useUserStore();

  const username = computed(() => userStore.username);
  const password = computed(() => userStore.password);
  const token = computed(() => userStore.token);

  const loginUser = () => {
    userStore.login((success) => {
      if (success) {
        router.push('/MainHome');
      } else {
        alert('로그인 정보가 일치하지 않습니다. 재확인 하시고 시도해 주세요.');
      }
    });
  };

  const updateUsername = (event) => {
    userStore.setUsername(event.target.value);
  };
  const updatePassword = (event) => {
    userStore.setPassword(event.target.value);
  };
  const updateToken = (event) => {
    userStore.setToken(event.target.value);
  };

  const handleLogoClick = () => {
    if (userStore.checkLogin()) {
      router.push({ name: 'MainHome' });
    } else {
      router.push({ name: 'Home' });
    }
  };

  return {
    username,
    password,
    token,
    loginUser,
    updateUsername,
    updatePassword,
    updateToken,
    handleLogoClick,
  };
}