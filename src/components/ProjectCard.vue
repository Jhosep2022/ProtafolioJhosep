<template>
  <div class="project-card">
    <img :src="image" alt="Project Image" />
    <div class="project-card__content">
      <h3>{{ title }}</h3>
      <p>{{ description }}</p>
    </div>
  </div>
</template>

<script setup>
defineProps({
  title: String,
  description: String,
  image: String,
});
</script>

<style scoped>
.project-card {
  background: rgb(132, 0, 255);
  background: linear-gradient(
    0deg,
    rgba(132, 0, 255, 1) 0%,
    rgba(5, 3, 8, 1) 20%
  );
  border-radius: 10px;
  overflow: hidden;
  text-align: center;
  color: white;
}

.project-card img {
  width: 100%;
  height: auto;
}

.project-card__content {
  padding: 20px;
}

/* Para tabletas (pantallas medianas) */
@media (max-width: 1024px) {
  .project-card__content {
    padding: 15px;
  }

  .project-card h3 {
    font-size: 20px;
  }

  .project-card p {
    font-size: 14px;
  }
}

/* Para móviles (pantallas pequeñas) */
@media (max-width: 600px) {
  .project-card__content {
    padding: 10px;
  }

  .project-card h3 {
    font-size: 18px;
  }

  .project-card p {
    font-size: 12px;
  }
}
</style>
