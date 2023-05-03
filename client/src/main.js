import { createApp } from 'vue'
import router from './router'
import PrimeVue from 'primevue/config';

import "toastify-js/src/toastify.css"
import "primevue/resources/themes/lara-light-indigo/theme.css";
import "primevue/resources/primevue.min.css";
import './assets/main.css'

import App from './App.vue'

const app = createApp(App)

app.use(router)

app.mount('#app')
