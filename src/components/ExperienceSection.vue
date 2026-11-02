<template>
  <section id="experience" ref="root" class="experience">
    <div class="page-wrapper experience__wrapper">
      <header class="experience__heading">
        <p class="section-label"><b>02</b> Experiencia</p>
        <h2 class="section-title" data-split>Dónde he trabajado</h2>
      </header>

      <ol ref="timeline" class="experience__list">
        <span ref="line" class="experience__line" aria-hidden="true"></span>
        <li
          v-for="experience in experiences"
          :key="`${experience.company}-${experience.period}`"
          class="experience__item"
          data-experience-item
        >
          <p class="experience__period">{{ experience.period }}</p>
          <h3 class="experience__company">{{ experience.company }}</h3>
          <p class="experience__role">{{ experience.role }} · {{ experience.modality }}</p>
          <p class="experience__summary">{{ experience.summary }}</p>
          <ul class="experience__highlights">
            <li v-for="highlight in experience.highlights" :key="highlight">{{ highlight }}</li>
          </ul>
        </li>
      </ol>

      <div class="experience__education">
        <h3 class="section-label" data-reveal>Formación</h3>
        <ul>
          <li v-for="item in education" :key="item.title" data-reveal>
            <strong>{{ item.title }}</strong>
            <span>{{ item.detail }}</span>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";
import { MOTION_OK, ScrollTrigger, gsap, useMotion } from "@/composables/useMotion";
import { education, experiences } from "@/data/portfolio";

const root = ref(null);
const timeline = ref(null);
const line = ref(null);

useMotion(root, (mm) => {
  mm.add(MOTION_OK, () => {
    gsap.fromTo(
      line.value,
      { scaleY: 0 },
      {
        scaleY: 1,
        ease: "none",
        scrollTrigger: {
          trigger: timeline.value,
          start: "top 65%",
          end: "bottom 65%",
          scrub: true,
        },
      }
    );

    gsap.utils.toArray("[data-experience-item]", timeline.value).forEach((item) => {
      gsap.from(item, {
        y: 28,
        autoAlpha: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: { trigger: item, start: "top 85%", once: true },
      });

      ScrollTrigger.create({
        trigger: item,
        start: "top 65%",
        toggleClass: "experience__item--active",
      });
    });
  });
});
</script>

<style scoped>
.experience {
  padding-top: var(--section-gap);
}

.experience__wrapper {
  display: grid;
  grid-template-columns: minmax(0, 5fr) minmax(0, 7fr);
  gap: 64px;
}

.experience__heading {
  position: sticky;
  top: calc(var(--header-height) + 32px);
  align-self: start;
  display: grid;
  gap: 14px;
}

.experience__list {
  position: relative;
  display: grid;
  gap: 56px;
  list-style: none;
  padding-left: 32px;
  border-left: 1px solid var(--color-line);
}

.experience__line {
  position: absolute;
  top: 0;
  bottom: 0;
  left: -1px;
  width: 1px;
  background: var(--color-primary);
  transform-origin: top;
}

.experience__item {
  position: relative;
  display: grid;
  gap: 8px;
}

.experience__item::before {
  content: "";
  position: absolute;
  top: 5px;
  left: -37px;
  width: 9px;
  height: 9px;
  border-radius: 50%;
  background: var(--color-primary);
  transform: scale(0.5);
  transition: transform 0.3s ease;
}

.experience__item--active::before {
  transform: scale(1);
}

.experience__period,
.experience__role {
  font-family: var(--font-mono);
  font-size: 13px;
  line-height: 1.5;
  color: var(--color-text-muted);
}

.experience__company {
  font-size: clamp(24px, 3vw, 38px);
  font-weight: 500;
  letter-spacing: -0.025em;
}

.experience__summary {
  max-width: 58ch;
  font-size: 16px;
  line-height: 1.55;
  color: var(--color-text-muted);
}

.experience__highlights {
  display: grid;
  gap: 6px;
  margin-top: 6px;
  padding-left: 18px;
  font-size: 15px;
  line-height: 1.5;
  color: var(--color-text-muted);
}

.experience__highlights li::marker {
  color: var(--color-primary);
}

.experience__education {
  grid-column: 2;
  display: grid;
  gap: 18px;
  padding-top: 28px;
  border-top: 1px solid var(--color-line);
}

.experience__education ul {
  display: grid;
  gap: 16px;
  list-style: none;
}

.experience__education li {
  display: grid;
  gap: 4px;
}

.experience__education strong {
  font-size: 18px;
  font-weight: 500;
  letter-spacing: -0.01em;
}

.experience__education span {
  font-family: var(--font-mono);
  font-size: 13px;
  line-height: 1.5;
  color: var(--color-text-muted);
}

@media (max-width: 900px) {
  .experience__education {
    grid-column: auto;
  }

  .experience__wrapper {
    grid-template-columns: minmax(0, 1fr);
    gap: 48px;
  }

  .experience__heading {
    position: static;
  }

  .experience__list {
    padding-left: 24px;
  }

  .experience__item::before {
    left: -29px;
  }
}
</style>
