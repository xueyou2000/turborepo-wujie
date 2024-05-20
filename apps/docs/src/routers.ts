import { createRouter, createWebHistory } from 'vue-router'

console.log('>>> import.meta.env', import.meta.env)
console.log('>>> import.meta.env.VITE_APP_TITLE', import.meta.env.VITE_APP_TITLE)
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
    // {
    //   path: '/:patchMatch(.*)*',
    //   name: 'NotFound',
    //   component: import(/* webpackChunkName: "home" */ './views/ErrorPages/NotFound.vue')
    // }
  ]
})
