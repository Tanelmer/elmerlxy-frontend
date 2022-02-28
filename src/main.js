import { createApp } from 'vue'
import App from './App.vue'
import { createWebHistory } from 'vue-router'
import createRouter from './router.js'

const router = createRouter(createWebHistory())
const app = createApp(App)
app.use(router)
app.mount('#app')
