import { createApp } from 'vue'
import { router } from './routers'
import App from './App.vue'

function setup() {
  const app = createApp(App)
  app.use(router).mount('#app')
  return app
}
declare global {
  interface Window {
    // 是否存在无界
    __POWERED_BY_WUJIE__?: boolean
    // 子应用mount函数
    __WUJIE_MOUNT: () => void
    // 子应用unmount函数
    __WUJIE_UNMOUNT: () => void
    // 子应用无界实例
    __WUJIE: { mount: () => void }
  }
}

if (window.__POWERED_BY_WUJIE__) {
  let instance: ReturnType<typeof setup>
  window.__WUJIE_MOUNT = () => {
    console.log('>>> 子应用挂载')
    instance = setup()
  }
  window.__WUJIE_UNMOUNT = () => {
    console.log('>>> 子应用装卸')
    instance?.unmount()
  }
  console.log('>>>', window?.$wujie)
  window.__WUJIE.mount()
} else {
  setup()
}
