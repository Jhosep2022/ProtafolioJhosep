<template>
  <footer class="footer">
    <div class="page-wrapper footer__inner">
      <span>{{ profile.name }} · {{ profile.location }}</span>
      <span>Disponible para proyectos remotos</span>
      <nav class="footer__links" aria-label="Enlaces de contacto">
        <a :href="`mailto:${profile.email}`">Correo</a>
        <a :href="profile.linkedin" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <a :href="profile.github" target="_blank" rel="noopener noreferrer">GitHub</a>
      </nav>
    </div>
  </footer>
</template>

<script setup>
import { profile } from "@/data/portfolio";
</script>

<style scoped>
.footer {
  padding: 24px 0;
  border-top: 1px solid var(--color-line);
  font-family: var(--font-mono);
  font-size: 13px;
  color: var(--color-text-muted);
}

.footer__inner {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 12px 32px;
}

.footer__links {
  display: flex;
  gap: 20px;
}

.footer__links a {
  transition: color 0.2s ease;
}

.footer__links a:hover {
  color: var(--color-text);
}
</style>
