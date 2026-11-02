<template>
  <section class="stack" aria-label="Tecnologías">
    <ul class="stack__list">
      <li v-for="name in stackNames" :key="name">{{ name }}</li>
    </ul>
    <ul class="stack__list stack__list--clone" aria-hidden="true">
      <li v-for="name in stackNames" :key="name">{{ name }}</li>
    </ul>
  </section>
</template>

<script setup>
import { stackNames } from "@/data/portfolio";
</script>

<style scoped>
.stack {
  display: flex;
  margin-top: var(--section-gap);
  padding: 20px 0;
  overflow: hidden;
  border-block: 1px solid var(--color-line);
}

.stack__list {
  display: flex;
  flex-shrink: 0;
  gap: 48px;
  padding-right: 48px;
  list-style: none;
  font-family: var(--font-mono);
  font-size: 14px;
  color: var(--color-text-muted);
  animation: stack-scroll 45s linear infinite;
}

.stack:hover .stack__list {
  animation-play-state: paused;
}

@keyframes stack-scroll {
  to {
    transform: translateX(-100%);
  }
}

@media (prefers-reduced-motion: reduce) {
  .stack {
    padding-inline: var(--gutter);
  }

  .stack__list {
    flex-wrap: wrap;
    flex-shrink: 1;
    gap: 8px 24px;
    padding-right: 0;
    animation: none;
  }

  .stack__list--clone {
    display: none;
  }
}
</style>
