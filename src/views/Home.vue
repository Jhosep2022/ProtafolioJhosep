<template>
  <div class="home">
    <HeroSection />
    <Projects />
    <ExperienceSection />
    <ServicesSection />
    <StackList />
    <Contact />
  </div>
</template>

<script setup>
import HeroSection from "../components/HeroSection.vue";
import ExperienceSection from "../components/ExperienceSection.vue";
import ServicesSection from "../components/ServicesSection.vue";
import StackList from "../components/StackList.vue";
import Projects from "../views/Projects.vue";
import Contact from "../views/Contact.vue";
</script>
