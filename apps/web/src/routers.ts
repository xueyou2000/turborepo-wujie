import { createRouter, createWebHistory } from 'vue-router'

export const routerHistory = createWebHistory(import.meta.env.VITE_BASE_ROUTER)
export const router = createRouter({
  history: routerHistory,
  strict: true,
  routes: [
    { path: '/home', redirect: '/' },
    {
      path: '/',
      component: () => import(/* webpackChunkName: "home" */ './pages//home/home-index.vue')
    },
    { path: '/docs', redirect: '/docs/a' },
    {
      path: '/docs/:path',
      name: 'docs',
      component: () => import(/* webpackChunkName: "home" */ './pages/docs/docs-index.vue')
    }
  ]
})
