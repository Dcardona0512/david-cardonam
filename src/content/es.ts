import { site } from "./shared";
import type { Content } from "./types";

/**
 * Spanish content. ⚠️ TODO(you): the prose below is placeholder text written to
 * show the right *shape* of a strong career-change portfolio. Rewrite it in
 * your own words — a recruiter can smell template copy instantly.
 *
 * Keep the constraints: pitch in one sentence, one measurable outcome per
 * project, highlights that contain numbers.
 */
const es: Content = {
  meta: {
    title: `${site.name} — Vibe Coder`,
    description:
      // TODO(David): añade «y CV descargable» cuando subas el PDF.
      "Vibe Coder en Cali, Colombia. Construyo interfaces web con HTML, CSS y herramientas de IA. Portafolio con proyectos y código abierto.",
    keywords: [
      "vibe coder",
      "desarrollo web",
      "HTML",
      "CSS",
      "desarrollo asistido por IA",
      "Cali",
      "portafolio",
    ],
  },
  nav: {
    projects: "Proyectos",
    skills: "Tecnologías",
    about: "Sobre mí",
    timeline: "Trayectoria",
    contact: "Contacto",
    skipToContent: "Saltar al contenido",
    menuOpen: "Abrir menú",
    menuClose: "Cerrar menú",
    languageLabel: "Cambiar idioma",
    primaryLabel: "Navegación principal",
  },
  hero: {
    availability: "Disponible para nuevas oportunidades",
    name: site.name,
    headline: "Vibe Coder",
    /**
     * The single most important sentence on the site.
     *
     * ⚠️ TODO(David): rewrite this in your own words. I don't know what you did
     * before, so the transition — the strongest card a career changer has — is
     * missing. Pattern that works: "Vengo de [X]. Ahora construyo [Y] con [Z].
     * Traigo [habilidad transferible]."
     */
    pitch:
      "Construyo interfaces web combinando fundamentos de HTML y CSS con herramientas de IA para iterar rápido, desde la idea hasta el deploy. Certificado en HTML por Platzi y aprendiendo en público: cada cosa que construyo termina publicada y con el código a la vista.",
    location: "Cali, Colombia · Remoto o híbrido",
    ctaProjects: "Ver proyectos",
    ctaResume: "Descargar CV",
    scrollHint: "Desliza para ver mi trabajo",
  },
  projects: {
    eyebrow: "Proyectos",
    heading: "Código que puedes revisar hoy",
    intro:
      "Prefiero un proyecto que puedas abrir y probar a una lista de diez que no existen. Aquí está lo que he construido, con el código a la vista.",
    demoLabel: "Ver demo",
    repoLabel: "Ver código",
    demoUnavailable: "Demo en preparación",
    repoUnavailable: "Repo privado",
    outcomeLabel: "Resultado",
    roleLabel: "Mi rol",
    items: {
      "proyecto-1": {
        name: "TODO: Nombre de tu proyecto",
        summary:
          "TODO: el problema que resuelve, en una frase. No una lista de funciones — el problema. Ejemplo: «los profesores del colegio apuntaban las notas en papel y perdían horas pasándolas a limpio».",
        outcome:
          "TODO: un resultado medible. Si nadie lo usa todavía, mide algo real de todos modos: «Lighthouse 95 en móvil», «funciona sin JavaScript», «se carga en menos de 1 s». Un número honesto vale más que un adjetivo.",
        role:
          "TODO: qué hiciste tú exactamente y con qué te ayudaste. Ser explícito sobre el uso de IA genera más confianza que ocultarlo: lo que interesa es que entiendas el código que entregas.",
      },
    },
  },
  skills: {
    eyebrow: "Tecnologías",
    heading: "Lo que uso y lo que estoy aprendiendo",
    intro:
      "Separo lo que domino de lo que estoy estudiando. Si algo aparece en «Sólido», puedo defenderlo en una entrevista técnica.",
    solidLabel: "Sólido",
    learningLabel: "Aprendiendo",
    groups: {
      languages: "Lenguajes",
      frontend: "Frontend",
      backend: "Backend y datos",
      tools: "Herramientas",
      ai: "IA y flujo de trabajo",
    },
  },
  about: {
    eyebrow: "Sobre mí",
    // TODO(David): cámbialo por tu transición real, ej. "De [tu oficio] al código".
    heading: "Aprendiendo a construir, en público",
    paragraphs: [
      "TODO: de dónde vienes. Cuál era tu trabajo u oficio antes del código. Es el párrafo más importante de esta sección: convierte un «no tengo experiencia» en «traigo otra cosa».",
      "TODO: qué te trajo al desarrollo. Qué fue lo primero que construiste o automatizaste, y por qué te enganchó.",
      "TODO: qué habilidad transferible traes. Trato con clientes, gestión de tiempos, atención al detalle, trabajo bajo presión: nómbrala y di dónde la aprendiste.",
    ],
    photoAlt: `Retrato de ${site.name}`,
    lookingFor:
      "TODO: qué buscas. Ejemplo: busco mi primera oportunidad como desarrollador frontend junior, en un equipo donde se revise código y se haga mentoría.",
  },
  timeline: {
    eyebrow: "Trayectoria",
    heading: "Formación y experiencia",
    intro:
      "Incluyo la experiencia no técnica a propósito: es donde aprendí a trabajar con personas, plazos y prioridades que cambian.",
    // (Ver el TODO en shared.ts: falta añadir experiencia y formación previa.)
    present: "Actualidad",
    kinds: {
      work: "Experiencia",
      education: "Formación",
      certification: "Certificación",
    },
    verifyLabel: "Verificar",
    items: {
      // Verificado desde el diploma PDF.
      "cert-html-platzi": {
        title: "Curso de HTML",
        organization: "Platzi",
        highlights: [
          "15 horas de teoría y práctica sobre estructura semántica, formularios y accesibilidad básica.",
          "Credencial 68a24eb2-3601-4c5f-90c5-b645f4dcdb86, verificable en el perfil público de Platzi.",
        ],
      },
    },
  },
  contact: {
    eyebrow: "Contacto",
    heading: "Hablemos",
    intro:
      "Estoy abierto a puestos junior, prácticas y colaboraciones. Respondo en menos de 24 horas.",
    copyEmail: "Copiar correo",
    copiedEmail: "¡Copiado!",
    ctaResume: "Descargar CV en PDF",
  },
  footer: {
    builtWith: "Hecho con Next.js, TypeScript y Tailwind CSS",
    rights: "Todos los derechos reservados",
    backToTop: "Volver arriba",
  },
};

export default es;
