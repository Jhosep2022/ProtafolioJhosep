<template>
  <article class="project-card">
    <component
      :is="hasCarousel ? 'button' : 'div'"
      :type="hasCarousel ? 'button' : undefined"
      :class="[
        'project-card__preview',
        `project-card__preview--${fit}`,
        { 'project-card__preview--clickable': hasCarousel },
      ]"
      :aria-label="hasCarousel ? `Ver galería de ${title}` : undefined"
      :style="tone ? { '--tone': tone } : undefined"
      data-project-preview
      @click="openCarousel"
    >
      <img
        v-for="(image, imageIndex) in visibleImages"
        :key="image"
        :src="image"
        :alt="`Vista ${imageIndex + 1} del proyecto ${title}`"
        loading="lazy"
      />
      <span v-if="hasCarousel" class="project-card__hint">Galería · {{ previewImages.length }}</span>
    </component>

    <div class="project-card__content">
      <div class="project-card__heading">
        <span class="project-card__index">{{ number }}</span>
        <h3 class="project-card__title">{{ title }}</h3>
        <a
          v-if="previewUrl"
          class="project-card__link"
          :href="previewUrl"
          target="_blank"
          rel="noopener noreferrer"
          :aria-label="`Abrir ${title}`"
        >
          Abrir ↗
        </a>
      </div>
      <p class="project-card__summary">{{ summary }}</p>
      <p class="project-card__stack">{{ stack }}</p>
    </div>

    <Teleport to="body">
      <ImageCarouselModal v-model="isCarouselOpen" :images="previewImages" :title="title" />
    </Teleport>
  </article>
</template>

<script setup>
import { computed, ref } from "vue";
import ImageCarouselModal from "@/components/ImageCarouselModal.vue";

const props = defineProps({
  index: {
    type: Number,
    default: 0,
  },
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
  images: {
    type: Array,
    default: () => [],
  },
  previewUrl: {
    type: String,
    default: "",
  },
  // "screen": a whole capture, "poster": a small logo on its own color,
  // "phones": a row of portrait captures.
  fit: {
    type: String,
    default: "screen",
  },
  tone: {
    type: String,
    default: "",
  },
});

const number = computed(() => String(props.index + 1).padStart(2, "0"));
const previewImages = computed(() => props.images);
const visibleImages = computed(() =>
  props.fit === "phones" ? previewImages.value.slice(0, 3) : previewImages.value.slice(0, 1)
);
const hasCarousel = computed(() => previewImages.value.length > 1);
const isCarouselOpen = ref(false);

const openCarousel = () => {
  if (!hasCarousel.value) return;
  isCarouselOpen.value = true;
};
</script>

<style scoped>
.project-card {
  display: flex;
  flex-direction: column;
  gap: 18px;
  min-width: 0;
  height: 100%;
}

.project-card__preview {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: clamp(8px, 1.6vw, 20px);
  width: 100%;
  flex: 1;
  min-height: 0;
  aspect-ratio: 16 / 10;
  padding: clamp(12px, 2vw, 28px);
  overflow: hidden;
  border-radius: 6px;
  background: var(--tone, var(--color-surface));
}

.project-card__preview--clickable {
  cursor: pointer;
}

/* Images are always shown whole: they shrink to fit, they never get cropped */
.project-card__preview img {
  min-width: 0;
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
  border-radius: 4px;
}

.project-card__preview--poster img {
  width: min(62%, 560px);
  height: auto;
  /* These captures carry a dark hairline along their edges */
  clip-path: inset(2.5% round 4px);
}

.project-card__preview--phones img {
  width: auto;
  height: 100%;
  flex: 0 1 auto;
  border-radius: 10px;
}

.project-card__hint {
  position: absolute;
  right: 12px;
  bottom: 12px;
  padding: 7px 11px;
  border-radius: 999px;
  background: var(--color-background);
  font-family: var(--font-mono);
  font-size: 12px;
  transition:
    background 0.2s ease,
    color 0.2s ease;
}

.project-card__preview--clickable:hover .project-card__hint {
  background: var(--color-primary);
  color: var(--color-on-primary);
}

.project-card__content {
  display: grid;
  align-content: start;
  gap: 8px;
  min-height: 118px;
}

.project-card__heading {
  display: flex;
  align-items: baseline;
  gap: 14px;
}

.project-card__index,
.project-card__stack {
  font-family: var(--font-mono);
  font-size: 13px;
  color: var(--color-text-muted);
}

.project-card__index {
  color: var(--color-primary);
}

.project-card__title {
  font-size: clamp(22px, 2.2vw, 30px);
  font-weight: 500;
  letter-spacing: -0.025em;
}

.project-card__link {
  margin-left: auto;
  padding: 6px 0;
  font-size: 14px;
  white-space: nowrap;
  border-bottom: 1px solid var(--color-line);
  transition:
    color 0.2s ease,
    border-color 0.2s ease;
}

.project-card__link:hover {
  color: var(--color-primary);
  border-color: var(--color-primary);
}

.project-card__summary {
  max-width: 62ch;
  font-size: 15px;
  line-height: 1.5;
  color: var(--color-text-muted);
}
</style>
