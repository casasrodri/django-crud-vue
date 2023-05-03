import { createApp } from 'vue'
import router from './router'

import './assets/main.css'

import App from './App.vue'

console.log(router);
const app = createApp(App)

app.use(router)

app.mount('#app')
