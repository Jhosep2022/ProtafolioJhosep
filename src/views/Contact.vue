<template>
  <section id="contact" ref="root" class="contact">
    <div class="page-wrapper contact__wrapper">
      <p class="section-label"><b>04</b> Contacto</p>
      <h2 class="contact__title" data-split>¿Construimos algo juntos?</h2>

      <div class="contact__actions" data-reveal>
        <button type="button" class="button button--primary" @click="copyEmail">
          {{ copied ? "Correo copiado ✓" : profile.email }}
        </button>
        <a class="button" :href="profile.linkedin" target="_blank" rel="noopener noreferrer">LinkedIn ↗</a>
        <a class="button" :href="profile.github" target="_blank" rel="noopener noreferrer">GitHub ↗</a>
      </div>
      <span class="contact__status" role="status">{{ copied ? "Correo copiado al portapapeles" : "" }}</span>

      <div class="contact__consulting">
        <div class="contact__consulting-heading" data-reveal>
          <h3>También doy asesorías</h3>
          <router-link to="/contactpage" class="contact__consulting-link">Ver canales →</router-link>
        </div>
        <ul class="contact__list">
          <li v-for="item in consulting" :key="item.title" data-reveal>
            <h4>{{ item.title }}</h4>
            <p>{{ item.summary }}</p>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";
import { useToast } from "vue-toastification";
import { useMotion } from "@/composables/useMotion";
import { consulting, profile } from "@/data/portfolio";

const root = ref(null);
const copied = ref(false);
const toast = useToast();

useMotion(root);

const copyEmail = async () => {
  try {
    await navigator.clipboard.writeText(profile.email);
    copied.value = true;
    window.setTimeout(() => {
      copied.value = false;
    }, 2200);
  } catch (error) {
    toast.error("No se pudo copiar el correo");
  }
};
</script>

<style scoped>
.contact {
  padding: var(--section-gap) 0 calc(var(--section-gap) * 0.6);
}

.contact__wrapper {
  display: grid;
  gap: 32px;
}

.contact__title {
  max-width: 14ch;
  font-size: clamp(52px, 10vw, 152px);
  font-weight: 500;
  line-height: 1;
  letter-spacing: -0.05em;
}

.contact__actions {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
}

.contact__actions .button--primary {
  overflow-wrap: anywhere;
}

.contact__status {
  position: absolute;
  width: 1px;
  height: 1px;
  overflow: hidden;
  clip-path: inset(50%);
}

.contact__consulting {
  display: grid;
  gap: 28px;
  margin-top: 64px;
  padding-top: 28px;
  border-top: 1px solid var(--color-line);
}

.contact__consulting-heading {
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  justify-content: space-between;
  gap: 8px 24px;
}

.contact__consulting-heading h3 {
  font-size: clamp(22px, 2.2vw, 30px);
  font-weight: 500;
  letter-spacing: -0.025em;
}

.contact__consulting-link {
  font-size: 15px;
  transition: color 0.2s ease;
}

.contact__consulting-link:hover {
  color: var(--color-primary);
}

.contact__list {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 32px;
  list-style: none;
}

.contact__list h4 {
  margin-bottom: 8px;
  font-size: 16px;
  font-weight: 500;
}

.contact__list p {
  font-size: 15px;
  line-height: 1.5;
  color: var(--color-text-muted);
}

@media (max-width: 820px) {
  .contact__list {
    grid-template-columns: minmax(0, 1fr);
    gap: 20px;
  }
}
</style>
