<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div>
    <header>
      <div class="w1200">
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </div>
    </header>
    <section>
      <RouterView />
    </section>
    <footer>
      <div class="w1200">
        <div>底部</div>
      </div>
    </footer>
  </div>
</template>

<style scoped lang="scss">
.w1200 {
  width: 1200px;
  margin: 0 auto;
}
header {
  height: 80px;
  background-color: #f2f2f2;
}
section {
  min-height: 800px;
}
footer {
  height: 120px;
  background-color: #f2f2f2;
}
</style>
