<template>
  <div class="home">
    <section id="hero" class="hero">
      <div class="page-wrapper hero__wrapper">
        <div class="hero__copy">
          <div class="hero__card">
            <span class="hero__pill">Agenda una asesor&iacute;a</span>
            <span class="hero__eyebrow">Desarrollador Full Stack &amp; Mobile</span>
            <h2 class="hero__title">
              Encantado de conocerte, soy
              <span class="hero__highlight">Jose</span>
            </h2>
            <p class="hero__description">
              &iquest;Los errores te est&aacute;n frenando? Agendemos una asesor&iacute;a personalizada,
              detectemos fallos en vivo y desbloqueemos tu progreso con pr&aacute;cticas
              actuales de desarrollo.
            </p>
            <div class="hero__cta">
              <router-link to="/contactpage" class="hero__primary">
                Agendar asesor&iacute;a
              </router-link>
              <a href="#projects" class="hero__secondary">Ver proyectos</a>
            </div>
            <dl class="hero__stats">
              <div>
                <dt>+6</dt>
                <dd>A&ntilde;os construyendo apps</dd>
              </div>
              <div>
                <dt>+40</dt>
                <dd>Sprints acompa&ntilde;ados</dd>
              </div>
              <div>
                <dt>92%</dt>
                <dd>Incidencias resueltas en vivo</dd>
              </div>
            </dl>
            <ul class="hero__highlights">
              <li>Revisi&oacute;n de bugs y arquitectura en tiempo real</li>
              <li>Mentor&iacute;a en Vue, Flutter y entornos h&iacute;bridos</li>
              <li>Automatizaci&oacute;n de despliegues y performance</li>
            </ul>
          </div>
        </div>
        <div class="hero__portrait">
          <div class="hero__halo"></div>
          <img src="../assets/img3.jpg" alt="Desarrollador" />
          
        </div>
      </div>
    </section>

    <section class="skills-section">
      <div class="page-wrapper skills-section__wrapper">
        <header class="section-heading">
          <span class="section-heading__eyebrow">Servicios clave</span>
          <h3>Lo que puedo aportar a tu pr&oacute;ximo proyecto</h3>
        </header>
        <div class="skills-grid">
          <SkillCard title="Front-end" experience="50+ horas afinando UI/UX" />
          <SkillCard title="Back-end" experience="150+ horas integrando APIs" />
          <SkillCard
            title="Mobile"
            experience="6 a&ntilde;os creando apps multiplataforma"
          />
        </div>
      </div>
    </section>

    <StackList />

    <section id="projects" class="projects-section">
      <Projects />
    </section>

    <section id="contact" class="contact-section">
      <Contact />
    </section>
  </div>
</template>

<script setup>
import SkillCard from "../components/SkillCard.vue";
import StackList from "../components/StackList.vue";
import Projects from "../views/Projects.vue";
import Contact from "../views/Contact.vue";
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;700&display=swap");

.home {
  display: flex;
  flex-direction: column;
  gap: 120px;
  color: var(--color-text);
}

.hero {
  position: relative;
  padding: 120px 0 80px;
  overflow: hidden;
}

.hero::before,
.hero::after {
  content: "";
  position: absolute;
  width: 520px;
  height: 520px;
  border-radius: 50%;
  filter: blur(90px);
  opacity: 0.55;
  pointer-events: none;
}

.hero::before {
  top: -220px;
  left: -180px;
  background: rgba(127, 90, 240, 0.45);
}

.hero::after {
  bottom: -240px;
  right: -160px;
  background: rgba(44, 182, 125, 0.35);
}

.hero__wrapper {
  position: relative;
  display: grid;
  align-items: center;
  grid-template-columns: minmax(0, 1.1fr) minmax(0, 0.9fr);
  gap: 72px;
}

.hero__copy {
  display: flex;
  justify-content: flex-start;
}

.hero__card {
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding: 42px 44px 48px;
  max-width: 580px;
  border-radius: 32px;
  background: linear-gradient(145deg, rgba(16, 12, 32, 0.95), rgba(12, 10, 24, 0.78));
  border: 1px solid rgba(127, 90, 240, 0.38);
  box-shadow:
    0 24px 60px rgba(6, 4, 20, 0.6),
    inset 0 1px 0 rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(18px);
}

.hero__pill {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 8px 14px;
  border-radius: 999px;
  background: rgba(127, 90, 240, 0.16);
  border: 1px solid rgba(127, 90, 240, 0.4);
  color: rgba(245, 245, 255, 0.85);
  font-size: 12px;
  letter-spacing: 0.28em;
  text-transform: uppercase;
}

.hero__eyebrow {
  font-size: 14px;
  letter-spacing: 0.32em;
  text-transform: uppercase;
  color: rgba(245, 245, 255, 0.55);
}

.hero__title {
  font-size: clamp(44px, 5vw, 68px);
  font-weight: 700;
  line-height: 1.08;
}

.hero__highlight {
  color: var(--color-primary);
  position: relative;
}

.hero__highlight::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: -10px;
  width: 100%;
  height: 10px;
  border-radius: 999px;
  background: linear-gradient(90deg, rgba(127, 90, 240, 0.7), rgba(44, 182, 125, 0.6));
  opacity: 0.85;
}

.hero__description {
  color: var(--color-text-muted);
  font-size: 18px;
  line-height: 1.7;
}

.hero__cta {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
}

.hero__primary {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 14px 26px;
  border-radius: 14px;
  background: linear-gradient(140deg, rgba(127, 90, 240, 0.95), rgba(44, 182, 125, 0.95));
  color: #0b0613;
  font-weight: 600;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;
}

.hero__primary:hover {
  transform: translateY(-4px);
  box-shadow: 0 22px 42px rgba(127, 90, 240, 0.32);
}

.hero__secondary {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 14px 22px;
  border-radius: 14px;
  border: 1px solid rgba(127, 90, 240, 0.45);
  color: var(--color-text);
  font-weight: 500;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  transition:
    color 0.3s ease,
    background 0.3s ease,
    transform 0.3s ease;
}

.hero__secondary:hover {
  color: var(--color-primary);
  background: rgba(127, 90, 240, 0.12);
  transform: translateY(-2px);
}

.hero__stats {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 18px;
  padding: 18px 0 6px;
  border-top: 1px solid rgba(245, 245, 255, 0.08);
  border-bottom: 1px solid rgba(245, 245, 255, 0.08);
  margin: 0;
}

.hero__stats div {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.hero__stats dt {
  font-size: 26px;
  font-weight: 700;
  color: var(--color-primary);
  letter-spacing: 0.08em;
}

.hero__stats dd {
  margin: 0;
  font-size: 13px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: rgba(245, 245, 255, 0.65);
}

.hero__highlights {
  list-style: none;
  display: grid;
  gap: 12px;
  margin: 0;
  padding: 0;
  color: rgba(245, 245, 255, 0.78);
  font-size: 15px;
  letter-spacing: 0.04em;
}

.hero__highlights li {
  display: flex;
  align-items: center;
  gap: 12px;
}

.hero__highlights li::before {
  content: "";
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: linear-gradient(140deg, rgba(127, 90, 240, 0.8), rgba(44, 182, 125, 0.8));
  box-shadow: 0 0 12px rgba(127, 90, 240, 0.6);
}

.hero__portrait {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}

.hero__halo {
  position: absolute;
  inset: -18%;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(127, 90, 240, 0.42), transparent 70%);
  filter: blur(6px);
}

.hero__portrait img {
  width: min(420px, 95%);
  border-radius: 46% 54% 48% 52%;
  border: 2px solid rgba(255, 255, 255, 0.12);
  box-shadow:
    0 35px 80px rgba(10, 6, 24, 0.62),
    inset 0 1px 0 rgba(255, 255, 255, 0.08);
}

.hero__badge {
  position: absolute;
  bottom: 38px;
  right: 32px;
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding: 12px 18px;
  border-radius: 16px;
  background: rgba(8, 5, 19, 0.88);
  border: 1px solid rgba(127, 90, 240, 0.45);
  box-shadow: 0 16px 30px rgba(8, 5, 19, 0.55);
}

.hero__badge span {
  font-size: 12px;
  letter-spacing: 0.28em;
  text-transform: uppercase;
  color: rgba(245, 245, 255, 0.55);
}

.hero__badge strong {
  font-size: 15px;
  letter-spacing: 0.04em;
  color: var(--color-primary);
}

.skills-section {
  position: relative;
}

.skills-section__wrapper {
  display: flex;
  flex-direction: column;
  gap: 52px;
}

.section-heading {
  display: flex;
  flex-direction: column;
  gap: 14px;
  max-width: 560px;
}

.section-heading__eyebrow {
  font-size: 13px;
  letter-spacing: 0.32em;
  text-transform: uppercase;
  color: rgba(245, 245, 255, 0.48);
}

.section-heading h3 {
  font-size: clamp(32px, 3.8vw, 44px);
  line-height: 1.2;
}

.skills-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 28px;
}

.projects-section,
.contact-section {
  position: relative;
  z-index: 1;
}

@media (max-width: 1180px) {
  .hero__wrapper {
    grid-template-columns: 1fr;
    gap: 64px;
  }

  .hero__copy {
    justify-content: center;
  }

  .hero__card {
    text-align: center;
    align-items: center;
  }

  .hero__card,
  .hero__description {
    max-width: 640px;
  }

  .hero__cta {
    justify-content: center;
  }

  .hero__stats {
    justify-items: center;
  }

  .hero__highlights {
    text-align: left;
  }

  .hero__badge {
    right: 50%;
    transform: translateX(50%);
  }
}

@media (max-width: 768px) {
  .home {
    gap: 90px;
  }

  .hero {
    padding: 96px 0 60px;
  }

  .hero__card {
    padding: 32px 28px 36px;
    gap: 20px;
  }

  .hero__stats {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 14px;
  }

  .skills-grid {
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  }
}

@media (max-width: 560px) {
  .home {
    gap: 72px;
  }

  .hero {
    padding: 84px 0 52px;
  }

  .hero__stats {
    grid-template-columns: 1fr;
  }

  .hero__badge {
    bottom: 22px;
  }
}
</style>
