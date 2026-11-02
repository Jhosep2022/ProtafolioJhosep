<template>
  <div
    v-if="modelValue && images.length"
    class="carousel-modal"
    role="dialog"
    aria-modal="true"
    :aria-label="`Galeria de ${title}`"
    data-lenis-prevent
    @click.self="close"
  >
    <button class="carousel-modal__close" type="button" @click="close" aria-label="Cerrar galeria">
      x
    </button>

    <div class="carousel-modal__content">
      <button
        v-if="showControls"
        class="carousel-modal__nav carousel-modal__nav--prev"
        type="button"
        @click="prev"
        aria-label="Imagen anterior"
      >
        ‹
      </button>

      <img
        class="carousel-modal__image"
        :src="images[currentIndex]"
        :alt="`Vista ${currentIndex + 1} de ${title}`"
      />

      <button
        v-if="showControls"
        class="carousel-modal__nav carousel-modal__nav--next"
        type="button"
        @click="next"
        aria-label="Imagen siguiente"
      >
        ›
      </button>
    </div>

    <div v-if="showControls" class="carousel-modal__dots" aria-label="Paginacion de imagenes">
      <button
        v-for="(_, index) in images"
        :key="`${title}-dot-${index}`"
        type="button"
        :class="['carousel-modal__dot', { 'carousel-modal__dot--active': currentIndex === index }]"
        :aria-label="`Ir a imagen ${index + 1}`"
        @click="goTo(index)"
      ></button>
    </div>
  </div>
</template>

<script setup>
import { computed, ref, watch } from "vue";

const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false,
  },
  images: {
    type: Array,
    default: () => [],
  },
  title: {
    type: String,
    default: "proyecto",
  },
  startIndex: {
    type: Number,
    default: 0,
  },
});

const emit = defineEmits(["update:modelValue"]);
const currentIndex = ref(0);
const showControls = computed(() => props.images.length > 1);

watch(
  () => props.modelValue,
  (isOpen) => {
    if (isOpen) {
      const safeStart = Math.max(0, Math.min(props.startIndex, props.images.length - 1));
      currentIndex.value = safeStart;
    }
  }
);

const close = () => emit("update:modelValue", false);
const next = () => {
  currentIndex.value = (currentIndex.value + 1) % props.images.length;
};
const prev = () => {
  currentIndex.value = (currentIndex.value - 1 + props.images.length) % props.images.length;
};
const goTo = (index) => {
  currentIndex.value = index;
};
</script>

<style scoped>
.carousel-modal {
  position: fixed;
  inset: 0;
  z-index: 90;
  background: rgba(2, 2, 8, 0.82);
  backdrop-filter: blur(6px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 18px;
  padding: 24px;
}

.carousel-modal__close {
  align-self: flex-end;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 1px solid rgba(255, 255, 255, 0.24);
  background: rgba(10, 10, 22, 0.9);
  color: #fff;
  font-size: 22px;
  cursor: pointer;
}

.carousel-modal__content {
  width: min(1100px, 100%);
  display: grid;
  grid-template-columns: auto minmax(0, 1fr) auto;
  align-items: center;
  gap: 16px;
}

.carousel-modal__image {
  width: 100%;
  max-height: min(78vh, 760px);
  object-fit: contain;
  border-radius: 14px;
  border: 1px solid var(--color-line);
  background: var(--color-surface);
}

.carousel-modal__nav {
  width: 44px;
  height: 44px;
  border-radius: 50%;
  border: 1px solid var(--color-line);
  background: var(--color-surface);
  color: #fff;
  font-size: 30px;
  line-height: 1;
  cursor: pointer;
}

.carousel-modal__dots {
  display: flex;
  align-items: center;
  gap: 8px;
}

.carousel-modal__dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  border: none;
  background: rgba(255, 255, 255, 0.35);
  cursor: pointer;
}

.carousel-modal__dot--active {
  background: var(--color-primary);
}

@media (max-width: 720px) {
  .carousel-modal__content {
    grid-template-columns: minmax(0, 1fr);
  }

  .carousel-modal__nav {
    display: none;
  }
}
</style>
