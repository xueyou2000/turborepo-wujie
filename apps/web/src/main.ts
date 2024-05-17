import { createApp } from 'vue'
import WujieVue from 'wujie-vue3'
import { router } from './routers'
import App from './App.vue'

const { setupApp, preloadApp, bus } = WujieVue

const degrade =
  window.localStorage.getItem('degrade') === 'true' ||
  !window.Proxy ||
  !window.CustomElementRegistry
const props = {
  push: router.push
}

setupApp({
  alive: true, // true 为保活模式, 类似 keep-alive
  // attrs,
  degrade,
  exec: true, // 预执行, 提高子应用打开速度
  // fetch: credentialsFetch,
  name: 'docs', // 子应用唯一
  sync: true,
  props,
  url: '//localhost:3000/'
})
// preloadApp({ name: 'docs', url: '//localhost:3000/' })

createApp(App).use(WujieVue).use(router).mount('#app')
