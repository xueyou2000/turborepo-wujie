<template>
  <h1>page a</h1>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
// console.log(window.$wujie.location.host, window.location.host)

onMounted(() => {
  console.log(window.$wujie?.location?.host, window.location.host)
})
</script>
