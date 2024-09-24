<template>
  <header class="header">
    <div class="header__logo">
      <router-link to="/" class="header__logo-link">
        <h1>Joshep</h1>
      </router-link>
    </div>
    <nav class="header__nav" v-if="showNav">
      <a href="#home">Presentacion</a>
      <a href="#projects">Proyectos</a>
      <a href="#contact">Asesoria</a>
    </nav>
    <div class="header__github">
      <a href="https://github.com/Jhosep2022">
        <img src="../assets/Github_dark.svg" alt="Github" />
      </a>
    </div>
  </header>
</template>

<script setup>
import { computed } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();

const showNav = computed(() => route.path !== "/contactpage");
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;700&display=swap");

.header {
  width: 100%;
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
  box-sizing: border-box;
}

.header__logo h1 {
  font-size: 32px;
  font-weight: bold;
  font-family: "Space Grotesk", sans-serif;
  margin: 0;
}

.header__nav {
  flex-grow: 1;
  text-align: center;
}

.header__nav a {
  margin: 0 15px;
  padding: 8px 15px;
  color: white;
  text-decoration: none;
  font-size: 20px;
  border: 2px solid transparent;
  border-radius: 5px;
  font-family: "Space Grotesk", sans-serif;
  transition:
    color 0.3s,
    background-color 0.3s,
    border-color 0.3s;
}

.header__nav a:hover {
  color: #7f5af0;
  border-color: #7f5af0;
  background-color: transparent;
}

.header__github {
  margin-left: auto; /* Mueve el ícono hacia la derecha */
}

.header__github img {
  width: 30px;
  height: 30px;
}

.header__logo-link {
  color: white;
  text-decoration: none;
}

/* Para pantallas grandes (escritorio) */
@media (min-width: 1024px) {
  .header__nav {
    display: flex;
    justify-content: center;
  }

  .header__nav a {
    font-size: 20px;
  }
}

/* Para tabletas (pantallas medianas) */
@media (max-width: 1024px) {
  .header {
    flex-direction: row;
  }

  .header__nav {
    margin-top: 10px;
    display: flex;
    justify-content: center;
  }

  .header__nav a {
    margin: 5px 10px;
    font-size: 18px;
  }
}

/* Para móviles (pantallas pequeñas) */
@media (max-width: 600px) {
  .header {
    flex-direction: row;
    justify-content: space-between; /* Asegura que los elementos estén correctamente alineados */
  }

  .header__nav {
    display: block;
    margin-top: 0;
  }

  .header__nav a {
    display: block;
    margin: 10px 0;
    font-size: 16px;
  }

  .header__github {
    margin-left: 0;
  }

  .header__github img {
    width: 25px;
    height: 25px;
  }

  .header__logo h1 {
    font-size: 24px;
  }
}
</style>
