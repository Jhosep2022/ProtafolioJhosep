<template>
  <div id="contact" class="contact">
    <div class="contact__content">
      <div class="contact__info">
        <h2>Contactame</h2>
        <p>
          Me encantaría conocer tu proyecto y cómo puedo ayudarte. Por favor
          complete el formulario y me comunicaré con usted lo antes posible.
        </p>
      </div>
      <form class="contact__form">
        <div class="contact__form-group">
          <input type="text" placeholder="Name" required />
          <input type="email" placeholder="Email" required />
        </div>
        <textarea placeholder="Message" required></textarea>
        <button type="submit" class="contact__submit">Enviar Mensaje</button>
      </form>
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;700&display=swap");

.contact {
  color: white;
  padding: 60px 100px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.contact__content {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  max-width: 1200px;
  width: 100%;
}

.contact__info {
  max-width: 45%;
}

.contact__info h2 {
  font-family: "Space Grotesk", sans-serif;
  font-size: 56px;
  margin-bottom: 20px;
}

.contact__info p {
  font-family: "Space Grotesk", sans-serif;
  font-size: 18px;
  line-height: 1.6;
  color: #bbb;
}

.contact__form {
  max-width: 50%;
  width: 100%;
}

.contact__form-group {
  display: flex;
  gap: 20px;
  margin-bottom: 20px;
}

.contact__form-group input,
textarea {
  width: 100%;
  padding: 10px;
  border: none;
  border-bottom: 2px solid #333;
  background-color: transparent;
  color: white;
  font-family: "Space Grotesk", sans-serif;
  font-size: 18px;
  outline: none;
}

.contact__form-group input::placeholder,
textarea::placeholder {
  color: #bbb;
}

textarea {
  margin-bottom: 20px;
  min-height: 150px;
}

.contact__submit {
  padding: 10px 20px;
  border: none;
  background-color: transparent;
  color: white;
  font-family: "Space Grotesk", sans-serif;
  font-size: 16px;
  letter-spacing: 1px;
  position: relative;
  cursor: pointer;
  text-transform: uppercase;
  outline: none;
}

.contact__submit::after {
  content: "";
  position: absolute;
  width: 100%;
  height: 2px;
  background-color: #7f5af0;
  left: 0;
  bottom: -5px;
  transition: all 0.3s ease-in-out;
}

.contact__submit:hover::after {
  width: 100%;
}

.contact__submit:hover {
  color: #7f5af0;
}

.contact__submit:active {
  transform: scale(0.98);
}

/* ===================== Responsive Styles ===================== */

/* Para tabletas (pantallas medianas) */
@media (max-width: 1024px) {
  .contact {
    padding: 40px 50px;
  }

  .contact__content {
    flex-direction: column;
    align-items: center;
  }

  .contact__info {
    max-width: 100%;
    text-align: center;
  }

  .contact__info h2 {
    font-size: 48px;
  }

  .contact__info p {
    font-size: 16px;
  }

  .contact__form {
    max-width: 100%;
    margin-top: 30px;
  }
}

/* Para móviles (pantallas pequeñas) */
@media (max-width: 600px) {
  .contact {
    padding: 20px 20px;
  }

  .contact__info h2 {
    font-size: 36px;
  }

  .contact__info p {
    font-size: 14px;
  }

  .contact__form-group {
    flex-direction: column;
  }

  .contact__form-group input,
  textarea {
    font-size: 16px;
  }

  .contact__submit {
    font-size: 14px;
  }
}
</style>
