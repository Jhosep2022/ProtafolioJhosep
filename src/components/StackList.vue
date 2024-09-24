<template>
  <div class="stack-list">
    <h2>My Stack</h2>
    <div class="stack-items">
      <div
        v-for="stack in stacks"
        :key="stack.name"
        class="stack-item"
        @mouseover="hover(stack.name)"
        @mouseleave="hover('')"
      >
        <img :src="stack.icon" :alt="stack.name" class="stack-icon" />
        <p :class="{ hovered: activeStack === stack.name }">{{ stack.name }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

// Importa las imágenes directamente
import angularIcon from "@/assets/angular.svg";
import flutterIcon from "@/assets/flutter.svg";
import springIcon from "@/assets/spring.svg";
import javascriptIcon from "@/assets/javascript.svg";
import javaIcon from "@/assets/java.svg";
import reactIcon from "@/assets/react.svg";
import html5Icon from "@/assets/html5.svg";
import dockerIcon from "@/assets/docker.svg";
import postgresqlIcon from "@/assets/postgresql.svg";
import vueIcon from "@/assets/vue.svg";
const stacks = ref([
  { name: "Angular", icon: angularIcon },
  { name: "Flutter", icon: flutterIcon },
  { name: "Spring", icon: springIcon },
  { name: "JavaScript", icon: javascriptIcon },
  { name: "Java", icon: javaIcon },
  { name: "React", icon: reactIcon },
  { name: "HTML5", icon: html5Icon },
  { name: "Docker", icon: dockerIcon },
  { name: "PostgreSQL", icon: postgresqlIcon },
  { name: "Vue", icon: vueIcon },
]);

const activeStack = ref("");

function hover(stackName) {
  activeStack.value = stackName;
}
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;700&display=swap");

.stack-list {
  text-align: center;
  margin-top: 50px;
  color: white;
  font-family: "Space Grotesk", sans-serif;
}

.stack-items {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
}

.stack-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: transform 0.3s ease;
  cursor: pointer;
  padding: 20px;
}

.stack-item:hover {
  transform: scale(1.1);
}

.stack-icon {
  width: 60px;
  height: 60px;
}

p {
  margin-top: 10px;
  font-size: 16px;
  transition: color 0.3s ease;
}

.hovered {
  color: #7f5af0;
}
</style>
