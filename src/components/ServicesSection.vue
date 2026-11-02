<template>
  <section id="services" ref="root" class="services">
    <div class="page-wrapper services__wrapper">
      <header class="services__heading">
        <p class="section-label"><b>03</b> Servicios</p>
        <h2 class="section-title" data-split>En qué puedo ayudarte</h2>
      </header>

      <div class="services__body" data-reveal>
        <div class="services__options">
          <button
            v-for="(service, index) in services"
            :key="service.id"
            type="button"
            :class="['services__option', { 'services__option--active': active === service.id }]"
            :aria-pressed="active === service.id"
            @click="active = service.id"
            @mouseenter="active = service.id"
          >
            <span class="services__option-index">{{ `0${index + 1}` }}</span>
            {{ service.title }}
          </button>
        </div>

        <Transition name="panel" mode="out-in">
          <div :key="current.id" class="services__panel" aria-live="polite">
            <p class="services__summary">{{ current.summary }}</p>
            <div class="services__group">
              <h3>Stack</h3>
              <ul class="services__tags">
                <li v-for="tool in current.stack" :key="tool">{{ tool }}</li>
              </ul>
            </div>
            <div class="services__group">
              <h3>Proyectos relacionados</h3>
              <ul class="services__projects">
                <li v-for="project in current.projects" :key="project">{{ project }}</li>
              </ul>
            </div>
          </div>
        </Transition>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed, ref } from "vue";
import { useMotion } from "@/composables/useMotion";
import { services } from "@/data/portfolio";

const root = ref(null);
const active = ref(services[0].id);
const current = computed(() => services.find((service) => service.id === active.value));

useMotion(root);
</script>

<style scoped>
.services {
  padding-top: var(--section-gap);
}

.services__wrapper {
  display: grid;
  gap: 56px;
}

.services__heading {
  display: grid;
  gap: 14px;
}

.services__body {
  display: grid;
  grid-template-columns: minmax(0, 7fr) minmax(0, 5fr);
  gap: 64px;
  align-items: start;
}

.services__options {
  display: grid;
  border-top: 1px solid var(--color-line);
}

.services__option {
  display: flex;
  align-items: baseline;
  gap: 18px;
  padding: 22px 0;
  border-bottom: 1px solid var(--color-line);
  text-align: left;
  font-size: clamp(28px, 4.4vw, 60px);
  font-weight: 500;
  letter-spacing: -0.03em;
  color: var(--color-text-muted);
  cursor: pointer;
  transition:
    color 0.25s ease,
    padding-left 0.35s cubic-bezier(0.22, 1, 0.36, 1);
}

.services__option--active {
  padding-left: 16px;
  color: var(--color-text);
}

.services__option-index {
  font-family: var(--font-mono);
  font-size: 13px;
  font-weight: 400;
  letter-spacing: 0;
  color: var(--color-primary);
}

.services__panel {
  display: grid;
  gap: 28px;
}

.services__summary {
  font-size: clamp(18px, 1.7vw, 22px);
  line-height: 1.4;
  letter-spacing: -0.01em;
}

.services__group {
  display: grid;
  gap: 12px;
}

.services__group h3 {
  font-family: var(--font-mono);
  font-size: 13px;
  font-weight: 400;
  color: var(--color-text-muted);
}

.services__tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  list-style: none;
}

.services__tags li {
  padding: 6px 12px;
  border: 1px solid var(--color-line);
  border-radius: 999px;
  font-size: 14px;
}

.services__projects {
  display: grid;
  gap: 8px;
  list-style: none;
  font-size: 16px;
}

.panel-enter-active,
.panel-leave-active {
  transition:
    opacity 0.2s ease,
    transform 0.2s ease;
}

.panel-enter-from {
  opacity: 0;
  transform: translateY(10px);
}

.panel-leave-to {
  opacity: 0;
  transform: translateY(-6px);
}

@media (max-width: 900px) {
  .services__body {
    grid-template-columns: minmax(0, 1fr);
    gap: 32px;
  }
}
</style>
