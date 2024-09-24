<template>
  <footer class="footer">
    <div class="footer__content">
      <p class="footer__name">Jhosep20</p>
      <a
        href="https://github.com/Jhosep2022"
        class="footer__github"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src="../assets/Github_light.svg" alt="Github" />
      </a>
    </div>
  </footer>
</template>

<script>
export default {
  name: "AppFooter",
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;700&display=swap");
.footer {
  padding: 20px 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  box-sizing: border-box;
}

.footer__content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}

.footer__name {
  font-family: "Space Grotesk", sans-serif;
  color: white;
  font-size: 16px;
  margin: 0;
}

.footer__github img {
  width: 24px;
  height: 24px;
  filter: invert(1);
}

.footer__github:hover img {
  filter: invert(0.5);
}
</style>
