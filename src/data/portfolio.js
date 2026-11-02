import fastCrewImg1 from "@/assets/fast-crew-1.webp";
import fastCrewImg2 from "@/assets/fast-crew-2.webp";
import fastCrewImg3 from "@/assets/fast-crew-3.webp";
import afimexInventoryImg from "@/assets/imageinventory.png";
import inventoryDesktopImg1 from "@/assets/inventory-desktop-1.png";
import inventoryDesktopImg2 from "@/assets/inventory-desktop-2.png";
import inventoryDesktopImg3 from "@/assets/inventory-desktop-3.png";
import inventoryDesktopImg4 from "@/assets/inventory-desktop-4.png";
import vetSoftImg from "@/assets/Vetsoft.png";
import heyGiftImg from "@/assets/heightgift.png";
import klowhubHomeImg from "@/assets/klowhub-home.png";
import klowhubCoursesImg from "@/assets/klowhub-courses.png";
import klowhubCommunityImg from "@/assets/klowhub-community.png";

const mshot = (url) => `https://s.wordpress.com/mshots/v1/${encodeURIComponent(url)}?w=1200`;

export const profile = {
  name: "Jose Condori",
  fullName: "Jose Amadeo Condori Ramos",
  firstName: "Jose",
  lastName: "Condori",
  initials: "JC",
  role: "Ingeniero de Sistemas · Full Stack & Mobile",
  location: "La Paz, Bolivia",
  timeZone: "America/La_Paz",
  email: "amadeo74080986@gmail.com",
  github: "https://github.com/Jhosep2022",
  linkedin: "https://www.linkedin.com/in/jose-amadeo-condori-ramos-890bb3257/",
};

export const projects = [
  {
    title: "Fast Crew",
    summary:
      "Plataforma de servicios con apps para clientes y trabajadores, desplegadas en iOS y Android, panel de administración y backend de microservicios.",
    stack: "Flutter · Next.js · AWS",
    images: [fastCrewImg1, fastCrewImg2, fastCrewImg3],
    fit: "phones",
  },
  {
    title: "KlowHub",
    summary:
      "Plataforma de cursos y comunidad tecnológica. Microservicios en AWS Lambda para pagos, facturas y suscripciones.",
    stack: "AWS Lambda · Stripe · SQS · DynamoDB",
    images: [klowhubHomeImg, klowhubCoursesImg, klowhubCommunityImg],
  },
  {
    title: "Afimex Inventory",
    summary:
      "Sistema de inventario para control de productos, movimientos y seguimiento operativo.",
    stack: "Flutter · Node.js",
    images: [afimexInventoryImg],
    fit: "poster",
    tone: "#f5eff6",
    previewUrl:
      "https://drive.google.com/file/d/1f_LQbdNbGnpxqZNsVkC3aN8V1eQSlhdQ/view?usp=sharing",
  },
  {
    title: "Inventory Desktop",
    summary: "Aplicación de escritorio para gestión de inventario y operaciones internas.",
    stack: "Flutter Desktop",
    images: [
      inventoryDesktopImg1,
      inventoryDesktopImg2,
      inventoryDesktopImg3,
      inventoryDesktopImg4,
    ],
  },
  {
    title: "VetSoft",
    summary:
      "Plataforma para gestión clínica veterinaria con acceso de personal y control de información.",
    stack: "Flutter · PHP",
    images: [vetSoftImg],
    fit: "poster",
    tone: "#fafafa",
    previewUrl:
      "https://drive.google.com/file/d/1kAyF6EIgsqIHASkSWDv3L_2eV_WhPnHb/view?usp=drive_link",
  },
  {
    title: "HeyGift",
    summary:
      "Aplicación móvil para experiencia de regalos y acceso de usuarios invitados dentro de la plataforma.",
    stack: "Flutter · Spring Boot · Java",
    images: [heyGiftImg],
    fit: "poster",
    tone: "#4a1847",
  },
  {
    title: "Magnus Supply",
    summary:
      "Plataforma web empresarial enfocada en oferta de productos y contacto comercial.",
    stack: "Web",
    images: [mshot("https://magnussupply.com/")],
    previewUrl: "https://magnussupply.com/",
  },
  {
    title: "Backyard and Pergolas",
    summary: "Sitio corporativo orientado a servicios y presencia comercial digital.",
    stack: "Web",
    images: [mshot("https://backyardandpergolas.com/")],
    previewUrl: "https://backyardandpergolas.com/",
  },
  {
    title: "Americanus Regatta",
    summary: "Sitio web institucional para marca y catálogo informativo.",
    stack: "Web",
    images: [mshot("https://americanusregatta.com.co/")],
    previewUrl: "https://americanusregatta.com.co/",
  },
];

export const experiences = [
  {
    role: "Desarrollador full stack",
    company: "Fast Crew",
    period: "feb. 2026 — actualidad",
    modality: "App en iOS y Android",
    summary:
      "Plataforma de servicios: apps para clientes y trabajadores, panel de administración y backend.",
    highlights: [
      "Dos apps en Flutter desplegadas en iOS y Android.",
      "Panel de administración en Next.js y TypeScript.",
      "Backend de 17 microservicios en AWS.",
    ],
  },
  {
    role: "Desarrollador mobile",
    company: "Vendis",
    period: "2026",
    modality: "Flutter · Android",
    summary: "Evolución y estabilidad de apps de cobros con QR y punto de venta.",
    highlights: [
      "Correcciones de estabilidad en la app de cobros con QR en Flutter.",
      "Modernización de la app de comercios en Android nativo.",
      "Mini POS en Flutter con productos, categorías y código de barras.",
    ],
  },
  {
    role: "Docente universitario · IA en desarrollo de software",
    company: "Universidad Privada Boliviana (UPB)",
    period: "2026",
    modality: "Presencial · Bolivia",
    summary:
      "Enseñanza de desarrollo de software asistido por IA con conceptos técnicos y ejercicios prácticos.",
    highlights: [
      "Temario con MCPs, subagentes, hooks, skills y RAG.",
      "Acompañamiento a estudiantes para integrar IA en su flujo de desarrollo.",
    ],
  },
  {
    role: "Desarrollador backend",
    company: "Prima Law",
    period: "jul. 2025 — ene. 2026",
    modality: "Remoto · Colombia",
    summary: "Microservicios y componentes BFF para adaptar las respuestas a cada cliente.",
    highlights: [
      "Autenticación y autorización con Spring Security y JWT.",
      "Servicios con Docker Compose y aportes a despliegues en Kubernetes.",
      "Persistencia y validación con JPA/Hibernate.",
    ],
  },
  {
    role: "Desarrollador full stack",
    company: "Profesional independiente",
    period: "jul. 2021 — feb. 2025",
    modality: "Bolivia · Colombia · Chile · Perú",
    summary: "Productos a medida para clientes, del modelo de datos a producción.",
    highlights: [
      "Petwise: app veterinaria con Flutter, Spring Boot, MinIO y Stripe.",
      "Universidad Católica San Pablo: gestión de activos fijos con Spring Boot y Angular.",
      "CycleERP: ERP multisucursal para restaurantes con Spring Boot, Vue y PostgreSQL.",
      "Eshop360: backend de e-commerce en Laravel con pasarela de pagos boliviana.",
      "InnovaERP: ERP para pymes con Laravel y Vue, incluida facturación electrónica.",
    ],
  },
  {
    role: "Desarrollador backend",
    company: "KlowHub",
    period: "ene. 2024 — jun. 2024",
    modality: "Remoto · Argentina",
    summary: "Microservicios en AWS Lambda para facturas, pagos y suscripciones.",
    highlights: [
      "Integraciones con Stripe, SQS y DynamoDB.",
      "Comunicación en tiempo real con WebSockets y notificaciones push.",
      "CI/CD con GitHub Actions para QA y producción.",
    ],
  },
  {
    role: "Desarrollador frontend y mobile",
    company: "Globalita",
    period: "ago. 2023 — dic. 2023",
    modality: "Remoto · México",
    summary: "Módulos en Flutter y Next.js para clientes empresariales de educación y salud.",
    highlights: [
      "Interfaces responsive e integraciones con APIs REST.",
      "QA, integración y despliegues con Docker y GitHub Actions.",
    ],
  },
];

export const education = [
  {
    title: "Ingeniería de Sistemas",
    detail: "Universidad Católica San Pablo · 2021 — 2025",
  },
  {
    title: "Diplomado en Docencia de Educación Superior",
    detail: "Universidad Católica San Pablo · 2026",
  },
];

export const services = [
  {
    id: "web",
    title: "Web",
    summary: "Interfaces y plataformas web completas, del panel de administración al producto.",
    stack: ["Angular", "React", "Vue", "Next.js", "TypeScript", "Laravel"],
    projects: ["Fast Crew", "KlowHub", "Magnus Supply", "Backyard and Pergolas"],
  },
  {
    id: "mobile",
    title: "Mobile y escritorio",
    summary: "Apps nativas y multiplataforma, publicadas en Google Play y App Store.",
    stack: ["Flutter", "Dart", "Kotlin", "Android"],
    projects: ["Fast Crew", "Vendis", "Afimex Inventory", "Inventory Desktop"],
  },
  {
    id: "backend",
    title: "Backend y cloud",
    summary: "APIs REST y microservicios con arquitectura BFF y hexagonal, listos para crecer.",
    stack: [
      "Spring Boot",
      "NestJS",
      "FastAPI",
      "PostgreSQL",
      "MySQL",
      "MongoDB",
      "DynamoDB",
      "AWS",
      "Docker",
      "Kubernetes",
      "Terraform",
      "GitHub Actions",
    ],
    projects: ["Fast Crew", "KlowHub", "HeyGift", "Afimex Inventory"],
  },
];

export const consulting = [
  {
    title: "Diagnósticos técnicos",
    summary: "Auditorías de código, performance y arquitectura para detectar riesgos y mejoras.",
  },
  {
    title: "Mentoría de equipos",
    summary: "Sesiones para potenciar equipos front-end, mobile y pipelines de lanzamiento.",
  },
  {
    title: "Automatización y QA",
    summary: "CI/CD, testing end-to-end y procesos que aseguran releases estables.",
  },
];

export const stackNames = [
  "Java",
  "Spring Boot",
  "Kotlin",
  "Flutter",
  "TypeScript",
  "Angular",
  "React",
  "Vue",
  "Next.js",
  "NestJS",
  "Laravel",
  "FastAPI",
  "PostgreSQL",
  "MongoDB",
  "DynamoDB",
  "AWS",
  "Docker",
  "Kubernetes",
  "Terraform",
  "GitHub Actions",
];
