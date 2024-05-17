<script setup lang="ts">
import WujieVue from 'wujie-vue3'

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
    <router-view />
  </div>
</template>
