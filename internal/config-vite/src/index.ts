import { defineConfig, loadEnv } from 'vite'
import Vue from '@vitejs/plugin-vue'
import eslintPlugin from 'vite-plugin-eslint'
import TurboConsole from 'unplugin-turbo-console/vite'
import { autoComplete, Plugin as importToCDN } from 'vite-plugin-cdn-import'
import { resolve } from 'node:path'

function getProductionPlugins() {
  return [
    importToCDN({
      modules: [
        // autoComplete('vue'),
        {
          name: 'vue',
          var: 'Vue',
          path: 'https://s4.zstatic.net/npm/vue@3.4.27/dist/vue.global.prod.js'
        },
        {
          name: 'vue-router',
          var: 'VueRouter',
          path: 'https://s4.zstatic.net/npm/vue-router@4.2.4/dist/vue-router.global.prod.js'
          // path: 'https://unpkg.com/vue-router@4.2.4/dist/vue-router.global.prod.js'
        },
        // {
        //   name: 'vue-demi',
        //   var: 'VueDemi',
        //   path: 'https://cdn.bootcdn.net/ajax/libs/vue-demi/0.14.5/index.iife.js'
        // },
        // {
        //   name: 'pinia',
        //   var: 'Pinia',
        //   path: 'https://cdn.bootcdn.net/ajax/libs/pinia/2.1.6/pinia.iife.prod.min.js'
        // }
      ]
    }),
  ]
}

export const useApplicationConfig = defineConfig(({ mode }) => {
  const root = process.cwd()
  const pathResolve = (pathname: string) => resolve(root, '.', pathname)

  const env = loadEnv(mode, root)
  const isPro = mode === 'production'
  console.log('>>> env', env)

  return {
    base: '/',
    build: {
      cssCodeSplit: !(env.VITE_USE_CSS_SPLIT === 'false'),
      outDir: env.VITE_OUT_DIR || 'dist',
      sourcemap: env.VITE_SOURCEMAP === 'true',
      target: 'es2015'
    },
    esbuild: {
      drop: env.VITE_DROP_DEBUGGER === 'true' ? ['debugger'] : undefined,
      pure: env.VITE_DROP_CONSOLE === 'true' ? ['console.log'] : undefined
    },
    plugins: [
      Vue({
        script: {
          // 响应性 props 解构
          // https://github.com/vuejs/rfcs/discussions/502
          propsDestructure: true
        }
      }),
      eslintPlugin({
        include: ['packages/**/*.ts', 'packages/**/*.vue', 'apps/**/*.ts', 'apps/**/*.vue']
      }),
      TurboConsole({}),
      ...(isPro ? getProductionPlugins() : [])
    ],
    resolve: {
      alias: {
        '@': pathResolve('src')
      },
      extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json', '.less', '.css']
    },
    server: {
      // 允许跨域
      cors: true,
      // 监听所有地址
      host: true,
      // 服务启动时是否自动打开浏览器
      open: true,
      // 自定义代理规则
      proxy: {
        '/api': {
          changeOrigin: true,
          rewrite: (path: string) => path.replace(/^\/api/, ''),
          target: env.VITE_API_BASE_PATH
        }
      },
      // 预热文件以提前转换和缓存结果，降低启动期间的初始页面加载时长并防止转换瀑布
      warmup: {
        clientFiles: ['index.html', 'src/{pages,components}/*']
      }
    }
  }
})
