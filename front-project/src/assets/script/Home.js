import { useRouter } from 'vue-router';
import { useUserStore } from '@/store/SignUp';

export default {
  setup() {
    const router = useRouter();
    const userStore = useUserStore();

    const handleLogoClick = () => {
      if (userStore.isUserLoggedIn) {
        router.push({ name: 'MainHome' });
      } else {
        router.push({ name: 'Home' });
      }
    };

    return {
      handleLogoClick
    };
  }
};