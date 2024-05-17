<template>
  <h1>page b {{ count }}</h1>

  <button @click="count++">add count</button>
  <p>
    由于开启了同步路由sync, 所以哪怕有保活,
    由于路由切换了,状态还是重置了的。除非子应用的路由层面开启keep-alive
  </p>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const count = ref(0)
console.log('>>> page b')
</script>
