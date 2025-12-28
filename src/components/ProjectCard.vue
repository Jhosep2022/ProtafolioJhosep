<template>
  <article class="project-card">
    <div class="project-card__preview">
      <img :src="image" :alt="`Imagen del proyecto ${title}`" />
    </div>
    <div class="project-card__content">
      <h3 class="project-card__title">{{ title }}</h3>
      <p v-if="summary" class="project-card__summary">{{ summary }}</p>
      <div class="project-card__footer">
        <span class="project-card__label">Stack</span>
        <span class="project-card__stack">{{ stackLabel }}</span>
      </div>
    </div>
  </article>
</template>

<script setup>
import { computed } from "vue";

const props = defineProps({
  title: {
    type: String,
    default: "",
  },
  summary: {
    type: String,
    default: "",
  },
  stack: {
    type: String,
    default: "",
  },
  image: {
    type: String,
    default: "",
  },
});

const stackLabel = computed(() => props.stack || props.summary);
</script>

<style scoped>
.project-card {
  border-radius: 22px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  background: linear-gradient(140deg, rgba(16, 12, 32, 0.88), rgba(12, 10, 24, 0.95));
  background-clip: padding-box;
  border: 1px solid rgba(127, 90, 240, 0.32);
  box-shadow:
    0 18px 45px rgba(4, 3, 14, 0.6),
    inset 0 1px 0 rgba(255, 255, 255, 0.06);
  backdrop-filter: blur(12px);
  transition:
    transform 0.35s ease,
    box-shadow 0.35s ease,
    border-color 0.35s ease;
}

.project-card:hover {
  transform: translateY(-10px);
  border-color: rgba(127, 90, 240, 0.65);
  box-shadow:
    0 28px 65px rgba(6, 4, 18, 0.75),
    inset 0 1px 0 rgba(255, 255, 255, 0.1);
}

.project-card__preview {
  position: relative;
  aspect-ratio: 16 / 10;
  overflow: hidden;
}

.project-card__preview::after {
  content: "";
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, transparent 55%, rgba(8, 5, 19, 0.85) 100%);
  opacity: 0.85;
  pointer-events: none;
}

.project-card img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transform: scale(1.02);
  transition: transform 0.5s ease;
}

.project-card:hover img {
  transform: scale(1.05);
}

.project-card__content {
  padding: 24px 24px 28px;
  display: flex;
  flex-direction: column;
  gap: 18px;
}

.project-card__title {
  font-size: 22px;
  font-weight: 700;
  letter-spacing: 0.02em;
}

.project-card__summary {
  font-size: 15px;
  color: var(--color-text-muted);
  line-height: 1.6;
}

.project-card__footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 16px;
  border-top: 1px solid rgba(245, 245, 255, 0.1);
  font-size: 13px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: rgba(245, 245, 255, 0.72);
}

.project-card__label {
  color: var(--color-text-muted);
}

.project-card__stack {
  font-weight: 600;
  color: var(--color-primary);
}

@media (max-width: 768px) {
  .project-card__content {
    padding: 20px 18px 24px;
  }

  .project-card__title {
    font-size: 20px;
  }

  .project-card__summary {
    font-size: 14px;
  }
}
</style>
