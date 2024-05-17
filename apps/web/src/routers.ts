import { createRouter, createWebHistory } from 'vue-router'

export const routerHistory = createWebHistory()
export const router = createRouter({
  history: routerHistory,
  strict: true,
  routes: [
    { path: '/home', redirect: '/' },
    {
      path: '/',
      component: () => import(/* webpackChunkName: "home" */ './pages/home/home-index.vue')
      // props: (route) => ({ query: route.query.q })
    },
    { path: '/docs', redirect: '/docs/a' },
    {
      path: '/docs/:path',
      name: 'docs',
      component: () => import(/* webpackChunkName: "home" */ './pages/docs/docs-index.vue')
    }
    // {
    //   path: '/:patchMatch(.*)*',
    //   name: 'NotFound',
    //   component: import(/* webpackChunkName: "home" */ './views/ErrorPages/NotFound.vue')
    // }
  ]
})
