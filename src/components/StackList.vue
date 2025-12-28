<template>
  <section class="stack-list">
    <div class="page-wrapper stack-list__wrapper">
      <header class="stack-list__header">
        <span class="stack-list__eyebrow">Tecnologías favoritas</span>
        <h2>Mi stack principal</h2>
        <p>
          Experiencia en frameworks front-end, entornos mobile y herramientas
          que permiten entregar productos consistentes y escalables.
        </p>
      </header>
      <div class="stack-items">
        <div
          v-for="(stack, index) in stacks"
          :key="stack.name"
          :class="['stack-item', { 'stack-item--active': activeStack === stack.name }]"
          :style="{ '--accent': stack.accent, '--index': index }"
          @mouseover="hover(stack.name)"
          @mouseleave="hover('')"
        >
          <div class="stack-item__icon">
            <img v-if="stack.icon" :src="stack.icon" :alt="stack.name" />
            <span v-else>{{ stack.initials }}</span>
          </div>
          <p :class="{ hovered: activeStack === stack.name }">{{ stack.name }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onBeforeUnmount, onMounted, ref } from "vue";

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
import cssIcon from "@/assets/css.svg";
import viteIcon from "@/assets/vitejs.svg";
import vscodeIcon from "@/assets/vscode.svg";
import laravelIcon from "@/assets/laravel.svg";
import postmanIcon from "@/assets/postman.svg";

const stacks = ref([
  { name: "Angular", icon: angularIcon, accent: "#DD0031" },
  { name: "Vue", icon: vueIcon, accent: "#42B883" },
  { name: "React", icon: reactIcon, accent: "#61DAFB" },
  { name: "JavaScript", icon: javascriptIcon, accent: "#F7DF1E" },
  { name: "TypeScript", initials: "TS", accent: "#3178C6" },
  { name: "HTML5", icon: html5Icon, accent: "#E34F26" },
  { name: "CSS3", icon: cssIcon, accent: "#1572B6" },
  { name: "Flutter", icon: flutterIcon, accent: "#54C5F8" },
  { name: "Kotlin", initials: "KT", accent: "#A97BFF" },
  { name: "Android", initials: "AND", accent: "#3DDC84" },
  { name: "Java", icon: javaIcon, accent: "#007396" },
  { name: "Spring", icon: springIcon, accent: "#6DB33F" },
  { name: "Node.js", initials: "ND", accent: "#3C873A" },
  { name: "Python", initials: "PY", accent: "#3776AB" },
  { name: "Docker", icon: dockerIcon, accent: "#099CEC" },
  { name: "PostgreSQL", icon: postgresqlIcon, accent: "#336791" },
  { name: "AWS", initials: "AWS", accent: "#FF9900" },
  { name: "GitHub Actions", initials: "GA", accent: "#2F7BFF" },
  { name: "Tailwind CSS", initials: "TW", accent: "#38BDF8" },
  { name: "Vite", icon: viteIcon, accent: "#646CFF" },
  { name: "Laravel", icon: laravelIcon, accent: "#FF2D20" },
  { name: "Postman", icon: postmanIcon, accent: "#FF6C37" },
  { name: "VS Code", icon: vscodeIcon, accent: "#007ACC" },
  { name: "Figma", initials: "FG", accent: "#F24E1E" },
  { name: "Firebase", initials: "FB", accent: "#FFCA28" },
]);

const activeStack = ref(stacks.value[0]?.name ?? "");
const autoIndex = ref(0);
let autoInterval;

const stopAutoCycle = () => {
  if (autoInterval) {
    window.clearInterval(autoInterval);
    autoInterval = undefined;
  }
};

const startAutoCycle = () => {
  stopAutoCycle();
  if (!stacks.value.length) return;
  autoInterval = window.setInterval(() => {
    autoIndex.value = (autoIndex.value + 1) % stacks.value.length;
    activeStack.value = stacks.value[autoIndex.value].name;
  }, 2400);
};

function hover(stackName) {
  if (stackName) {
    stopAutoCycle();
    activeStack.value = stackName;
    const index = stacks.value.findIndex((stack) => stack.name === stackName);
    if (index !== -1) autoIndex.value = index;
  } else {
    startAutoCycle();
  }
}

onMounted(() => {
  if (stacks.value.length) {
    activeStack.value = stacks.value[0].name;
    autoIndex.value = 0;
    startAutoCycle();
  }
});

onBeforeUnmount(() => {
  stopAutoCycle();
});
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;700&display=swap");

.stack-list {
  margin-top: 80px;
  width: 100%;
  position: relative;
}

.stack-list::before {
  content: "";
  position: absolute;
  inset: 0;
  background: radial-gradient(
    circle at center,
    rgba(127, 90, 240, 0.14),
    transparent 65%
  );
  pointer-events: none;
}

.stack-list__wrapper {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 48px;
}

.stack-list__header {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 16px;
  max-width: 720px;
  margin: 0 auto;
  color: var(--color-text);
}

.stack-list__eyebrow {
  font-size: 14px;
  text-transform: uppercase;
  letter-spacing: 0.28em;
  color: rgba(245, 245, 255, 0.6);
}

.stack-list__header h2 {
  font-size: clamp(32px, 4vw, 44px);
  font-weight: 700;
}

.stack-list__header p {
  color: var(--color-text-muted);
  line-height: 1.7;
  font-size: 16px;
}

.stack-items {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
  gap: 24px;
}

.stack-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 14px;
  border-radius: 18px;
  padding: 28px 18px;
  cursor: pointer;
  transition:
    transform 0.35s ease,
    box-shadow 0.35s ease,
    border-color 0.35s ease,
    filter 0.35s ease;
  position: relative;
  background: linear-gradient(160deg, rgba(12, 9, 26, 0.82), rgba(8, 5, 18, 0.72));
  border: 1px solid rgba(255, 255, 255, 0.04);
  box-shadow:
    0 18px 36px rgba(8, 5, 19, 0.34),
    inset 0 1px 0 rgba(255, 255, 255, 0.02);
  backdrop-filter: blur(12px);
  animation: float 9s ease-in-out infinite;
  animation-delay: calc(var(--index) * -0.25s);
}

.stack-item::before {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: inherit;
  background: radial-gradient(circle at 30% 30%, color-mix(in srgb, var(--accent) 45%, transparent) 0%, transparent 65%);
  opacity: 0.4;
  transition: opacity 0.35s ease;
  z-index: 0;
}

.stack-item--active,
.stack-item:hover {
  transform: translateY(-8px);
  border-color: color-mix(in srgb, var(--accent) 55%, transparent);
  box-shadow:
    0 28px 60px rgba(8, 5, 19, 0.55),
    inset 0 1px 0 rgba(255, 255, 255, 0.05);
  filter: saturate(1.1);
}

.stack-item--active::before,
.stack-item:hover::before {
  opacity: 0.75;
}

.stack-item__icon {
  width: 56px;
  height: 56px;
  display: grid;
  place-items: center;
  border-radius: 50%;
  background: linear-gradient(150deg, color-mix(in srgb, var(--accent) 65%, rgba(12, 10, 24, 0.85)), rgba(12, 10, 24, 0.88));
  border: 1px solid color-mix(in srgb, var(--accent) 45%, rgba(255, 255, 255, 0.04));
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.06);
  position: relative;
  z-index: 1;
}

.stack-item__icon img {
  width: 32px;
  height: 32px;
  object-fit: contain;
}

.stack-item__icon span {
  font-weight: 700;
  font-size: 15px;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: #0b0613;
}

p {
  margin: 0;
  font-size: 15px;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: rgba(245, 245, 255, 0.72);
  transition:
    color 0.3s ease,
    text-shadow 0.3s ease;
  position: relative;
  z-index: 1;
}

.hovered {
  color: var(--color-primary);
  text-shadow: 0 0 18px rgba(127, 90, 240, 0.55);
}

@keyframes float {
  0% {
    transform: translate3d(0, 0, 0);
  }
  50% {
    transform: translate3d(0, -8px, 0);
  }
  100% {
    transform: translate3d(0, 0, 0);
  }
}

@media (max-width: 768px) {
  .stack-list {
    margin-top: 60px;
  }

  .stack-items {
    gap: 18px;
  }

  .stack-item {
    padding: 22px 16px;
    animation-duration: 7s;
  }
}
</style>
