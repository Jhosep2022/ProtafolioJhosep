import { onBeforeUnmount, onMounted } from "vue";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import Lenis from "lenis";

gsap.registerPlugin(ScrollTrigger, SplitText);

export const MOTION_OK = "(prefers-reduced-motion: no-preference)";
export const HORIZONTAL_WORK = `(min-width: 1024px) and (min-height: 640px) and ${MOTION_OK}`;

const HEADER_OFFSET = 72;

let lenis = null;

export function initSmoothScroll() {
  if (lenis || !window.matchMedia(MOTION_OK).matches) return;

  lenis = new Lenis({ lerp: 0.1 });
  lenis.on("scroll", ScrollTrigger.update);
  gsap.ticker.add((time) => lenis.raf(time * 1000));
  gsap.ticker.lagSmoothing(0);
}

export function scrollToSection(id) {
  const section = document.getElementById(id);
  if (!section) return;

  if (lenis) {
    lenis.scrollTo(section, { offset: -HEADER_OFFSET });
    return;
  }

  const top = section.getBoundingClientRect().top + window.scrollY - HEADER_OFFSET;
  window.scrollTo({ top });
}

const revealBase = (root) => {
  gsap.utils.toArray("[data-split]", root).forEach((element) => {
    SplitText.create(element, {
      type: "lines",
      autoSplit: true,
      onSplit: (self) =>
        gsap.from(self.lines, {
          y: 28,
          autoAlpha: 0,
          duration: 0.9,
          stagger: 0.08,
          ease: "power3.out",
          scrollTrigger: { trigger: element, start: "top 85%", once: true },
        }),
    });
  });

  gsap.utils.toArray("[data-reveal]", root).forEach((element) => {
    gsap.from(element, {
      y: 24,
      autoAlpha: 0,
      duration: 0.8,
      ease: "power3.out",
      scrollTrigger: { trigger: element, start: "top 90%", once: true },
    });
  });
};

// Every section owns its animations: base reveals plus an optional `setup(mm)`
// for anything specific. Reverting the matchMedia cleans up on route changes.
export function useMotion(rootRef, setup) {
  let mm;

  onMounted(() => {
    mm = gsap.matchMedia(rootRef.value);
    mm.add(MOTION_OK, () => revealBase(rootRef.value));
    setup?.(mm);
  });

  onBeforeUnmount(() => mm?.revert());
}

export { gsap, ScrollTrigger, SplitText };
