<template>
  <section class="projects">
    <div class="page-wrapper projects__wrapper">
      <div class="projects__header">
        <div class="projects__heading">
          <span class="projects__eyebrow">Selección reciente</span>
          <h2>
            Casos de estudio y productos donde mezclé diseño, código y estrategia
          </h2>
        </div>
        <a href="#contact" class="projects__cta">Solicitar demo</a>
      </div>

      <div class="projects__grid">
        <ProjectCard
          title="Design Portfolio"
          summary="Sistema modular para mostrar estudios de diseño con componentes reusables y modo oscuro."
          stack="HTML · CSS"
          :image="designPortfolioImg"
        />
        <ProjectCard
          title="E-learning Landing Page"
          summary="Landing page educativa con métricas en tiempo real y formularios conversacionales."
          stack="HTML · CSS · JS"
          :image="elearningLandingPageImg"
        />
        <ProjectCard
          title="Todo Web App"
          summary="Gestor de tareas con sincronización offline, filtros avanzados y analytics ligeros."
          stack="HTML · CSS · JavaScript"
          :image="todoWebAppImg"
        />
        <ProjectCard
          title="Entertainment Web App"
          summary="Catálogo multimedia con temas dinámicos, accesibilidad mejorada y recomendaciones personalizadas."
          stack="HTML · CSS · JavaScript"
          :image="entertainmentWebAppImg"
        />
        <ProjectCard
          title="Memory Game"
          summary="Juego web optimizado para mobile con animaciones suaves y niveles configurables."
          stack="HTML · CSS · JavaScript"
          :image="memoryGameImg"
        />
        <ProjectCard
          title="Art Gallery Showcase"
          summary="Galería interactiva con layout masonry, carga progresiva y administración de piezas."
          stack="HTML · CSS · JavaScript"
          :image="artGalleryShowcaseImg"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
import ProjectCard from "../components/ProjectCard.vue";
import designPortfolioImg from "@/assets/image.png";
import elearningLandingPageImg from "@/assets/image.png";
import todoWebAppImg from "@/assets/image.png";
import entertainmentWebAppImg from "@/assets/image.png";
import memoryGameImg from "@/assets/image.png";
import artGalleryShowcaseImg from "@/assets/image.png";
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;700&display=swap");

.projects {
  padding: 20px 0 0;
}

.projects__wrapper {
  display: flex;
  flex-direction: column;
  gap: 48px;
}

.projects__header {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 32px;
  flex-wrap: wrap;
}

.projects__heading {
  max-width: 640px;
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.projects__eyebrow {
  font-size: 13px;
  letter-spacing: 0.32em;
  text-transform: uppercase;
  color: rgba(245, 245, 255, 0.48);
}

.projects__heading h2 {
  font-size: clamp(34px, 4vw, 48px);
  line-height: 1.25;
}

.projects__cta {
  align-self: flex-start;
  padding: 12px 22px;
  border-radius: 14px;
  border: 1px solid rgba(127, 90, 240, 0.5);
  color: var(--color-primary);
  text-transform: uppercase;
  font-size: 13px;
  letter-spacing: 0.12em;
  transition:
    transform 0.3s ease,
    background 0.3s ease,
    box-shadow 0.3s ease;
}

.projects__cta:hover {
  transform: translateY(-4px);
  background: rgba(127, 90, 240, 0.1);
  box-shadow: 0 15px 35px rgba(127, 90, 240, 0.22);
}

.projects__grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 28px;
}

@media (max-width: 1100px) {
  .projects__grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 720px) {
  .projects__grid {
    grid-template-columns: 1fr;
  }

  .projects__header {
    align-items: flex-start;
  }

  .projects__cta {
    align-self: stretch;
    text-align: center;
  }
}
</style>
