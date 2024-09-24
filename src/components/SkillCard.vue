<template>
  <div class="skill-card">
    <h3 class="skill-card__title">{{ title }}</h3>
    <p class="skill-card__experience">{{ experience }}</p>
  </div>
</template>

<script setup>
defineProps({
  title: String,
  experience: String,
});
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;700&display=swap");

.skill-card {
  border-radius: 8px;
  padding: 20px;
  text-align: center;
  color: white;
  transition:
    transform 0.3s,
    box-shadow 0.3s;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
}

.skill-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.4);
}

.skill-card__title {
  font-size: 48px;
  font-weight: bold;
  margin-bottom: 10px;
  font-family: "Space Grotesk", sans-serif;
}

.skill-card__experience {
  font-size: 18px;
  color: #bbb;
  border-top: 2px solid #7f5af0;
  padding-top: 10px;
  margin-top: 10px;
  font-family: "Space Grotesk", sans-serif;
}
</style>
