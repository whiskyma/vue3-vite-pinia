<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div>
    <header>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/about">About</RouterLink>
    </header>
    <section>
      <RouterView />
    </section>
    <footer>底部</footer>
  </div>
</template>

<style scoped lang="scss"></style>
