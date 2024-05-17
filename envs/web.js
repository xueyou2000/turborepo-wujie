function base() {
  return {
    VITE_APP_TITLE: '管理平台',
    VITE_STORE_PREFIX: 'XY',
  }
}

module.exports = {
  dev: Object.assign(base(), {
    VITE_API_BASE_PATH: 'https://test-api.xueyou.com',
    // 是否删除console.log
    VITE_DROP_CONSOLE: 'false',
    // 是否删除debugger
    VITE_DROP_DEBUGGER: 'false',
    // 环境
    VITE_NODE_ENV: 'dev',
    // 输出路径
    VITE_OUT_DIR: 'dist-dev',
  }),
  prod: Object.assign(base(), {
    VITE_API_BASE_PATH: 'https://api.xueyou.com',
    // 是否删除console.log
    VITE_DROP_CONSOLE: 'true',
    // 是否删除debugger
    VITE_DROP_DEBUGGER: 'true',
    // 环境
    VITE_NODE_ENV: 'prod',
    // 输出路径
    VITE_OUT_DIR: 'dist-prod',
  }),
}