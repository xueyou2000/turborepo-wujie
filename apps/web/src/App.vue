<script setup lang="ts"></script>

<template>
  <div>
    <div>
      main app:
      <ul>
        <li><router-link to="/">/</router-link></li>
        <li><router-link to="/docs">docs</router-link></li>
      </ul>
    </div>
    <router-view />
  </div>
</template>
