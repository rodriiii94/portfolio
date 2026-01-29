export type Locale = "es" | "en";

export const translations = {
  es: {
    // Barra de navegación
    nav: {
      terminal: "Terminal",
      about: "Sobre mí",
      skills: "Skills",
      experience: "Experiencia",
      projects: "Proyectos",
      contact: "Contacto",
    },
    // Hero
    hero: {
      initializing: "INITIALIZING...",
      viewProjects: "Ver proyectos",
      contactMe: "Contactar",
    },
    // Comandos de la terminal
    terminal: {
      commands: [
        { command: "whoami", output: "desarrollador_junior && entusiasta_de_la_ciberseguridad" },
        { command: "cat /etc/passion", output: "código, ciberseguridad, aprendizaje_continuo" },
        { command: "ls -la ./skills", output: "drwxr-xr-x  frontend/  backend/  security/  tools/" },
        { command: "echo $STATUS", output: "Buscando nuevos retos y oportunidades" },
      ],
    },
    // Sobre mí
    about: {
      title: "Sobre mí",
      description: "Desarrollador junior con formación en distintos grados relacionados con el desarrollo de software. Persona comprometida y motivada, con interés por el aprendizaje continuo y la mejora constante.",
      descriptionExtended: "Actualmente enfocado en ampliar mis conocimientos en el ámbito de la ciberseguridad, con el objetivo de especializarme en este campo a medio plazo. Creo que el código seguro es código de calidad.",
      available: "Disponible para nuevas oportunidades",
      notAvailable: "Actualmente no disponible",
      education: "Formación",
      interests: "Intereses",
    },
    // Skills
    skills: {
      title: "Skills",
      categories: {
        frontend: "Frontend",
        backend: "Backend",
        security: "Seguridad",
        tools: "Herramientas",
        frameworks: "Frameworks",
      },
    },
    // Experiencia
    experience: {
      title: "Experiencia",
    },
    // Proyectos
    projects: {
      title: "Proyectos",
      featured: "Proyecto destacado",
      other: "Otros proyectos",
      viewCode: "Ver código en GitHub",
      viewLive: "Ver proyecto",
    },
    // Contacto
    contact: {
      title: "Contáctame!",
      description: "Estoy abierto a nuevas oportunidades y colaboraciones. Si tienes un proyecto interesante o simplemente quieres hablar sobre desarrollo y seguridad, no dudes en contactarme.",
      sendMessage: "Enviar mensaje",
    },
    // Footer
    footer: {
      designedBy: "Diseñado y desarrollado por",
    },
    // Información
    personal: {
      role: "Desarrollador & Entusiasta de la Ciberseguridad",
      tagline: "Desarrollador de Aplicaciones Web · QA Tester · Entusiasta de la Ciberseguridad",
    },
    // Experiencia Profesional
    experiencesData: [
      {
        role: "Desarrollador Web Junior",
        company: "Química de los Pavimentos",
        description: "Desarrollo íntegro de dos sitios web completos y rediseño de un tercero utilizando Wordpress para las marcas: QDP, Irtecon y Asteco. Soporte técnico IT y mantenimiento preventivo de hardware, garantizando el rendimiento de los equipos y la estabilidad de la red.",
      },
      {
        role: "QA Tester",
        company: "Doymus",
        description: "Análisis estático de código bajo el estándar Misra C++ 2023, diseñando escenarios de prueba para validar la seguridad y calidad del software. Evaluación de herramientas de calidad (PC-Lint), analizando su precisión en la detección de errores y la gestión de falsos positivos. Creación de baterías de pruebas en formato JSON para validar la decodificación del protocolo ASTERIX (EUROCONTROL), inspeccionando los resultados con Wireshark para garantizar la precisión de los datos",
      },
    ],
    // Proyectos Personales
    projectsData: [
      {
        title: "MercaDaw",
        description: "Proyecto full-stack con gestión de inventario y empleados, desarrollado en Java con persistencia SQL y desplegado usando Docker Compose. Incluye carga automática de datos, scripts de base de datos y documentación técnica completa.",
      },
      {
        title: "RoyList",
        description: "RoyList es una aplicación web construida con Laravel 12 que permite a los usuarios autenticados crear y gestionar listas de compras personalizadas organizadas por supermercado. Integra sugerencias de productos de una API externa, mostrando los artículos agrupados por categoría a través de una interfaz moderna y responsiva construida con Tailwind CSS.",
      },
    ],
  },
  en: {
    // Barra de navegación
    nav: {
      terminal: "Terminal",
      about: "About Me",
      skills: "Skills",
      experience: "Experience",
      projects: "Projects",
      contact: "Contact",
    },
    // Hero
    hero: {
      initializing: "INITIALIZING...",
      viewProjects: "View projects",
      contactMe: "Contact me",
    },
    // Comandos de la terminal
    terminal: {
      commands: [
        { command: "whoami", output: "junior_developer && security_enthusiast" },
        { command: "cat /etc/passion", output: "coding, cybersecurity, continuous_learning" },
        { command: "ls -la ./skills", output: "drwxr-xr-x  frontend/  backend/  security/  tools/" },
        { command: "echo $STATUS", output: "Looking for new challenges and opportunities" },
      ],
    },
    // Sobre mí
    about: {
      title: "About me",
      description: "Junior developer with training in various software development-related degrees. A committed and motivated person with interest in continuous learning and constant improvement.",
      descriptionExtended: "Currently focused on expanding my knowledge in the cybersecurity field, with the goal of specializing in this area in the medium term. I believe that secure code is quality code.",
      available: "Available for new opportunities",
      notAvailable: "Currently not available",
      education: "Education",
      interests: "Interests",
    },
    // Skills
    skills: {
      title: "Skills",
      categories: {
        frontend: "Frontend",
        backend: "Backend",
        security: "Security",
        tools: "Tools",
        frameworks: "Frameworks",
      },
    },
    // Experiencia
    experience: {
      title: "Experience",
    },
    // Proyectos
    projects: {
      title: "Projects",
      featured: "Featured project",
      other: "Other projects",
      viewCode: "View code on GitHub",
      viewLive: "View live project",
    },
    // Contacto
    contact: {
      title: "Contact me!",
      description: "I'm open to new opportunities and collaborations. If you have an interesting project or simply want to talk about development and security, don't hesitate to contact me.",
      sendMessage: "Send message",
    },
    // Footer
    footer: {
      designedBy: "Designed and developed by",
      builtWith: "Built with Next.js & Tailwind CSS",
    },
    // Información Personal
    personal: {
      role: "Developer & Security Enthusiast",
      tagline: "Web Application Developer · QA Tester · Cybersecurity Enthusiast",
    },
    // Experiencia Profesional
    experiencesData: [
      {
        role: "Junior Web Developer",
        company: "Química de los Pavimentos",
        description: "End-to-end development of two full websites and major refactoring of a third one for the following brands: QDP, Irtecon and Asteco. Provided IT Support and hardware maintenance, ensuring optimal equipment performance and network stability. Managed website deployments.",
      },
      {
        role: "QA Tester",
        company: "Doymus",
        description: "Conducted Static Code Analysis to ensure compliance with Misra C++ 2023 standards, designing specific test to validate code quality and safety. Evaluated and benchmarked quality tools such as PC-Lint ensuring the accuracy of automated detection systems. Developed JSON-based test suites to validate ASTERIX (EUROCONTROL) protocol decoding, inspecting the output with Wireshark to ensure data accuracy.",
      },
    ],
    // Proyectos Personales
    projectsData: [
      {
        title: "MercaDaw",
        description: "Full-stack project featuring inventory and employee management, built in Java with SQL persistence and orchestrated using Docker Compose. Includes automated data loading, database scripts, and complete technical documentation.",
      },
      {
        title: "RoyList",
        description: "RoyList is a web application built with Laravel 12 that allows authenticated users to create and manage personalized shopping lists organized by supermarket. It integrates product suggestions from an external API, displaying items grouped by category through a modern and responsive UI built with Tailwind CSS.",
      },
    ],
  },
} as const;

export type Translations = typeof translations.es;
