<script setup lang="ts">
function toMainAppHome() {
  window?.$wujie?.props?.push({ path: '/' })
}
</script>

<template>
  <div>
    <div>
      docs:
      <ul>
        <li><router-link to="/a">A</router-link></li>
        <li><router-link to="/b">B</router-link></li>
        <li><a @click="toMainAppHome">跳转主应用路由(调用主应用注入方法)</a></li>
      </ul>
    </div>

    <router-view v-slot="{ Component }">
      <keep-alive>
        <component :is="Component" />
      </keep-alive>
    </router-view>
  </div>
</template>
