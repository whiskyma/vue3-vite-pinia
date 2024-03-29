import { createRouter, createWebHashHistory, type RouteRecordRaw } from 'vue-router'
import { setDocTitle } from '@js/com'

const routes: Array<RouteRecordRaw> = [
  { path: '/', name: '首页', component: () => import('@views/home/home.vue') },
  { path: '/about', name: '关于', component: () => import('@views/about/about.vue') },
  { path: '/help', name: '帮助', component: () => import('@views/help/help.vue') },
  { path: '/center', name: '个人中心', component: () => import('@views/center/center.vue') },
  { path: '/404', name: '404', component: () => import('@views/404/404.vue') },
]
const router = createRouter({
  // createWebHistory 地址栏不带#号
  history: createWebHashHistory(),
  routes: routes,
  linkActiveClass: 'active',
  linkExactActiveClass: 'active',
})
// 路由守卫
router.beforeEach((to, from, next) => {
  // 将页面滚动至顶部位置
  window.scrollTo(0, 0)
  if (!to.matched.length) {
    next('/404')
  } else {
    next()
  }
  if (to.name) setDocTitle(to.name.toString())
})
export default router
