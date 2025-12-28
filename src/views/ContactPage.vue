<template>
  <section class="contact-page">
    <div class="contact-page__halo"></div>
    <div class="page-wrapper contact-page__wrapper">
      <header class="contact-page__header">
        <span class="contact-page__eyebrow">Conectemos</span>
        <h2>Encu&eacute;ntrame en las plataformas donde comparto c&oacute;digo y mentor&iacute;a</h2>
        <p>
          Espacios para colaborar, revisar ideas y mantenernos en contacto. Elige
          el canal que mejor se adapte a tu ritmo o escr&iacute;beme directo para agendar
          una sesi&oacute;n personalizada.
        </p>
      </header>

      <div class="contact-page__hero">
        <div class="contact-page__hero-card">
          <span class="contact-page__pill">Respuesta en menos de 24 h</span>
          <h3>&iquest;Tienes un reto puntual?</h3>
          <p>
            Diagn&oacute;stico de bugs, acompa&ntilde;amiento en despliegues o mentor&iacute;as para tu equipo.
            Comparte contexto y coordinemos la pr&oacute;xima sesi&oacute;n.
          </p>
          <div class="contact-page__hero-actions">
            <a class="contact-page__hero-primary" href="mailto:jhosep.guzman2022@gmail.com">
              Escr&iacute;beme ahora
            </a>
            <a class="contact-page__hero-secondary" href="https://wa.me/tu-numero" target="_blank" rel="noopener noreferrer">
              Agenda una llamada
            </a>
          </div>
        </div>
        <div class="contact-page__hero-meta">
          <div>
            <span>Disponibilidad</span>
            <p>Lunes a viernes · 09:00 - 18:00 GMT-5</p>
          </div>
          <div>
            <span>Idiomas</span>
            <p>Espa&ntilde;ol e Ingl&eacute;s</p>
          </div>
          <div>
            <span>Formato</span>
            <p>Sesiones 1:1 · Workshops · Pair programming</p>
          </div>
        </div>
      </div>

      <div class="contact-page__grid-heading">
        <h3>Canales activos</h3>
        <p>
          Comunidades, redes y mensajer&iacute;a donde comparto avances, contenidos y oportunidades de colaboraci&oacute;n.
        </p>
      </div>

      <div class="contact-grid">
        <ContactCard
          title="Discord"
          description="&Uacute;nete al servidor para sesiones en vivo, code reviews comunitarios y soporte r&aacute;pido."
          link="https://discord.com/invite/tu-servidor"
          :icon="discordIcon"
        />
        <ContactCard
          title="GitHub"
          description="Explora repositorios, issues abiertos y patrones que utilizo a diario."
          link="https://github.com/Jhosep2022"
          :icon="githubIcon"
        />
        <ContactCard
          title="Twitter"
          description="Actualizaciones breves sobre proyectos, lanzamientos y aprendizajes constantes."
          link="https://twitter.com/tu-cuenta"
          :icon="twitterIcon"
        />
        <ContactCard
          title="Instagram"
          description="Detr&aacute;s de escena de prototipos, bocetos UI y eventos de la comunidad tech."
          link="https://instagram.com/tu-cuenta"
          :icon="instaIcon"
        />
        <ContactCard
          title="Facebook"
          description="Comunidad y notas extendidas sobre experiencias con equipos multidisciplinarios."
          link="https://facebook.com/tu-cuenta"
          :icon="faceIcon"
        />
        <ContactCard
          title="LinkedIn"
          description="Recorrido profesional, oportunidades abiertas y colaboraci&oacute;n con empresas."
          link="https://linkedin.com/in/tu-cuenta"
          :icon="linkedinIcon"
        />
        <ContactCard
          title="WhatsApp"
          description="Contacto directo para asesor&iacute;as r&aacute;pidas y coordinaci&oacute;n de sesiones privadas."
          link="https://wa.me/tu-numero"
          :icon="whatsappIcon"
        />
        <ContactCard
          title="Telegram"
          description="Mensajer&iacute;a segura para equipos remotos y documentaci&oacute;n centralizada."
          link="https://t.me/tu-cuenta"
          :icon="telegramIcon"
        />
        <ContactCard
          title="Email"
          description="Proyectos formales, propuestas comerciales y material de seguimiento."
          link="mailto:tu-email@example.com"
          :icon="emailIcon"
        />
        <ContactCard
          title="TikTok"
          description="Tips r&aacute;pidos, snippets y retos semanales de desarrollo moderno."
          link="https://tiktok.com/@tu-cuenta"
          :icon="tiktokIcon"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
import ContactCard from "@/components/ContactCard.vue";
import discordIcon from "@/assets/discord.svg";
import githubIcon from "@/assets/Github_dark.svg";
import twitterIcon from "@/assets/X_dark.svg";
import instaIcon from "@/assets/instagram_dark.svg";
import faceIcon from "@/assets/facebook.svg";
import linkedinIcon from "@/assets/linkedin.svg";
import whatsappIcon from "@/assets/whatsapp.svg";
import telegramIcon from "@/assets/telegram.svg";
import emailIcon from "@/assets/email.png";
import tiktokIcon from "@/assets/tiktok.svg";
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;700&display=swap");

.contact-page {
  position: relative;
  padding: 110px 0 100px;
  overflow: hidden;
}

.contact-page__halo {
  position: absolute;
  inset: -32% -35% auto;
  height: clamp(320px, 70vw, 520px);
  background:
    radial-gradient(60% 60% at 12% 22%, rgba(127, 90, 240, 0.25), transparent 65%),
    radial-gradient(50% 45% at 88% 18%, rgba(44, 182, 125, 0.18), transparent 58%);
  z-index: 0;
  pointer-events: none;
  filter: blur(0);
  animation: contactHalo 26s ease-in-out infinite alternate;
  mix-blend-mode: screen;
}

.contact-page::after {
  content: "";
  position: absolute;
  bottom: -180px;
  right: -160px;
  width: clamp(240px, 55vw, 520px);
  height: clamp(240px, 60vw, 540px);
  pointer-events: none;
  background: conic-gradient(
    from 120deg at 50% 50%,
    rgba(44, 182, 125, 0.18),
    rgba(127, 90, 240, 0.05),
    rgba(255, 121, 198, 0.22),
    rgba(44, 182, 125, 0.18)
  );
  filter: blur(120px);
  opacity: 0.55;
  mix-blend-mode: screen;
  animation: contactGlow 32s ease-in-out infinite alternate;
  z-index: 0;
}

.contact-page__wrapper {
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  gap: 60px;
}

.contact-page__header {
  max-width: 760px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  color: var(--color-text);
}

.contact-page__eyebrow {
  font-size: 13px;
  letter-spacing: 0.32em;
  text-transform: uppercase;
  color: rgba(245, 245, 255, 0.5);
}

.contact-page__header h2 {
  font-size: clamp(36px, 4vw, 48px);
  line-height: 1.22;
}

.contact-page__header p {
  color: var(--color-text-muted);
  line-height: 1.8;
}

.contact-page__hero {
  display: grid;
  grid-template-columns: minmax(0, 0.95fr) minmax(0, 1fr);
  gap: 28px;
}

.contact-page__hero-card {
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 40px 42px;
  border-radius: 30px;
  background: linear-gradient(150deg, rgba(16, 12, 32, 0.95), rgba(12, 10, 24, 0.8));
  border: 1px solid rgba(127, 90, 240, 0.35);
  box-shadow:
    0 25px 60px rgba(6, 4, 18, 0.55),
    inset 0 1px 0 rgba(255, 255, 255, 0.06);
  backdrop-filter: blur(18px);
}

.contact-page__pill {
  align-self: flex-start;
  padding: 8px 16px;
  border-radius: 999px;
  background: rgba(127, 90, 240, 0.16);
  border: 1px solid rgba(127, 90, 240, 0.4);
  font-size: 12px;
  letter-spacing: 0.3em;
  text-transform: uppercase;
  color: rgba(245, 245, 255, 0.75);
}

.contact-page__hero-card h3 {
  font-size: clamp(28px, 3vw, 36px);
  line-height: 1.3;
}

.contact-page__hero-card p {
  color: var(--color-text-muted);
  line-height: 1.7;
}

.contact-page__hero-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
}

.contact-page__hero-primary,
.contact-page__hero-secondary {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 14px 24px;
  border-radius: 16px;
  font-size: 14px;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  font-weight: 600;
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease,
    background 0.3s ease,
    color 0.3s ease;
}

.contact-page__hero-primary {
  background: linear-gradient(140deg, rgba(127, 90, 240, 0.95), rgba(44, 182, 125, 0.92));
  color: #0b0613;
}

.contact-page__hero-primary:hover {
  transform: translateY(-4px);
  box-shadow: 0 22px 40px rgba(127, 90, 240, 0.32);
}

.contact-page__hero-secondary {
  background: rgba(127, 90, 240, 0.14);
  border: 1px solid rgba(127, 90, 240, 0.45);
  color: var(--color-text);
}

.contact-page__hero-secondary:hover {
  transform: translateY(-3px);
  color: var(--color-primary);
  box-shadow: 0 18px 32px rgba(127, 90, 240, 0.25);
}

.contact-page__hero-meta {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 18px;
}

.contact-page__hero-meta div {
  padding: 24px 22px;
  border-radius: 22px;
  background: rgba(12, 10, 24, 0.65);
  border: 1px solid rgba(127, 90, 240, 0.22);
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.04);
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.contact-page__hero-meta span {
  font-size: 12px;
  letter-spacing: 0.28em;
  text-transform: uppercase;
  color: rgba(245, 245, 255, 0.6);
}

.contact-page__hero-meta p {
  margin: 0;
  font-size: 15px;
  color: rgba(245, 245, 255, 0.82);
  line-height: 1.5;
}

.contact-page__grid-heading {
  max-width: 620px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  color: var(--color-text);
}

.contact-page__grid-heading h3 {
  font-size: clamp(28px, 3.4vw, 36px);
}

.contact-page__grid-heading p {
  color: var(--color-text-muted);
  line-height: 1.7;
}

.contact-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 28px;
}

@media (max-width: 1100px) {
  .contact-page__hero {
    grid-template-columns: 1fr;
  }

  .contact-page__hero-meta {
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  }

  .contact-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 720px) {
  .contact-page {
    padding: 90px 0 80px;
  }

  .contact-page__wrapper {
    gap: 48px;
  }

  .contact-page__hero-card {
    padding: 32px 28px;
  }

  .contact-page__hero-actions {
    justify-content: center;
  }

  .contact-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 520px) {
  .contact-page__hero-actions {
    flex-direction: column;
  }

  .contact-page__hero-meta {
    grid-template-columns: 1fr;
  }
}

@keyframes contactHalo {
  0% {
    transform: translate3d(0, 0, 0) scale(1);
    opacity: 0.75;
  }
  50% {
    transform: translate3d(-3%, 4%, 0) scale(1.05);
    opacity: 0.95;
  }
  100% {
    transform: translate3d(3%, -4%, 0) scale(1.02);
    opacity: 0.78;
  }
}

@keyframes contactGlow {
  0% {
    transform: rotate(0deg) scale(1);
    opacity: 0.5;
  }
  50% {
    transform: rotate(6deg) scale(1.05);
    opacity: 0.7;
  }
  100% {
    transform: rotate(-6deg) scale(0.98);
    opacity: 0.55;
  }
}
</style>
