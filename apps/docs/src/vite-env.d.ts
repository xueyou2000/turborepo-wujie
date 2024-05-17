/// <reference types="vite/client" />

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
    // 子应用无界
    $wujie: any
  }
}

interface Window {
  // 是否存在无界
  __POWERED_BY_WUJIE__?: boolean
  // 子应用mount函数
  __WUJIE_MOUNT: () => void
  // 子应用unmount函数
  __WUJIE_UNMOUNT: () => void
  // 子应用无界实例
  __WUJIE: { mount: () => void }
  // 子应用无界
  $wujie: any
}
