<template>
  <div class="contact-card">
    <h3 class="contact-card__title">{{ title }}</h3>
    <p class="contact-card__description">{{ description }}</p>
    <a :href="link" target="_blank" class="contact-card__link">Visitar</a>
  </div>
</template>

<script setup>
defineProps({
  title: String,
  description: String,
  link: String,
});
</script>

<style scoped>
.contact-card {
  background-color: #2c2c2c;
  padding: 20px;
  border-radius: 10px;
  color: white;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  transition: transform 0.2s;
}

.contact-card:hover {
  transform: translateY(-5px);
}

.contact-card__title {
  font-size: 24px;
  margin-bottom: 10px;
}

.contact-card__description {
  font-size: 16px;
  margin-bottom: 15px;
  color: #bbb;
}

.contact-card__link {
  color: #7f5af0;
  text-decoration: none;
  font-weight: bold;
  text-transform: uppercase;
}

.contact-card__link:hover {
  color: white;
  text-decoration: underline;
}
</style>
