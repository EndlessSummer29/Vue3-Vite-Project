import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
// Axios
import api from './api'

const app = createApp(App)

app.provide('$axios', api)
app.use(createPinia())
app.use(router)

app.mount('#app')
