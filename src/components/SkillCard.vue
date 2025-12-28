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
  border-radius: 18px;
  padding: 28px 24px;
  text-align: center;
  color: var(--color-text);
  transition:
    transform 0.35s ease,
    box-shadow 0.35s ease;
  background: linear-gradient(
      140deg,
      rgba(127, 90, 240, 0.32),
      rgba(127, 90, 240, 0.08)
    )
    border-box;
  border: 1px solid rgba(127, 90, 240, 0.28);
  box-shadow:
    0 18px 40px rgba(8, 5, 19, 0.35),
    inset 0 1px 0 rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(18px);
}

.skill-card:hover {
  transform: translateY(-8px) scale(1.01);
  box-shadow:
    0 28px 55px rgba(8, 5, 19, 0.45),
    inset 0 1px 0 rgba(255, 255, 255, 0.12);
}

.skill-card__title {
  font-size: 40px;
  font-weight: bold;
  margin-bottom: 10px;
  font-family: "Space Grotesk", sans-serif;
}

.skill-card__experience {
  font-size: 16px;
  color: var(--color-text-muted);
  border-top: 1px solid rgba(245, 245, 255, 0.12);
  padding-top: 12px;
  margin-top: 12px;
  font-family: "Space Grotesk", sans-serif;
  letter-spacing: 0.04em;
}

@media (max-width: 768px) {
  .skill-card {
    padding: 24px 18px;
  }

  .skill-card__title {
    font-size: 32px;
  }
}
</style>
