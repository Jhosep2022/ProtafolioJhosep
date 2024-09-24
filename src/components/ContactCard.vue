<template>
  <div class="contact-card">
    <div class="contact-card__header">
      <img :src="icon" alt="icon" class="contact-card__icon" />
      <h3 class="contact-card__title">{{ title }}</h3>
    </div>
    <p class="contact-card__description">{{ description }}</p>
    <div class="contact-card__actions">
      <a :href="link" target="_blank" class="contact-card__link">
        <img
          src="@/assets/share.svg"
          alt="share"
          class="svg-icon"
          style="color: #ffffff"
        />
      </a>
      <button @click="copyLink" class="contact-card__copy">
        <img
          v-if="!copied"
          src="@/assets/copi1.svg"
          alt="copy-regular"
          class="svg-icon"
          style="color: #ffffff"
        />
        <img
          v-else
          src="@/assets/copy2.svg"
          alt="copy-solid"
          class="svg-icon"
        />
        <font-awesome-icon :icon="['fas', 'copy']" style="color: #ffffff" />
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useToast } from "vue-toastification";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
const props = defineProps({
  title: String,
  description: String,
  link: String,
  icon: String,
});

const copied = ref(false);
const toast = useToast();

const copyLink = () => {
  navigator.clipboard.writeText(props.link);
  copied.value = true;
  toast.success("Link copiado al portapapeles");

  setTimeout(() => {
    copied.value = false;
  }, 2000);
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;700&display=swap");

.contact-card {
  background-color: transparent; /* Fondo transparente */
  padding: 20px;
  border-radius: 10px;
  color: white;
  box-shadow: 0 4px 8px rgba(243, 0, 255, 1); /* Sombra con el color solicitado */
  transition: transform 0.2s;
  max-width: 300px;
  position: relative;
}

.contact-card:hover {
  transform: translateY(-5px);
}

.contact-card__header {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
}

.contact-card__icon {
  width: 30px;
  height: 30px;
  margin-right: 10px;
}

.contact-card__title {
  font-size: 18px;
  font-weight: bold;
  font-family: "Space Grotesk", sans-serif;
}

.contact-card__description {
  font-size: 14px;
  margin-bottom: 15px;
  color: #bbb;
  font-family: "Space Grotesk", sans-serif;
}

.contact-card__actions {
  display: flex;
  position: absolute;
  top: 10px;
  right: 10px;
  gap: 10px;
}

.contact-card__link,
.contact-card__copy {
  background: none;
  border: none;
  cursor: pointer;
  padding: 5px;
}

.svg-icon {
  width: 20px;
  height: 20px;
  fill: white;
  transition:
    transform 0.3s,
    fill 0.3s;
}

.contact-card__link:hover .svg-icon,
.contact-card__copy:hover .svg-icon {
  transform: scale(1.2);
  fill: #7f5af0;
}
</style>
