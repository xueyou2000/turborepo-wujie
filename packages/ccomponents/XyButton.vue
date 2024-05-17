<template>
  <div class="button">
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import { defineProps, withDefaults } from 'vue'

interface Props {
  type?: string
}

withDefaults(defineProps<Props>(), { type: 'primary' })
</script>

<style lang="less">
.button {
  display: inline-block;
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  border: none;
  cursor: pointer;
  font-size: 14px;
  text-align: center;
  text-decoration: none;
  border-radius: 4px;
}
</style>
