<template>
  <article class="contact-card">
    <span class="contact-card__accent" aria-hidden="true"></span>
    <div class="contact-card__header">
      <div class="contact-card__icon">
        <img :src="icon" :alt="`Icono de ${title}`" />
      </div>
      <div class="contact-card__header-text">
        <h3>{{ title }}</h3>
        <span class="contact-card__origin">{{ origin }}</span>
      </div>
    </div>
    <p class="contact-card__description">{{ description }}</p>
    <div class="contact-card__actions">
      <a
        :href="link"
        target="_blank"
        rel="noopener noreferrer"
        class="contact-card__button contact-card__button--primary"
      >
        <img src="@/assets/share.svg" alt="" aria-hidden="true" />
        Abrir canal
      </a>
      <button
        type="button"
        class="contact-card__button contact-card__button--ghost"
        @click="copyLink"
      >
        <img
          v-if="!copied"
          src="@/assets/copi1.svg"
          alt=""
          aria-hidden="true"
        />
        <img
          v-else
          src="@/assets/copy2.svg"
          alt=""
          aria-hidden="true"
        />
        <span>{{ copied ? "Copiado" : "Copiar link" }}</span>
      </button>
    </div>
  </article>
</template>

<script setup>
import { computed, ref } from "vue";
import { useToast } from "vue-toastification";

const props = defineProps({
  title: {
    type: String,
    default: "",
  },
  description: {
    type: String,
    default: "",
  },
  link: {
    type: String,
    default: "#",
  },
  icon: {
    type: String,
    default: "",
  },
});

const copied = ref(false);
const toast = useToast();

const origin = computed(() => {
  if (!props.link || props.link === "#") {
    return "Disponible en l\u00EDnea";
  }

  try {
    const url = new URL(props.link);
    return url.hostname.replace(/^www\./, "");
  } catch (error) {
    return "Disponible en l\u00EDnea";
  }
});

const copyLink = () => {
  if (!props.link || props.link === "#") return;

  navigator.clipboard
    .writeText(props.link)
    .then(() => {
      copied.value = true;
      toast.success("Enlace copiado en el portapapeles");
      setTimeout(() => {
        copied.value = false;
      }, 2200);
    })
    .catch(() => {
      toast.error("No se pudo copiar el enlace");
    });
};
</script>

<style scoped>
.contact-card {
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 24px;
  border: 1px solid var(--color-line);
  border-radius: 6px;
  background: var(--color-surface);
  transition: border-color 0.25s ease;
}

.contact-card:hover {
  border-color: var(--color-text-muted);
}

.contact-card__accent {
  display: none;
}

.contact-card__header {
  display: flex;
  align-items: center;
  gap: 14px;
}

.contact-card__icon {
  width: 44px;
  height: 44px;
  flex-shrink: 0;
  display: grid;
  place-items: center;
  border-radius: 6px;
  background: var(--color-text);
}

.contact-card__icon img {
  width: 24px;
  height: 24px;
}

.contact-card__header-text {
  display: grid;
  gap: 4px;
  min-width: 0;
}

.contact-card__header-text h3 {
  font-size: 20px;
  font-weight: 500;
  letter-spacing: -0.02em;
}

.contact-card__origin {
  font-family: var(--font-mono);
  font-size: 12px;
  color: var(--color-text-muted);
  overflow-wrap: anywhere;
}

.contact-card__description {
  font-size: 15px;
  line-height: 1.5;
  color: var(--color-text-muted);
}

.contact-card__actions {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: auto;
}

.contact-card__button {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  min-height: 44px;
  padding: 0 16px;
  border: 1px solid var(--color-line);
  border-radius: 999px;
  font-size: 14px;
  cursor: pointer;
  transition:
    background 0.2s ease,
    color 0.2s ease,
    border-color 0.2s ease;
}

.contact-card__button img {
  display: none;
}

.contact-card__button--primary:hover {
  background: var(--color-primary);
  border-color: var(--color-primary);
  color: var(--color-on-primary);
}

.contact-card__button--ghost:hover {
  border-color: var(--color-text);
}
</style>
