<template>
  <button class="custom-button">
    <slot />
  </button>
</template>

<style scoped>
.custom-button {
  display: inline-block;
  padding: 10px 20px;
  background-color: transparent;
  color: white;
  border: 2px solid #7f5af0;
  border-radius: 5px;
  font-size: 16px;
  font-family: "Space Grotesk", sans-serif;
  text-transform: uppercase;
  letter-spacing: 1px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;
}

.custom-button:hover {
  color: #070410;
}

.custom-button::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #7f5af0;
  z-index: -1;
  transition: transform 0.3s ease;
  transform: scaleX(0);
  transform-origin: left;
}

.custom-button:hover::before {
  transform: scaleX(1);
}

.custom-button:hover {
  color: #fff;
}
</style>
