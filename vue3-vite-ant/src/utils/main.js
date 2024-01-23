import { registerSW } from 'virtual:pwa-register'
import router from '@router/index'
// registerSW---WPA全局注册事件
const updateSW = registerSW({
  onNeedRefresh() {
    console.log(1)
  },
  onOfflineReady() {
    console.log(2)
  },
})
updateSW()

// 添加全局的404页面处理逻辑
router.beforeEach((to, from, next) => {
  if (!to.matched.length) {
    next('/404')
  } else {
    next()
  }
})
