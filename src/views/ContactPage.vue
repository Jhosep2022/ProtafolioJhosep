<template>
  <div class="contact-page">
    <h2 class="contact-page__title">Mis Redes Sociales</h2>
    <div class="contact-grid">
      <ContactCard
        title="Discord"
        description="Únete a mi servidor de Discord, donde podemos discutir proyectos, colaborar en ideas y resolver tus preguntas en tiempo real. ¡Te espero!"
        link="https://discord.com/invite/tu-servidor"
        :icon="discordIcon"
      />
      <ContactCard
        title="Github"
        description="Explora mi portafolio de proyectos en GitHub. Aquí es donde comparto código, colaboro en repositorios abiertos y muestro mi experiencia en desarrollo."
        link="https://github.com/tu-cuenta"
        :icon="githubIcon"
      />
      <ContactCard
        title="Twitter"
        description="Sígueme en Twitter para estar al día con mis últimas publicaciones sobre desarrollo, tecnología y consejos útiles. ¡Vamos a conectar!"
        link="https://twitter.com/tu-cuenta"
        :icon="twitterIcon"
      />
      <ContactCard
        title="Instagram"
        description="Echa un vistazo a mi vida como desarrollador en Instagram. Comparte conmigo momentos inspiradores, proyectos recientes y más."
        link="https://instagram.com/tu-cuenta"
        :icon="instaIcon"
      />
      <ContactCard
        title="Facebook"
        description="Conéctate conmigo en Facebook para acceder a contenido exclusivo, actualizaciones de proyectos y oportunidades de colaboración."
        link="https://facebook.com/tu-cuenta"
        :icon="faceIcon"
      />
      <ContactCard
        title="Linkedin"
        description="Descubre mi trayectoria profesional en LinkedIn. Hablemos de oportunidades laborales, networking y cómo puedo ayudarte en tu próximo proyecto."
        link="https://linkedin.com/in/tu-cuenta"
        :icon="linkedinIcon"
      />
      <ContactCard
        title="Whatsapp"
        description="¡Hablemos! Contáctame directamente en WhatsApp para consultas rápidas, preguntas sobre proyectos o simplemente para saludar."
        link="https://wa.me/tu-numero"
        :icon="whatsappIcon"
      />
      <ContactCard
        title="Telegram"
        description="¿Prefieres Telegram? Escríbeme directamente para discutir ideas, resolver dudas o simplemente ponerte en contacto conmigo."
        link="https://t.me/tu-cuenta"
        :icon="telegramIcon"
      />
      <ContactCard
        title="Email"
        description="Para consultas detalladas, propuestas de proyectos o cualquier comunicación formal, envíame un correo electrónico. Estoy disponible para ayudarte."
        link="mailto:tu-email@example.com"
        :icon="emailIcon"
      />
      <ContactCard
        title="Tiktok"
        description="Sígueme en TikTok para contenido divertido y educativo sobre desarrollo, tecnología y más. ¡No te pierdas los tips rápidos y hacks!"
        link="https://tiktok.com/@tu-cuenta"
        :icon="tiktokIcon"
      />
    </div>
  </div>
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
  padding: 50px;
  background: rgb(85, 38, 116);
  background: radial-gradient(
    circle,
    rgba(85, 38, 116, 1) 0%,
    rgba(0, 0, 0, 1) 42%
  );
  color: white;
}

.contact-page__title {
  font-family: "Space Grotesk", sans-serif;
  font-size: 36px;
  margin-bottom: 30px;
  text-align: center;
}

.contact-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}

@media (max-width: 1024px) {
  .contact-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .contact-page__title {
    font-size: 30px;
  }
}

@media (max-width: 600px) {
  .contact-grid {
    grid-template-columns: 1fr;
  }

  .contact-page {
    padding: 20px;
  }

  .contact-page__title {
    font-size: 24px;
  }
}
</style>
