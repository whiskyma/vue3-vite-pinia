<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div class="w-1200px m-auto h-80">
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/about">About</RouterLink>
  </div>
  <section>
    <RouterView />
  </section>
  <div class="w-1200px">
    <div>底部</div>
  </div>
</template>

<style scoped lang="scss">
section {
  min-height: 800px;
}
</style>
