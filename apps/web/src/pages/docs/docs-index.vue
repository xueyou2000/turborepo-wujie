<script setup lang="ts">
import WujieVue from 'wujie-vue3'
import { useRoute } from 'vue-router'
import { computed } from 'vue'
import { MicroApps } from '../../constants'

const route = useRoute()
const docsUrl = computed(() => `${MicroApps.docs}/${route.params.path}`)

// watch(
//   () => route.params.path,
//   (path) => {
//     WujieVue.bus.$emit('vue3-router-change', `/${path}`)
//   },
//   { immediate: true }
// )
</script>

<template>
  <WujieVue width="100%" height="100%" name="docs" :url="docsUrl" :sync="true"></WujieVue>
</template>
