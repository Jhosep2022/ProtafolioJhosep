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
@import url("https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;700&display=swap");

.contact-card {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 22px;
  padding: 30px 26px 28px;
  border-radius: 26px;
  background: linear-gradient(150deg, rgba(16, 12, 32, 0.88), rgba(12, 10, 24, 0.92));
  border: 1px solid rgba(127, 90, 240, 0.24);
  box-shadow:
    0 18px 42px rgba(6, 4, 18, 0.48),
    inset 0 1px 0 rgba(255, 255, 255, 0.06);
  color: var(--color-text);
  min-height: 240px;
  transition:
    transform 0.35s ease,
    border-color 0.35s ease,
    box-shadow 0.35s ease;
  overflow: hidden;
}

.contact-card::before {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: inherit;
  background: radial-gradient(circle at 20% 0%, rgba(127, 90, 240, 0.22), transparent 55%);
  opacity: 0;
  transition: opacity 0.35s ease;
  pointer-events: none;
}

.contact-card__accent {
  position: absolute;
  inset: 0 0 auto;
  height: 3px;
  background: linear-gradient(90deg, rgba(127, 90, 240, 0.8), rgba(44, 182, 125, 0.75));
  opacity: 0.75;
}

.contact-card:hover {
  transform: translateY(-10px);
  border-color: rgba(127, 90, 240, 0.6);
  box-shadow:
    0 28px 66px rgba(6, 4, 18, 0.68),
    inset 0 1px 0 rgba(255, 255, 255, 0.1);
}

.contact-card:hover::before {
  opacity: 1;
}

.contact-card__header {
  display: flex;
  align-items: center;
  gap: 16px;
}

.contact-card__icon {
  width: 56px;
  height: 56px;
  border-radius: 18px;
  background: rgba(8, 5, 19, 0.82);
  border: 1px solid rgba(255, 255, 255, 0.08);
  display: grid;
  place-items: center;
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.05);
}

.contact-card__icon img {
  width: 30px;
  height: 30px;
}

.contact-card__header-text {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.contact-card__header-text h3 {
  font-size: 20px;
  font-weight: 700;
  letter-spacing: 0.02em;
  margin: 0;
}

.contact-card__origin {
  font-size: 12px;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: rgba(245, 245, 255, 0.6);
}

.contact-card__description {
  margin: 0;
  font-size: 15px;
  line-height: 1.7;
  color: var(--color-text-muted);
}

.contact-card__actions {
  display: flex;
  gap: 14px;
  margin-top: auto;
}

.contact-card__button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  flex: 1 1 50%;
  padding: 12px 20px;
  border-radius: 16px;
  border: 1px solid rgba(127, 90, 240, 0.38);
  font-size: 13px;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  font-weight: 600;
  cursor: pointer;
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease,
    border-color 0.3s ease,
    background 0.3s ease,
    color 0.3s ease;
}

.contact-card__button img {
  width: 18px;
  height: 18px;
}

.contact-card__button--primary {
  background: linear-gradient(140deg, rgba(127, 90, 240, 0.92), rgba(44, 182, 125, 0.9));
  color: #0b0613;
  box-shadow: 0 18px 34px rgba(127, 90, 240, 0.25);
}

.contact-card__button--primary:hover {
  transform: translateY(-4px);
  box-shadow: 0 22px 42px rgba(127, 90, 240, 0.32);
}

.contact-card__button--ghost {
  background: rgba(2, 1, 10, 0.7);
  color: var(--color-text);
}

.contact-card__button--ghost:hover {
  transform: translateY(-3px);
  border-color: rgba(127, 90, 240, 0.6);
  box-shadow: 0 18px 34px rgba(127, 90, 240, 0.25);
}

@media (max-width: 600px) {
  .contact-card {
    padding: 26px 22px;
  }

  .contact-card__actions {
    flex-direction: column;
  }

  .contact-card__button {
    width: 100%;
  }
}
</style>
