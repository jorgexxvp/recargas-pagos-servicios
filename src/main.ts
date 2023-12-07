import { createApp } from 'vue'
import './assets/style.css'
import App from './App.vue'
import '@fontsource-variable/inter';
import { router } from './router';
import { createPinia } from 'pinia';

const pinia = createPinia()

createApp(App)
  .use(pinia)
  .use(router)
  .mount('#app')

  