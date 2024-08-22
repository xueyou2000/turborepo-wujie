<template>
  <h1>page a</h1>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'

onMounted(() => {
  console.log(window.$wujie?.location?.host, window.location.host)
})
</script>
