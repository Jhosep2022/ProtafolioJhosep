<template>
  <section ref="root" class="contact-page">
    <div class="page-wrapper contact-page__wrapper">
      <header class="contact-page__header">
        <p class="section-label"><b>→</b> Asesorías</p>
        <h1 class="section-title" data-split>¿Tienes un reto puntual?</h1>
        <p class="contact-page__intro" data-reveal>
          Diagnóstico de bugs, acompañamiento en despliegues o mentorías para tu equipo.
          Comparte contexto y coordinemos la próxima sesión.
        </p>
        <a class="button button--primary contact-page__cta" :href="`mailto:${profile.email}`" data-reveal>
          Escríbeme
        </a>
      </header>

      <dl class="contact-page__meta" data-reveal>
        <div>
          <dt>Idiomas</dt>
          <dd>Español nativo · Inglés intermedio</dd>
        </div>
        <div>
          <dt>Formato</dt>
          <dd>Sesiones 1:1 · Workshops · Pair programming</dd>
        </div>
      </dl>

      <div class="contact-grid">
        <ContactCard
          v-for="channel in channels"
          :key="channel.title"
          :title="channel.title"
          :description="channel.description"
          :link="channel.link"
          :icon="channel.icon"
          data-reveal
        />
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";
import ContactCard from "@/components/ContactCard.vue";
import { useMotion } from "@/composables/useMotion";
import { profile } from "@/data/portfolio";
import githubIcon from "@/assets/Github_dark.svg";
import faceIcon from "@/assets/facebook.svg";
import linkedinIcon from "@/assets/linkedin.svg";
import emailIcon from "@/assets/email.png";
import tiktokIcon from "@/assets/tiktok.svg";

const root = ref(null);

const channels = [
  {
    title: "Email",
    description: "Proyectos formales, propuestas comerciales y material de seguimiento.",
    link: `mailto:${profile.email}`,
    icon: emailIcon,
  },
  {
    title: "LinkedIn",
    description: "Recorrido profesional, oportunidades abiertas y colaboración con empresas.",
    link: profile.linkedin,
    icon: linkedinIcon,
  },
  {
    title: "GitHub",
    description: "Explora repositorios, issues abiertos y patrones que utilizo a diario.",
    link: profile.github,
    icon: githubIcon,
  },
  {
    title: "Facebook",
    description: "Comunidad y notas extendidas sobre experiencias con equipos multidisciplinarios.",
    link: "https://www.facebook.com/profile.php?id=61558187656264",
    icon: faceIcon,
  },
  {
    title: "TikTok",
    description: "Tips rápidos, snippets y retos semanales de desarrollo moderno.",
    link: "https://www.tiktok.com/@panda.code69",
    icon: tiktokIcon,
  },
];

useMotion(root);
</script>

<style scoped>
.contact-page {
  padding: calc(var(--header-height) + 72px) 0 var(--section-gap);
}

.contact-page__wrapper {
  display: grid;
  gap: 64px;
}

.contact-page__header {
  display: grid;
  gap: 18px;
  max-width: 820px;
}

.contact-page__intro {
  max-width: 56ch;
  font-size: clamp(18px, 1.7vw, 22px);
  line-height: 1.4;
  color: var(--color-text-muted);
}

.contact-page__cta {
  justify-self: start;
}

.contact-page__meta {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 32px;
  padding-top: 24px;
  border-top: 1px solid var(--color-line);
}

.contact-page__meta dt {
  margin-bottom: 8px;
  font-family: var(--font-mono);
  font-size: 13px;
  color: var(--color-text-muted);
}

.contact-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 16px;
}

@media (max-width: 1000px) {
  .contact-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 680px) {
  .contact-grid,
  .contact-page__meta {
    grid-template-columns: minmax(0, 1fr);
  }
}
</style>
