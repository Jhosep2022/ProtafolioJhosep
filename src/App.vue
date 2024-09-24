<script setup>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
</script>

<template>
  <div class="app">
    <!-- Cabecera del sitio -->
    <Header />

    <router-view />

    <!-- Pie de página -->
    <Footer />
  </div>
</template>

<style scoped>
.app {
  width: 100%;
  min-height: 100vh;
  background: rgb(85, 38, 116);
  background: radial-gradient(
    circle,
    rgba(85, 38, 116, 1) 0%,
    rgba(0, 0, 0, 1) 42%
  );
  color: white;
  display: flex;
  flex-direction: column;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>
