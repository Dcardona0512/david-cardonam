import { site } from "./shared";
import type { Content } from "./types";

/**
 * Spanish content — this is the canonical version; `en.ts` is its translation.
 *
 * The prose here is real, not placeholder: David's pilot-to-developer story and
 * the la-53 project. Anything still marked `TODO` is waiting on a fact only he
 * has (dates, flight hours), never on wording.
 *
 * Keep the constraints when editing: pitch in one sentence, one outcome per
 * project, and highlights that contain numbers rather than adjectives.
 */
const es: Content = {
  meta: {
    title: `${site.name} — Desarrollador Web Junior`,
    description:
      // TODO(David): añade «y CV descargable» cuando subas el PDF.
      "Desarrollador web junior en Cali, Colombia. Piloto comercial de avión en activo, en transición al desarrollo web. Construyo aplicaciones con Next.js, TypeScript y Supabase. Portafolio con proyecto real y código abierto.",
    keywords: [
      "desarrollador web junior",
      "Next.js",
      "TypeScript",
      "Supabase",
      "React",
      "frontend",
      "Cali Colombia",
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
    /**
     * The single most important sentence on the site: it names the transition
     * and turns it into an advantage instead of a gap.
     *
     * Present tense throughout — David is a *working* pilot moving into web
     * development, not a former one. That's the stronger version of the story
     * anyway: he holds down a demanding licensed profession and ships software
     * alongside it.
     */
    pitch:
      "Soy piloto comercial de avión en Colombia y quiero dedicarme al desarrollo web. Construyo aplicaciones con Next.js, TypeScript y Supabase, y traigo de la cabina algo que aquí importa igual: seguir procedimientos, revisar cada detalle antes de despegar y decidir con la información que tengo.",
    location: "Cali, Colombia · Remoto o híbrido",
    ctaProjects: "Ver proyectos",
    ctaResume: "Descargar CV",
    scrollHint: "Desliza para ver mi trabajo",
  },
  projects: {
    eyebrow: "Proyectos",
    heading: "Código que puedes revisar hoy",
    intro:
      "Un proyecto real, con el código abierto para que lo revises. Prefiero eso a una lista de diez que no puedes abrir.",
    demoLabel: "Ver demo",
    repoLabel: "Ver código",
    demoUnavailable: "Demo en preparación",
    repoUnavailable: "Repo privado",
    outcomeLabel: "Resultado",
    roleLabel: "Mi rol",
    items: {
      "la-53": {
        name: "Autoservicios La 53",
        summary:
          "Un supermercado de barrio tomaba los pedidos por WhatsApp y llevaba el inventario a mano. Construí una tienda en línea con pago contra entrega y un panel de administración que unifica catálogo, stock y pedidos en un solo sitio.",
        outcome:
          // Describe el alcance construido, no el estado del despliegue: la demo
          // está caída ahora mismo (ver TODO en shared.ts). Cuando vuelva a estar
          // arriba, añade el dato real: productos cargados, pedidos gestionados,
          // meses en uso.
          "Aplicación completa en dos frentes: tienda pública con carrito y checkout contra entrega, y panel de administración con autenticación, punto de venta con lector de códigos de barras por cámara, alertas de stock bajo e informes de ventas.",
        role:
          "Lo construí completo: modelo de datos en Postgres con Row Level Security, autenticación, subida de imágenes, la tienda y el panel. Trabajo con asistentes de IA para avanzar rápido, y reviso y entiendo cada parte antes de darla por terminada.",
        imageAlt:
          "Panel de administración con el resumen del negocio: número de productos, pedidos pendientes, ventas y ganancia del mes, lista de pedidos recientes y alertas de stock bajo.",
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
    heading: "De la cabina de un avión al desarrollo web",
    paragraphs: [
      "Soy piloto comercial de avión en Colombia. Volar no es improvisar: es checklist antes de cada despegue, procedimientos que se siguen aunque tengas prisa, y decisiones que hay que tomar con la información disponible y sin margen para el «ya veremos».",
      "Quise aprender algo distinto y encontré en el desarrollo web lo que me gusta de volar, pero sin techo: puedo construir una cosa entera desde cero, romperla, entender por qué se rompió y volver a levantarla el mismo día. Me engancharon las dos partes, la que se ve y la que sostiene todo por debajo.",
      "Sigo volando mientras hago esta transición, y de la aviación traigo el hábito de verificar antes de dar algo por bueno, la tolerancia a los procedimientos aburridos que evitan problemas grandes, y la costumbre de trabajar con responsabilidad real sobre lo que entrego.",
    ],
    photoAlt: `Retrato de ${site.name}`,
    lookingFor:
      "Busco mi primera oportunidad como desarrollador web junior, en un equipo donde se revise código y se haga mentoría. Estoy en Cali y me interesa tanto remoto como híbrido.",
  },
  timeline: {
    eyebrow: "Trayectoria",
    heading: "Formación y experiencia",
    intro:
      "Incluyo mi trabajo como piloto a propósito: es donde aprendí, y sigo aprendiendo, a trabajar con procedimientos, presión real y responsabilidad sobre el resultado.",
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
      /**
       * Texto listo para cuando descomentes la entrada en shared.ts con tus
       * fechas reales. Los highlights están en TODO porque solo tú conoces los
       * números — y en esta sección los números son lo que convence.
       */
      "piloto-comercial": {
        title: "Piloto Comercial de Avión",
        organization: "TODO: aerolínea o escuela de vuelo",
        highlights: [
          "TODO: un dato concreto. Las horas de vuelo acumuladas son el equivalente aeronáutico de una métrica, y a un reclutador le dicen «esta persona sostiene algo exigente».",
          "TODO: una responsabilidad que se traduzca. Ej.: operar bajo procedimientos estrictos, coordinar con tripulación y torre, o responsabilidad directa sobre la seguridad de los pasajeros.",
        ],
      },
      "formacion-aeronautica": {
        title: "TODO: Licencia o formación aeronáutica",
        organization: "TODO: institución",
        highlights: ["TODO: solo si aporta; si no, borra esta entrada."],
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
