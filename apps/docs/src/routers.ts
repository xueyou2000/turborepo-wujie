import { createRouter, createWebHistory } from 'vue-router'

export const routerHistory = createWebHistory(import.meta.env.VITE_BASE_ROUTER)
export const router = createRouter({
  history: routerHistory,
  strict: true,
  routes: [
    { path: '/a', redirect: '/' },
    {
      path: '/',
      component: () => import(/* webpackChunkName: "home" */ './pages/page-a/page-a.vue')
    },
    {
      path: '/b',
      component: () => import(/* webpackChunkName: "home" */ './pages/page-b/page-b.vue'),
      meta: { keepAlive: true }
    }
  ]
})
