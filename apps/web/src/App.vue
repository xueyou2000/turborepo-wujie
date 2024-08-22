<script setup lang="ts">
import WujieVue from 'wujie-vue3'
import { MiButton } from '@repo/components'

function destroyApp() {
  WujieVue.destroyApp('docs')
}
</script>

<template>
  <div>
    <div>
      main app:
      <ul>
        <li><router-link to="/">/</router-link></li>
        <li><router-link to="/docs">docs</router-link></li>
        <li @click="destroyApp">主动销毁(状态和缓存都清空，并且子应用重新加载)</li>
      </ul>
    </div>

    <MiButton>一个按钮</MiButton>

    <router-view />
  </div>
</template>
