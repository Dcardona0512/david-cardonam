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
    title: `${site.name} — Desarrollador Web Junior`,
    description:
      "Desarrollador web junior especializado en React, Next.js y TypeScript. Portafolio con proyectos, código y CV descargable.",
    keywords: [
      "desarrollador web junior",
      "React",
      "Next.js",
      "TypeScript",
      "frontend",
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
    headline: "Desarrollador Web Junior",
    // The single most important sentence on the site: name the transition and
    // turn it into an advantage.
    pitch:
      "Vengo de cinco años en atención al cliente y ahora construyo interfaces web con React, Next.js y TypeScript. Traigo algo que no se aprende en un bootcamp: saber escuchar al usuario antes de escribir la primera línea de código.",
    location: "Madrid, España · Remoto o híbrido",
    ctaProjects: "Ver proyectos",
    ctaResume: "Descargar CV",
    scrollHint: "Desliza para ver mi trabajo",
  },
  projects: {
    eyebrow: "Proyectos",
    heading: "Código que puedes revisar hoy",
    intro:
      "Cada proyecto resuelve un problema real, está desplegado y tiene el código abierto. Prefiero tres proyectos que puedas abrir y probar a una lista de diez que no existen.",
    demoLabel: "Ver demo",
    repoLabel: "Ver código",
    demoUnavailable: "Demo en preparación",
    repoUnavailable: "Repo privado",
    outcomeLabel: "Resultado",
    roleLabel: "Mi rol",
    items: {
      "proyecto-1": {
        name: "TODO: Nombre del proyecto 1",
        summary:
          "TODO: el problema que resuelve en una frase. Ejemplo: los pequeños comercios del barrio no tenían forma de gestionar reservas sin pagar una suscripción mensual.",
        outcome:
          "TODO: un resultado medible. Ejemplo: lo usan 3 negocios reales y han gestionado más de 400 reservas desde el lanzamiento.",
        role:
          "TODO: qué construiste tú. Ejemplo: diseño, frontend y API completos; base de datos modelada desde cero.",
      },
      "proyecto-2": {
        name: "TODO: Nombre del proyecto 2",
        summary: "TODO: el problema que resuelve, en una frase.",
        outcome:
          "TODO: un resultado medible. Ejemplo: reduje el tiempo de carga de 4,1 s a 0,8 s optimizando imágenes y consultas.",
      },
      "proyecto-3": {
        name: "TODO: Nombre del proyecto 3",
        summary: "TODO: el problema que resuelve, en una frase.",
        outcome:
          "TODO: un resultado medible. Ejemplo: 100 % de cobertura de tests en la lógica de negocio y Lighthouse 98 en móvil.",
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
    },
  },
  about: {
    eyebrow: "Sobre mí",
    heading: "De atención al cliente a escribir el producto",
    paragraphs: [
      "TODO: de dónde vienes. Ejemplo: durante cinco años resolví incidencias de clientes en una empresa de logística. Mi trabajo era traducir un problema confuso a algo accionable, y hacerlo rápido.",
      "TODO: qué te trajo al desarrollo. Ejemplo: automaticé con hojas de cálculo y scripts los informes que hacíamos a mano cada semana. Pasé de ahorrar dos horas al equipo a querer entender cómo se construye el software entero.",
      "TODO: qué habilidad transferible traes. Ejemplo: sé hacer las preguntas incómodas antes de empezar a programar, escribir para que otra persona lo entienda y trabajar con plazos reales.",
    ],
    photoAlt: `Retrato de ${site.name}`,
    lookingFor:
      "TODO: qué buscas. Ejemplo: busco mi primer puesto como desarrollador frontend en un equipo donde se revise código y se haga mentoría.",
  },
  timeline: {
    eyebrow: "Trayectoria",
    heading: "Formación y experiencia",
    intro:
      "Incluyo la experiencia no técnica a propósito: es donde aprendí a trabajar con personas, plazos y prioridades que cambian.",
    present: "Actualidad",
    kinds: {
      work: "Experiencia",
      education: "Formación",
      certification: "Certificación",
    },
    verifyLabel: "Verificar",
    items: {
      bootcamp: {
        title: "TODO: Bootcamp de Desarrollo Web Full-Stack",
        organization: "TODO: Nombre de la escuela",
        highlights: [
          "TODO: dato concreto. Ejemplo: 800 horas de formación intensiva en JavaScript, React, Node.js y PostgreSQL.",
          "TODO: logro. Ejemplo: proyecto final seleccionado entre los 3 mejores de una promoción de 45 alumnos.",
        ],
      },
      "cert-1": {
        title: "TODO: Nombre de la certificación",
        organization: "TODO: Entidad emisora",
        highlights: ["TODO: qué acredita, en una línea."],
      },
      "trabajo-anterior": {
        title: "TODO: Tu puesto anterior",
        organization: "TODO: Nombre de la empresa",
        highlights: [
          "TODO: logro con número. Ejemplo: gestioné una cartera de 200 clientes con un 96 % de satisfacción.",
          "TODO: logro transferible. Ejemplo: automaticé el informe semanal del equipo y ahorré 8 horas de trabajo manual al mes.",
        ],
      },
      "formacion-previa": {
        title: "TODO: Tu formación previa",
        organization: "TODO: Universidad o centro",
        highlights: ["TODO: solo si aporta. Si no, borra esta entrada de shared.ts."],
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
