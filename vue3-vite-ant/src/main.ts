// 引入样式和公共js
import 'uno.css' //引入uno.css库
import '@style/common'
import '@js/app'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
