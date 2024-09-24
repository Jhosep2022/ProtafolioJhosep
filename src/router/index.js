import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Contact from "@/views/Contact.vue";
import Projects from "@/views/Projects.vue";
import ContactPage from "@/views/ContactPage.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/projects",
      name: "Projects",
      component: Projects,
    },
    {
      path: "/contact",
      name: "Contact",
      component: Contact,
    },
    {
      path: "/contactpage",
      name: "ContactPage",
      component: ContactPage,
    },
  ],
  scrollBehavior(to) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: "smooth",
      };
    }
    return { top: 0 };
  },
});

export default router;
