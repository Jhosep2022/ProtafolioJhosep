<template>
  <section id="contact" class="contact">
    <div class="page-wrapper contact__wrapper">
      <div class="contact__intro">
        <span class="contact__pill">Agenda una sesi&oacute;n</span>
        <br>
        <h3>
          Cu&eacute;ntame sobre tu proyecto y definamos el siguiente sprint juntos
        </h3>
        <p>
          Aclaremos objetivos, alcances y prioridades para que recibas una
          propuesta clara. Trabajo con equipos que buscan velocidad sin perder
          calidad t&eacute;cnica.
        </p>
        <ul class="contact__list">
          <li>
            <span>+ Diagn&oacute;sticos t&eacute;cnicos</span>
            Auditor&iacute;as de c&oacute;digo, performance y arquitectura para detectar riesgos y mejoras.
          </li>
          <li>
            <span>+ Mentor&iacute;a de equipos</span>
            Sesiones para potenciar squads front-end, mobile y pipelines de lanzamiento.
          </li>
          <li>
            <span>+ Automatizaci&oacute;n y QA</span>
            Implementaci&oacute;n de CI/CD, testing end-to-end y procesos que aseguran releases estables.
          </li>
        </ul>

        <footer class="contact__facts">
          <div>
            <strong>+6</strong>
            <span>A&ntilde;os guiando equipos</span>
          </div>
          <div>
            <strong>40+</strong>
            <span>Sprints acompa&ntilde;ados</span>
          </div>
          <div>
            <strong>92%</strong>
            <span>Incidencias resueltas en vivo</span>
          </div>
        </footer>

        <div class="contact__meta">
          <div>
            <span>Disponibilidad</span>
            <strong>Lunes a Viernes</strong>
            <small>09:00 &ndash; 18:00 GMT-5</small>
          </div>
          <div>
            <span>Sesiones</span>
            <strong>Virtuales o Presenciales</strong>
            <small>Lima, Per&uacute; &middot; Trabajo remoto global</small>
          </div>
          <div>
            <span>Respuesta estimada</span>
            <strong>&lt; 24 horas</strong>
            <small>Confirmaci&oacute;n v&iacute;a email o WhatsApp</small>
          </div>
        </div>
      </div>

      <div class="contact__form-card">
        <form class="contact__form">
            <div class="contact__row">
              <label class="contact__field">
                <span>Nombre completo</span>
                <input type="text" name="name" placeholder="Tu nombre" required />
              </label>
            <label class="contact__field">
              <span>Email</span>
              <input type="email" name="email" placeholder="correo@empresa.com" required />
            </label>
          </div>

          <div class="contact__row">
            <label class="contact__field">
              <span>Empresa u organizaci&oacute;n</span>
              <input type="text" name="company" placeholder="Opcional" />
            </label>
            <label class="contact__field">
              <span>Pa&iacute;s / Zona horaria</span>
              <input type="text" name="timezone" placeholder="GMT-5, GMT-3..." />
            </label>
            </div>

            <div class="contact__row ">
            <label class="contact__field contact__field--select">
              <span>Tipo de proyecto</span>
              <select name="project-type" required>
                <option value="" disabled selected>Selecciona una opci&oacute;n</option>
                <option value="frontend">Refactor o nueva interfaz</option>
                <option value="mobile">Aplicaci&oacute;n mobile</option>
                <option value="consulting">Mentor&iacute;a / Consultor&iacute;a</option>
                <option value="automation">Automatizaci&oacute;n / DevOps</option>
                <option value="other">Otro</option>
              </select>
            </label>
            
            <label class="contact__field contact__field--select">
              <span>Plazo objetivo</span>
              <select name="timeline" required>
                <option value="" disabled selected>Selecciona un plazo</option>
                <option value="urgent">Urgente (1-2 semanas)</option>
                <option value="short">Corto (1 mes)</option>
                <option value="medium">Medio (2-3 meses)</option>
                <option value="long">Largo (+3 meses)</option>
              </select>
            </label>
          </div>
          <label class="contact__field contact__field--select">
              <span>Rango de presupuesto</span>
              <select name="budget" required>
                <option value="" disabled selected>Selecciona un rango</option>
                <option value="1-2k">USD 1,000 &ndash; 2,000</option>
                <option value="2-5k">USD 2,000 &ndash; 5,000</option>
                <option value="5-10k">USD 5,000 &ndash; 10,000</option>
                <option value="10k+">USD 10,000+</option>
                <option value="hourly">Pago por hora</option>
              </select>
            </label>

          <label class="contact__field contact__field--full">
            <span>Mensaje</span>
            <textarea
              name="message"
              rows="5"
              placeholder="Describe el contexto, objetivos, entregables o problemas que deseas resolver."
              required
            ></textarea>
          </label>

          <label class="contact__checkbox">
            <input type="checkbox" required />
            <span>
              Acepto recibir una propuesta y seguimiento sobre este proyecto.
            </span>
          </label>

          <button type="submit" class="contact__submit">
            Enviar detalle del proyecto
          </button>
          <p class="contact__footnote">
            Tambi&eacute;n puedes escribirme a
            <a href="mailto:jhosep.guzman2022@gmail.com">jhosep.guzman2022@gmail.com</a>
            o dejar tu mensaje por WhatsApp si necesitas respuesta inmediata.
          </p>
        </form>
      </div>
    </div>
  </section>
</template>

<script setup></script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;700&display=swap");

.contact {
  position: relative;
  padding: 110px 0 100px;
}

.contact__wrapper {
  display: grid;
  grid-template-columns: minmax(0, 0.9fr) minmax(0, 1.1fr);
  gap: 48px;
  align-items: stretch;
}

.contact__intro {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 48px 42px;
  color: var(--color-text);
}

.contact__pill {
  align-self: flex-start;
  padding: 6px 14px;
  border-radius: 999px;
  background: rgba(127, 90, 240, 0.18);
  border: 1px solid rgba(127, 90, 240, 0.35);
  font-size: 11px;
  letter-spacing: 0.32em;
  text-transform: uppercase;
  color: rgba(245, 245, 255, 0.78);
}

.contact__intro h2 {
  margin: 18px 0 12px;
  font-size: clamp(38px, 4.4vw, 52px);
  line-height: 1.14;
}

.contact__intro p {
  color: var(--color-text-muted);
  line-height: 1.8;
  max-width: 500px;
}

.contact__list {
  list-style: none;
  padding: 0;
  margin: 36px 0;
  display: grid;
  gap: 18px;
  font-size: 15px;
  color: rgba(245, 245, 255, 0.75);
}

.contact__list li {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.contact__list li span {
  font-weight: 600;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: rgba(245, 245, 255, 0.88);
}

.contact__facts {
  display: flex;
  gap: 28px;
  margin-top: auto;
  padding: 24px 0;
  border-top: 1px solid rgba(255, 255, 255, 0.05);
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
}

.contact__facts div {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.contact__facts strong {
  font-size: 26px;
  color: var(--color-primary);
  letter-spacing: 0.08em;
}

.contact__facts span {
  font-size: 12px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: rgba(245, 245, 255, 0.64);
}

.contact__meta {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 18px;
  margin-top: 24px;
}

.contact__meta div {
  display: flex;
  flex-direction: column;
  gap: 6px;
  font-size: 13px;
  color: rgba(245, 245, 255, 0.65);
}

.contact__meta span {
  font-size: 11px;
  letter-spacing: 0.3em;
  text-transform: uppercase;
  color: rgba(245, 245, 255, 0.6);
}

.contact__meta strong {
  font-size: 15px;
  letter-spacing: 0.04em;
}

.contact__form-card {
  background: linear-gradient(170deg, rgba(12, 10, 24, 0.88), rgba(12, 9, 26, 0.74));
  border: 1px solid rgba(127, 90, 240, 0.32);
  border-radius: 36px;
  box-shadow:
    0 28px 70px rgba(6, 4, 18, 0.58),
    inset 0 1px 0 rgba(255, 255, 255, 0.06);
  backdrop-filter: blur(20px);
  padding: 42px 44px;
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.contact__form {
  display: flex;
  flex-direction: column;
  gap: 22px;
}

.contact__row {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 20px;
}

.contact__row--triple {
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 20px;
}

.contact__field {
  display: flex;
  flex-direction: column;
  gap: 10px;
  font-size: 13px;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: rgba(245, 245, 255, 0.6);
}

.contact__field span {
  font-weight: 600;
}

.contact__field input,
.contact__field select,
.contact__field textarea {
  width: 100%;
  padding: 16px 18px;
  border-radius: 18px;
  border: 1px solid rgba(255, 255, 255, 0.09);
  background: rgba(8, 6, 18, 0.85);
  color: var(--color-text);
  font-size: 15px;
  font-family: "Space Grotesk", sans-serif;
  transition:
    border-color 0.3s ease,
    box-shadow 0.3s ease,
    background 0.3s ease;
}

.contact__field select {
  appearance: none;
  padding-right: 48px;
  cursor: pointer;
  background: rgba(8, 6, 18, 0.85);
}

.contact__field--select {
  position: relative;
}

.contact__field--select::after,
.contact__field--select::before {
  content: "";
  position: absolute;
  pointer-events: none;
  right: 20px;
  transition:
    transform 0.3s ease,
    opacity 0.3s ease;
}

.contact__field--select::after {
  top: 18px;
  width: 16px;
  height: 16px;
  background: rgba(127, 90, 240, 0.22);
  border-radius: 50%;
  opacity: 0.55;
}

.contact__field--select::before {
  top: 50%;
  transform: translateY(-50%) rotate(45deg);
  width: 10px;
  height: 10px;
  border-right: 2px solid rgba(245, 245, 255, 0.75);
  border-bottom: 2px solid rgba(245, 245, 255, 0.75);
}

.contact__field--select:focus-within::after {
  transform: scale(1.1);
  opacity: 0.85;
}

.contact__field--select:focus-within::before {
  transform: translateY(-50%) rotate(225deg);
  border-color: var(--color-primary);
}

.contact__field input::placeholder,
.contact__field textarea::placeholder {
  color: rgba(245, 245, 255, 0.35);
}

.contact__field input:focus,
.contact__field select:focus,
.contact__field textarea:focus {
  border-color: rgba(127, 90, 240, 0.7);
  box-shadow: 0 0 0 4px rgba(127, 90, 240, 0.18);
  outline: none;
}

.contact__field textarea {
  resize: vertical;
  min-height: 140px;
}

.contact__field--full {
  width: 100%;
}

.contact__checkbox {
  display: flex;
  align-items: flex-start;
  gap: 12px;
  font-size: 13px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: rgba(245, 245, 255, 0.58);
}

.contact__checkbox input {
  margin-top: 4px;
  width: 18px;
  height: 18px;
  border-radius: 6px;
  border: 1px solid rgba(127, 90, 240, 0.4);
  background: rgba(8, 5, 19, 0.9);
}

.contact__submit {
  align-self: flex-start;
  padding: 16px 28px;
  border: none;
  border-radius: 18px;
  background: linear-gradient(140deg, rgba(127, 90, 240, 0.92), rgba(44, 182, 125, 0.9));
  color: #0b0613;
  font-weight: 600;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  font-size: 14px;
  cursor: pointer;
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;
}

.contact__submit:hover {
  transform: translateY(-4px);
  box-shadow: 0 24px 48px rgba(127, 90, 240, 0.32);
}

.contact__footnote {
  margin: 12px 0 0;
  font-size: 14px;
  color: rgba(245, 245, 255, 0.62);
}

.contact__footnote a {
  color: var(--color-primary);
  font-weight: 600;
  text-decoration: underline;
}

@media (max-width: 1100px) {
  .contact__wrapper {
    grid-template-columns: 1fr;
  }

  .contact__meta {
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  }

  .contact__form-card {
    padding: 28px 28px 32px;
  }

  .contact__submit {
    align-self: center;
  }
}

@media (max-width: 768px) {
  .contact {
    padding: 90px 0 80px;
  }

  .contact__intro {
    padding: 36px 32px;
  }

  .contact__row {
    grid-template-columns: 1fr;
  }

  .contact__row--triple {
    grid-template-columns: repeat(auto-fit, minmax(210px, 1fr));
  }

  .contact__form-card {
    padding: 32px 26px;
  }
}
</style>
