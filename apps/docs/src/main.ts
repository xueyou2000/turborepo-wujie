import { createApp } from 'vue'
import { router } from './routers'
import App from './App.vue'

function setup() {
  const app = createApp(App)
  app.use(router).mount('#app')
  return app
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
