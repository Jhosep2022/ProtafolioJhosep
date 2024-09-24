<template>
  <div class="projects">
    <div class="projects__header">
      <h2>Projects</h2>
      <button type="submit" class="contact__submit">Ver más</button>
    </div>
    <div class="projects__grid">
      <ProjectCard
        title="Design Portfolio"
        description="HTML, CSS"
        :image="designPortfolioImg"
      />
      <ProjectCard
        title="E-learning Landing Page"
        description="HTML, CSS, JS"
        :image="elearningLandingPageImg"
      />
      <ProjectCard
        title="Todo Web App"
        description="HTML, CSS, JavaScript"
        :image="todoWebAppImg"
      />
      <ProjectCard
        title="Entertainment Web App"
        description="HTML, CSS, JavaScript"
        :image="entertainmentWebAppImg"
      />
      <ProjectCard
        title="Memory Game"
        description="HTML, CSS, JavaScript"
        :image="memoryGameImg"
      />
      <ProjectCard
        title="Art Gallery Showcase"
        description="HTML, CSS, JavaScript"
        :image="artGalleryShowcaseImg"
      />
    </div>
  </div>
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
  padding: 50px 100px;
  color: white;
  width: 100%;
  box-sizing: border-box;
  font-family: "Space Grotesk", sans-serif;
}

.projects__header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 40px;
}

.projects__grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  width: 100%;
  box-sizing: border-box;
}

.projects h2 {
  font-size: 56px;
  margin: 0;
}

.contact__submit {
  padding: 10px 20px;
  border: none;
  background-color: transparent;
  color: white;
  font-family: "Space Grotesk", sans-serif;
  font-size: 16px;
  letter-spacing: 1px;
  position: relative;
  cursor: pointer;
  text-transform: uppercase;
  outline: none;
}

.contact__submit::after {
  content: "";
  position: absolute;
  width: 100%;
  height: 2px;
  background-color: #7f5af0;
  left: 0;
  bottom: -5px;
  transition: all 0.3s ease-in-out;
}

.contact__submit:hover::after {
  width: 100%;
}

.contact__submit:hover {
  color: #7f5af0;
}

.contact__submit:active {
  transform: scale(0.98);
}

/* ===================== Responsive Styles ===================== */

/* Para tabletas (pantallas medianas) */
@media (max-width: 1024px) {
  .projects {
    padding: 40px 50px;
  }

  .projects h2 {
    font-size: 48px;
  }

  .projects__grid {
    grid-template-columns: repeat(2, 1fr); /* 2 columnas en tabletas */
    gap: 20px;
  }

  .contact__submit {
    font-size: 14px;
  }
}

/* Para móviles (pantallas pequeñas) */
@media (max-width: 600px) {
  .projects {
    padding: 20px 20px;
  }

  .projects h2 {
    font-size: 36px;
  }

  .projects__grid {
    grid-template-columns: 1fr; /* 1 columna en móviles */
    gap: 20px;
  }

  .contact__submit {
    font-size: 12px;
  }
}
</style>
