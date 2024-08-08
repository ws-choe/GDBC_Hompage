// main.js
import { createApp } from 'vue';
import App from './App.vue';
import { createPinia } from 'pinia';
import piniaPersist from 'pinia-plugin-persist';
import router from './router';

import 'bootstrap/dist/css/bootstrap.min.css';

const app = createApp(App);
const pinia = createPinia();
pinia.use(piniaPersist);

app.use(pinia);
app.use(router);
app.mount('#app');
