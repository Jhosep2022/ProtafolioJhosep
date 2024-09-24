<template>
  <div class="home">
    <section class="intro">
      <div class="intro__text">
        <h2 class="intro__greeting">
          ¡Encantado de conocerlo! Soy
          <span class="highlight">Jose</span>
        </h2>
        <p class="intro__description">
          ¿Los errores te están deteniendo? No dejes que los problemas de código
          te frustren más. Reserva una asesoría profesional conmigo y juntos
          resolveremos tus dudas y desafíos de programación.
        </p>
        <router-link to="/contactpage" class="contact__submit"
          >Contactame</router-link
        >
      </div>
      <div class="intro__image">
        <img src="../assets/img3.jpg" alt="Developer" />
      </div>
    </section>

    <!-- Línea divisoria -->
    <div class="divider"></div>

    <!-- Sección de Habilidades -->
    <section class="skills">
      <SkillCard title="Front-End" experience="50+ Hours Experience" />
      <SkillCard title="Back-End" experience="150+ Hours Experience" />
      <SkillCard title="Front-End-Mobile" experience="6 Years Experience" />
    </section>

    <StackList />

    <!-- Sección de Proyectos -->
    <section id="projects">
      <Projects />
    </section>

    <!-- Sección de Contacto -->
    <section id="contact">
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
  color: #fff;
}

.intro {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 50px 100px;
}

.intro__text {
  max-width: 50%;
}

.intro__greeting {
  font-family: "Space Grotesk", sans-serif;
  font-size: 48px;
  font-weight: bold;
  margin-bottom: 20px;
  line-height: 1.2;
  color: white;
}

.highlight {
  position: relative;
  display: inline-block;
}

.highlight::after {
  content: "";
  display: block;
  width: 100%;
  height: 4px;
  background-color: #7f5af0;
  position: absolute;
  bottom: -5px;
  left: 0;
}

.intro__description {
  font-family: "Space Grotesk", sans-serif;
  font-size: 16px;
  line-height: 1.4;
  margin-bottom: 20px;
  color: #bbb;
  max-width: 90%;
}

.intro__image {
  position: relative;
  width: 500px;
  max-width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
}

.intro__image img {
  width: 100%;
  border-radius: 250px;
  object-fit: cover;
}

.divider {
  width: 90%;
  height: 2px;
  background-color: #ffffff;
  margin: 40px auto;
}

.skills {
  display: flex;
  justify-content: space-around;
  margin-top: 50px;
  padding: 20px;
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
  text-decoration: none;
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

/* Para tabletas (pantallas medianas) */
@media (max-width: 1024px) {
  .intro {
    flex-direction: column;
    padding: 40px 50px;
  }

  .intro__text {
    max-width: 100%;
    text-align: center;
  }

  .intro__greeting {
    font-size: 36px;
  }

  .intro__description {
    font-size: 14px;
    max-width: 100%;
  }

  .intro__image {
    margin-top: 20px;
    width: 400px;
  }

  .skills {
    flex-direction: column;
    align-items: center;
  }
}

/* Para móviles (pantallas pequeñas) */
@media (max-width: 600px) {
  .intro {
    flex-direction: column;
    padding: 20px 20px;
  }

  .intro__text {
    text-align: center;
    max-width: 100%;
  }

  .intro__greeting {
    font-size: 28px;
  }

  .intro__description {
    font-size: 12px;
    max-width: 100%;
  }

  .intro__image {
    margin-top: 20px;
    width: 300px;
  }

  .skills {
    flex-direction: column;
    align-items: center;
    padding: 10px;
  }

  .skills .skill-card {
    margin-bottom: 20px;
  }
}
</style>
