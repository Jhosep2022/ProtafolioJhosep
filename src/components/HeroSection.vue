<template>
  <section id="hero" ref="root" class="hero">
    <div class="page-wrapper hero__wrapper">
      <div class="hero__meta" data-hero-fade>
        <span>{{ profile.role }}</span>
        <span>{{ profile.location }} · <time>{{ localTime }}</time></span>
      </div>

      <div class="hero__stage">
        <h1 ref="title" class="hero__title" :aria-label="profile.name">
          <span class="hero__line hero__line--back" aria-hidden="true">{{ profile.firstName }}</span>
          <span class="hero__line hero__line--front" aria-hidden="true">{{ profile.lastName }}</span>
        </h1>
        <div ref="portrait" class="hero__portrait">
          <img
            ref="portraitImage"
            :src="portraitImg"
            :alt="`Retrato de ${profile.name}`"
            width="726"
            height="1100"
            fetchpriority="high"
          />
        </div>
      </div>

      <div class="hero__bottom">
        <div class="hero__intro" data-hero-fade>
          <p>
            Ingeniero de sistemas con más de 4 años construyendo soluciones web, móviles y
            backend para clientes internacionales. Docente de IA aplicada al software en la UPB.
          </p>
          <div class="hero__cta">
            <a href="/#projects" class="button button--primary" @click.prevent="scrollToSection('projects')">
              Ver proyectos
            </a>
            <a href="/#contact" class="button" @click.prevent="scrollToSection('contact')">Hablemos</a>
          </div>
        </div>

        <dl class="hero__stats" data-hero-fade>
          <div v-for="stat in stats" :key="stat.label">
            <dt>{{ stat.label }}</dt>
            <dd>{{ stat.value }}</dd>
          </div>
        </dl>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onBeforeUnmount, onMounted, ref } from "vue";
import { MOTION_OK, SplitText, gsap, scrollToSection, useMotion } from "@/composables/useMotion";
import { experiences, profile, projects } from "@/data/portfolio";
import portraitImg from "@/assets/jose-portrait.webp";

const root = ref(null);
const title = ref(null);
const portrait = ref(null);
const portraitImage = ref(null);

const stats = [
  { label: "Años de experiencia", value: "4+" },
  { label: "Empresas y roles", value: String(experiences.length) },
  { label: "Proyectos destacados", value: String(projects.length) },
];

const timeFormat = new Intl.DateTimeFormat("es", {
  hour: "2-digit",
  minute: "2-digit",
  timeZone: profile.timeZone,
});
const localTime = ref(timeFormat.format(new Date()));
let clock;

onMounted(() => {
  clock = window.setInterval(() => {
    localTime.value = timeFormat.format(new Date());
  }, 15000);
});

onBeforeUnmount(() => window.clearInterval(clock));

useMotion(root, (mm) => {
  mm.add(MOTION_OK, () => {
    const lines = title.value.querySelectorAll(".hero__line");
    const split = SplitText.create(lines, { type: "chars", mask: "chars" });

    gsap
      .timeline({ defaults: { ease: "power4.out" } })
      .from(split.chars, { yPercent: 110, duration: 1.1, stagger: 0.035 })
      .fromTo(
        portrait.value,
        { clipPath: "inset(100% -20% -20% -20%)" },
        { clipPath: "inset(-20% -20% -20% -20%)", duration: 1.4, ease: "power3.inOut" },
        0.15
      )
      .from(portraitImage.value, { scale: 1.12, yPercent: 8, duration: 1.6 }, 0.15)
      .from("[data-hero-fade]", { y: 18, autoAlpha: 0, duration: 0.8, stagger: 0.1 }, "-=0.6");

    gsap.to(portrait.value, {
      yPercent: -12,
      ease: "none",
      scrollTrigger: {
        trigger: root.value,
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    });

    gsap.to(lines, {
      xPercent: (index) => (index === 0 ? -4 : 4),
      ease: "none",
      scrollTrigger: {
        trigger: root.value,
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    });

    return () => split.revert();
  });

  mm.add(`(hover: hover) and ${MOTION_OK}`, () => {
    const moveX = gsap.quickTo(portraitImage.value, "x", { duration: 0.9, ease: "power3.out" });
    const moveY = gsap.quickTo(portraitImage.value, "y", { duration: 0.9, ease: "power3.out" });

    const onPointerMove = ({ clientX, clientY }) => {
      moveX((clientX / window.innerWidth - 0.5) * 18);
      moveY((clientY / window.innerHeight - 0.5) * 12);
    };

    root.value.addEventListener("pointermove", onPointerMove);
    return () => root.value?.removeEventListener("pointermove", onPointerMove);
  });
});
</script>

<style scoped>
.hero {
  min-height: 100svh;
  display: flex;
  overflow: clip;
  padding: calc(var(--header-height) + 24px) 0 32px;
}

.hero__wrapper {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 40px;
}

.hero__meta {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 8px 24px;
  font-family: var(--font-mono);
  font-size: 13px;
  color: var(--color-text-muted);
}

.hero__title {
  display: flex;
  flex-direction: column;
  font-size: clamp(68px, min(17.5vw, 24svh), 262px);
  font-weight: 500;
  line-height: 0.95;
  letter-spacing: -0.055em;
}

.hero__line {
  display: block;
  will-change: transform;
}

/* Depth: first name behind the portrait, last name in front of it */
.hero__stage {
  position: relative;
}

.hero__line--back {
  position: relative;
  z-index: 1;
}

.hero__line--front {
  position: relative;
  z-index: 3;
  align-self: flex-end;
}

.hero__portrait {
  position: absolute;
  z-index: 2;
  right: 9%;
  bottom: -22%;
  height: 136%;
  aspect-ratio: 726 / 1100;
  pointer-events: none;
}

.hero__portrait::before {
  content: "";
  position: absolute;
  inset: 4% -12% 10%;
  border-radius: 50%;
  background: radial-gradient(closest-side, rgba(198, 241, 53, 0.16), transparent);
}

.hero__portrait img {
  position: relative;
  display: block;
  width: 100%;
  height: 100%;
  object-fit: contain;
  /* The hand is cut by the photo's right border, so that side fades out too */
  mask-image:
    linear-gradient(to bottom, #000 62%, transparent 92%),
    linear-gradient(to left, transparent 1%, #000 15%);
  mask-composite: intersect;
}

@media (max-width: 760px) {
  .hero__stage {
    margin-top: 26%;
  }

  /* No room beside the surname here: the hand enters from the screen edge */
  .hero__portrait {
    right: calc(-1 * var(--page-edge) - 12px);
    bottom: 2%;
    height: 200%;
  }

  .hero__portrait img {
    mask-image: linear-gradient(to bottom, #000 62%, transparent 92%);
  }
}

.hero__bottom {
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
  align-items: end;
  gap: 40px;
  padding-top: 24px;
  border-top: 1px solid var(--color-line);
}

.hero__intro {
  display: flex;
  flex-direction: column;
  gap: 24px;
  max-width: 520px;
}

.hero__intro p {
  font-size: clamp(18px, 1.7vw, 22px);
  line-height: 1.4;
  letter-spacing: -0.01em;
}

.hero__cta {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
}

.hero__stats {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 16px;
}

.hero__stats div {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.hero__stats dt {
  font-family: var(--font-mono);
  font-size: 12px;
  color: var(--color-text-muted);
}

.hero__stats dd {
  margin-top: 8px;
  font-size: clamp(28px, 3vw, 44px);
  letter-spacing: -0.03em;
}

@media (max-width: 820px) {
  .hero__bottom {
    grid-template-columns: minmax(0, 1fr);
  }
}
</style>
