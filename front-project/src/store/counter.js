import { defineStore } from "pinia";
import { computed, ref } from "vue";

export const useCounterStore = defineStore('counter', () => {
   const count = ref(0);
   const name = ref("조라야");
   const boom = ref("");
 

   const doubleCount = computed( () => count.value * 2)
   const one = computed( () => count.value % 2)

   function increment() {
      count.value++;
      boom.value = "";
   }
   
   function nu() {
      if (count.value > 0) {
        count.value--; // 이것만 넣어도 상관은 없지만 메시지 출력을 해야겠지???
        boom.value = ""; 
      } else {
        boom.value = "멈춰";
      }
    }
  

   function reset() {
      count.value = 0;
   }

   function changeName() {
      if (name.value === "조라야") {
        name.value = "이몸등장";
      } else {
        name.value = "조라야";
      }
    }

   return {
      count, name, doubleCount, increment, nu, one, changeName, reset, boom
}
});