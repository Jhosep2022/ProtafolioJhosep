<script setup>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
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
  position: relative;
  isolation: isolate;
}

.app::before {
  content: "";
  position: fixed;
  inset: 0;
  z-index: -1;
  background: radial-gradient(
      120% 120% at 20% -20%,
      rgba(127, 90, 240, 0.4),
      transparent 70%
    ),
    radial-gradient(90% 90% at 85% 15%, rgba(44, 182, 125, 0.32), transparent 60%),
    radial-gradient(70% 70% at 50% 110%, rgba(255, 121, 198, 0.18), transparent 70%);
  opacity: 0.85;
}

.app__main {
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 32px 0 64px;
}

@media (max-width: 768px) {
  .app__main {
    padding: 24px 0 48px;
  }
}
</style>
