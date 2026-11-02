<template>
  <section id="projects" ref="root" class="projects">
    <div class="page-wrapper projects__header">
      <div class="projects__heading">
        <p class="section-label"><b>01</b> Proyectos</p>
        <h2 class="section-title" data-split>Trabajo seleccionado</h2>
      </div>
      <p class="projects__counter" aria-hidden="true">
        <b>{{ currentNumber }}</b> / {{ totalNumber }}
      </p>
    </div>

    <div class="projects__viewport">
      <div ref="track" class="projects__track">
        <div v-for="(project, index) in projects" :key="project.title" class="projects__item">
          <ProjectCard
            :index="index"
            :title="project.title"
            :summary="project.summary"
            :stack="project.stack"
            :images="project.images"
            :fit="project.fit"
            :tone="project.tone"
            :preview-url="project.previewUrl"
          />
        </div>
      </div>
    </div>

    <span class="projects__bar" aria-hidden="true">
      <span class="projects__bar-fill" :style="{ transform: `scaleX(${barProgress})` }"></span>
    </span>
  </section>
</template>

<script setup>
import { computed, ref } from "vue";
import ProjectCard from "@/components/ProjectCard.vue";
import { HORIZONTAL_WORK, gsap, useMotion } from "@/composables/useMotion";
import { projects } from "@/data/portfolio";

const root = ref(null);
const track = ref(null);
const barProgress = ref(0);

const pad = (value) => String(value).padStart(2, "0");
const totalNumber = pad(projects.length);
const currentNumber = computed(() =>
  pad(Math.min(Math.floor(barProgress.value * projects.length) + 1, projects.length))
);

useMotion(root, (mm) => {
  mm.add(HORIZONTAL_WORK, () => {
    const distance = () => track.value.scrollWidth - window.innerWidth;

    const horizontal = gsap.to(track.value, {
      x: () => -distance(),
      ease: "none",
      scrollTrigger: {
        trigger: root.value,
        start: "top top",
        end: () => `+=${distance()}`,
        pin: true,
        scrub: 0.6,
        invalidateOnRefresh: true,
        onUpdate: (self) => {
          barProgress.value = self.progress;
        },
      },
    });

    gsap.utils.toArray("[data-project-preview]", track.value).forEach((preview) => {
      gsap.fromTo(
        preview.querySelectorAll("img"),
        { scale: 0.94 },
        {
          scale: 1,
          ease: "none",
          scrollTrigger: {
            trigger: preview,
            containerAnimation: horizontal,
            start: "left right",
            end: "left 55%",
            scrub: true,
          },
        }
      );
    });

    return () => {
      barProgress.value = 0;
    };
  });
});
</script>

<style scoped>
.projects {
  display: flex;
  flex-direction: column;
  gap: 40px;
  padding-top: calc(var(--header-height) + 20px);
}

.projects__header {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 24px;
}

.projects__heading {
  display: grid;
  gap: 12px;
}

.projects__counter {
  display: none;
  font-family: var(--font-mono);
  font-size: 13px;
  color: var(--color-text-muted);
}

.projects__counter b {
  font-weight: 400;
  color: var(--color-primary);
}

.projects__track {
  display: grid;
  gap: 56px;
  padding: 0 var(--gutter);
}

.projects__bar {
  display: none;
}

/* Keep in sync with HORIZONTAL_WORK in useMotion.js */
@media (min-width: 1024px) and (min-height: 640px) and (prefers-reduced-motion: no-preference) {
  .projects {
    height: 100vh;
    gap: 24px;
    padding-bottom: 28px;
    overflow: clip;
  }

  .projects__heading {
    gap: 6px;
  }

  .projects__heading .section-title {
    font-size: clamp(32px, 3.6vw, 52px);
  }

  .projects__counter {
    display: block;
  }

  .projects__viewport {
    flex: 1;
    min-height: 0;
  }

  .projects__track {
    display: flex;
    gap: 32px;
    width: max-content;
    height: 100%;
    padding: 0 var(--page-edge);
    will-change: transform;
  }

  .projects__item {
    width: min(64vw, 900px);
    height: 100%;
  }

  .projects__bar {
    display: block;
    height: 1px;
    margin: 0 var(--page-edge);
    background: var(--color-line);
  }

  .projects__bar-fill {
    display: block;
    height: 100%;
    background: var(--color-primary);
    transform-origin: left;
  }
}
</style>
