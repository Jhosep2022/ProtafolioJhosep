<template>
  <header class="header">
    <div class="page-wrapper header__inner">
      <router-link to="/" class="header__logo">
        <span class="header__mark">JH</span>
        <span class="header__brand">Joshep</span>
      </router-link>

      <nav v-if="showNav" class="header__nav">
        <a href="#hero" class="header__link">Presentaci&oacute;n</a>
        <a href="#projects" class="header__link">Proyectos</a>
        <a href="#contact" class="header__link">Asesor&iacute;a</a>
      </nav>

      <div class="header__actions">
        <a
          class="header__circle"
          href="https://github.com/Jhosep2022"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Perfil de GitHub"
        >
          <img src="../assets/Github_dark.svg" alt="Github" />
        </a>
        <router-link v-if="showNav" to="/contactpage" class="header__cta">
          Agenda una asesor&iacute;a
        </router-link>
      </div>
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
  position: sticky;
  top: 0;
  z-index: 20;
  backdrop-filter: blur(18px);
  background: linear-gradient(180deg, rgba(8, 5, 19, 0.92) 0%, rgba(8, 5, 19, 0.58) 100%);
  border-bottom: 1px solid rgba(127, 90, 240, 0.18);
  box-shadow: 0 12px 36px rgba(6, 4, 18, 0.35);
}

.header__inner {
  width: min(100%, var(--max-content-width));
  margin: 0 auto;
  padding: 14px 24px;
  display: grid;
  grid-template-columns: auto 1fr auto;
  align-items: center;
  gap: 32px;
}

.header__logo {
  display: flex;
  align-items: center;
  gap: 12px;
  color: var(--color-text);
  text-decoration: none;
  font-family: "Space Grotesk", sans-serif;
}

.header__logo:hover .header__brand {
  color: var(--color-primary);
}

.header__mark {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border-radius: 12px;
  background: linear-gradient(140deg, rgba(127, 90, 240, 0.9), rgba(44, 182, 125, 0.8));
  font-weight: 700;
  letter-spacing: 0.04em;
}

.header__brand {
  font-size: 20px;
  font-weight: 600;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  transition: color 0.3s ease;
}

.header__nav {
  display: flex;
  align-items: center;
  gap: 18px;
  justify-self: center;
  padding: 6px 14px;
  border-radius: 999px;
  background: rgba(12, 10, 24, 0.54);
  border: 1px solid rgba(127, 90, 240, 0.18);
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.06);
}

.header__link {
  position: relative;
  padding: 10px 18px;
  font-size: 15px;
  color: var(--color-text-muted);
  border-radius: 999px;
  transition:
    color 0.3s ease,
    background 0.3s ease,
    box-shadow 0.3s ease;
}

.header__link::after {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: 999px;
  border: 1px solid rgba(127, 90, 240, 0.45);
  opacity: 0;
  transition: opacity 0.3s ease;
}

.header__link:hover {
  color: var(--color-text);
  background: rgba(127, 90, 240, 0.18);
  box-shadow: 0 8px 20px rgba(127, 90, 240, 0.15);
}

.header__link:hover::after {
  opacity: 1;
}

.header__actions {
  display: flex;
  align-items: center;
  gap: 16px;
  justify-self: end;
}

.header__circle {
  width: 42px;
  height: 42px;
  border-radius: 50%;
  display: grid;
  place-items: center;
  background: rgba(255, 255, 255, 0.92);
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;
}

.header__circle img {
  width: 22px;
  height: 22px;
}

.header__circle:hover {
  transform: translateY(-4px) scale(1.03);
  box-shadow: 0 12px 24px rgba(127, 90, 240, 0.25);
}

.header__cta {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 10px 20px;
  border-radius: 999px;
  background: linear-gradient(140deg, rgba(127, 90, 240, 0.85), rgba(44, 182, 125, 0.9));
  color: #0b0613;
  font-weight: 600;
  text-transform: uppercase;
  font-size: 13px;
  letter-spacing: 0.14em;
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;
}

.header__cta:hover {
  transform: translateY(-4px);
  box-shadow: 0 18px 38px rgba(127, 90, 240, 0.28);
}

@media (max-width: 900px) {
  .header__inner {
    grid-template-columns: auto auto;
    padding: 12px 20px;
  }

  .header__nav {
    display: none;
  }

  .header__actions {
    margin-left: auto;
  }

  .header__cta {
    padding: 10px 16px;
    font-size: 12px;
  }
}

@media (max-width: 600px) {
  .header__mark {
    width: 32px;
    height: 32px;
  }

  .header__brand {
    font-size: 18px;
  }

  .header__circle {
    width: 36px;
    height: 36px;
  }
}
</style>
