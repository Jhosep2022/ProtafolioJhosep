<template>
  <header :class="['header', { 'header--solid': isScrolled }]">
    <span class="header__progress" :style="{ transform: `scaleX(${progress})` }" aria-hidden="true"></span>
    <div class="page-wrapper header__inner">
      <router-link to="/" class="header__logo">{{ profile.name }}</router-link>
      <a href="/#contact" class="header__cta" @click.prevent="goToContact">Hablemos</a>
    </div>
  </header>
</template>

<script setup>
import { onBeforeUnmount, onMounted, ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import { scrollToSection } from "@/composables/useMotion";
import { profile } from "@/data/portfolio";

const route = useRoute();
const router = useRouter();

const isScrolled = ref(false);
const progress = ref(0);

const onScroll = () => {
  const scrollable = document.documentElement.scrollHeight - window.innerHeight;
  isScrolled.value = window.scrollY > 16;
  progress.value = scrollable > 0 ? Math.min(window.scrollY / scrollable, 1) : 0;
};

const goToContact = async () => {
  if (route.path !== "/") {
    await router.push({ path: "/", hash: "#contact" });
  } else {
    scrollToSection("contact");
  }
};

onMounted(() => {
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
});

onBeforeUnmount(() => window.removeEventListener("scroll", onScroll));
</script>

<style scoped>
.header {
  position: fixed;
  inset: 0 0 auto;
  z-index: 20;
  border-bottom: 1px solid transparent;
  transition:
    background 0.3s ease,
    border-color 0.3s ease;
}

.header--solid {
  background: rgba(10, 10, 11, 0.86);
  backdrop-filter: blur(14px);
  border-color: var(--color-line);
}

.header__progress {
  position: absolute;
  inset: auto 0 -1px;
  height: 1px;
  background: var(--color-primary);
  transform-origin: left;
}

.header__inner {
  height: var(--header-height);
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
}

.header__logo {
  font-size: 16px;
  font-weight: 500;
  letter-spacing: -0.01em;
}

.header__cta {
  display: inline-flex;
  align-items: center;
  min-height: 44px;
  font-size: 14px;
  color: var(--color-text-muted);
  transition: color 0.2s ease;
}

.header__cta:hover {
  color: var(--color-primary);
}
</style>
