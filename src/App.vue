<script setup>
import { onMounted } from "vue";
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
import { initSmoothScroll } from "./composables/useMotion";

onMounted(initSmoothScroll);
</script>

<template>
  <div class="app">
    <Header />

    <main class="app__main">
      <router-view />
    </main>

    <Footer />
  </div>
</template>

<style scoped>
.app {
  min-height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
}

.app__main {
  flex: 1;
  display: flex;
  flex-direction: column;
}
</style>
