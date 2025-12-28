<template>
  <footer class="footer">
    <div class="page-wrapper footer__inner">
      <div class="footer__brand">
        <span class="footer__mark">JH</span>
        <p>
          Construyendo experiencias digitales enfocadas en rendimiento, detalle
          y colaboraci&oacute;n con equipos multidisciplinarios.
        </p>
      </div>
      <div class="footer__meta">
        <span class="footer__label">Disponible para proyectos remotos</span>
        <a
          href="mailto:jhosep.guzman2022@gmail.com"
          class="footer__contact"
          aria-label="Escr&iacute;beme un correo"
        >
          jhosep.guzman2022@gmail.com
        </a>
        <a
          href="https://github.com/Jhosep2022"
          class="footer__github"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="../assets/Github_light.svg" alt="Github" />
        </a>
      </div>
    </div>
  </footer>
</template>

<script setup></script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;700&display=swap");

.footer {
  border-top: 1px solid rgba(255, 255, 255, 0.08);
  background: linear-gradient(180deg, rgba(8, 5, 19, 0.5) 0%, rgba(8, 5, 19, 0.88) 100%);
  padding: 56px 0 42px;
  position: relative;
  overflow: hidden;
}

.footer::before {
  content: "";
  position: absolute;
  top: -160px;
  left: -160px;
  width: 360px;
  height: 360px;
  border-radius: 50%;
  background: rgba(127, 90, 240, 0.24);
  filter: blur(95px);
  pointer-events: none;
}

.footer__inner {
  width: min(100%, var(--max-content-width));
  margin: 0 auto;
  padding: 0 24px;
  display: grid;
  grid-template-columns: minmax(0, 1.1fr) minmax(0, 0.9fr);
  align-items: center;
  gap: 40px;
  color: var(--color-text);
}

.footer__brand {
  display: flex;
  align-items: center;
  gap: 18px;
  max-width: 540px;
}

.footer__mark {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  border-radius: 16px;
  background: linear-gradient(140deg, rgba(127, 90, 240, 0.85), rgba(44, 182, 125, 0.92));
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: #0b0613;
  box-shadow:
    0 18px 30px rgba(8, 5, 19, 0.45),
    inset 0 1px 0 rgba(255, 255, 255, 0.08);
}

.footer__brand p {
  margin: 0;
  line-height: 1.7;
  color: var(--color-text-muted);
  font-size: 15px;
}

.footer__meta {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 12px;
  text-align: right;
}

.footer__label {
  font-size: 12px;
  letter-spacing: 0.32em;
  text-transform: uppercase;
  color: rgba(245, 245, 255, 0.58);
}

.footer__contact {
  font-size: 16px;
  font-weight: 600;
  color: var(--color-primary);
  transition: color 0.3s ease;
}

.footer__contact:hover {
  color: var(--color-accent);
}

.footer__github img {
  width: 26px;
  height: 26px;
  filter: drop-shadow(0 0 10px rgba(127, 90, 240, 0.22));
  transition: transform 0.3s ease;
}

.footer__github:hover img {
  transform: translateY(-3px);
}

@media (max-width: 900px) {
  .footer__inner {
    grid-template-columns: 1fr;
    gap: 28px;
  }

  .footer__meta {
    align-items: flex-start;
    text-align: left;
  }
}

@media (max-width: 600px) {
  .footer {
    padding: 44px 0 32px;
  }

  .footer__inner {
    padding: 0 20px;
  }
}
</style>
