import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

// 引入样式和公共js
// import '@styl/app'
import '@js/app'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
