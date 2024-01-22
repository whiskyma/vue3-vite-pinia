import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import { registerSW } from 'virtual:pwa-register'
const updateSW = registerSW({
  onNeedRefresh() {
    console.log(1)
  },
  onOfflineReady() {
    console.log(2)
  }
})
updateSW()

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
