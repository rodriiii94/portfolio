//============================//
//    DATOS DEL PORTAFOLIO    //
//    Por defecto en inglés   //
//============================//

export const infoPersonal = {
    nombre: "José Rodrigo",
    role: "Developer & Security Enthusiast",
    tagline: "Web Application Developer · QA Tester · Cybersecurity Enthusiast",
    description: "Junior Software Developer with a solid academic background in software development. Highly committed and motivated professional with a strong focus on continuous learning and process improvement. Passionate about coding and eager to contribute to innovative projects while enhancing my skills in a dynamic work environment.",
    descriptionExtended: "Currently expanding my expertise in Cybersecurity, aiming to specialize in this field and contribute to building secure systems.",
    email: "rodrisantaga94@gmail.com",
    location: "Madrid, Spain",
    available: true,
    social: {
        linkedin: "https://www.linkedin.com/in/jose-rodrigo-santamaria-gallardo/",
        github: "https://github.com/rodriiii94"
    },
};

export const comandosTermianl = [
    { command: "whoami", output: "junior_developer && cybersecurity_enthusiast" },
    { command: "cat /etc/passion", output: "coding, cybersecurity, continuous_learning" },
    { command: "ls -la ./skills", output: "drwxr-xr-x  frontend/  backend/  security/  tools/" },
    { command: "echo $STATUS", output: "Looking for new challenges and opportunities" },
]

export const skills = {
    frontend: ["JavaScript", "TypeScript", "Next.js", "HTML5", "CSS3", "Tailwind CSS"],
    backend: ["Python", "Java", "PHP", "C", "C++", "MySQL", "ORACLE"],
    security : ["OSCP", "eJPTv2", "Bash Scripting"],
    tools: ["Git", "Docker", "Linux", "Burp Suite", "Wireshark"],
    frameworks: ["Angular", "Spring Boot", "Laravel"]
}

export const experiencia = [
  {
    id: 1,
    role: "Web Developer",
    company: "Química de los Pavimentos",
    companyUrl: "https://qdp.es/",
    period: "2023",
    description:
      "End-to-end development of two full websites and major refactoring of a third one for the following brands: QDP, Irtecon and Asteco. " +
      "Provided IT Support and hardware maintenance, ensuring optimal equipment performance and network stability. " +
      "Managed website deployments.",
    technologies: ["WordPress", "PHP", "JavaScript", "HTML/CSS", "Microsoft 365", "Adobe Photoshop"],
  },
  {
    id: 2,
    role: "QA Tester",
    company: "Doymus",
    companyUrl: "https://doymus.com/",
    period: "2025",
    description:
      "Conducted Static Code Analysis to ensure compliance with Misra C++ 2023 standards, designing specific test to validate code quality and safety" +
      "Evaulated and benchmarked quality tools such as PC-Lint ensuring the accuracy of automated detection systems." +
      "Developed JSON-based test suites to validate ASTERIX (EUROCONTROL) protocol decoding, inspecting the output with Wireshark to ensure data accuracy.",
    technologies: ["Python", "C", "C++", "Git", "Wireshark"],
  },
];

export const proyectos = [
  {
    id: 1,
    title: "MercaDaw",
    description:
      "Full-stack project featuring inventory and employee management, built in Java with SQL persistence and orchestrated using Docker Compose. Includes automated data loading, database scripts, and complete technical documentation.",
    technologies: ["Java","JavaFX", "SQL", "Docker", "Docker Compose"],
    liveUrl: null,
    githubUrl: "https://github.com/rodriiii94/MercaDawFinal",
    featured: true,
    icon: "store",
  },
  {
    id: 2,
    title: "RoyList",
    description:
      "RoyList is a web application built with Laravel 12 that allows authenticated users to create and manage personalized shopping lists organized by supermarket. It integrates product suggestions from an external API, displaying items grouped by category through a modern and responsive UI built with Tailwind CSS.",
    technologies: ["Laravel", "PHP", "MySQL", "Tailwind CSS", "JavaScript", "API Integration"],
    liveUrl: null,
    githubUrl: "https://github.com/rodriiii94/RoyList",
    featured: true,
    icon: "shopping-cart",
  },
];

export const educacion = [
    "DAW - Desarrollo de Aplicaciones Web",
    "SMR - Sistemas Microinformáticos y Redes",
];

export const intereses = [
  "OSCP",
  "eJPTv2",
  "Ethical Hacking",
];

export const navItems = [
  { name: "Terminal", href: "#terminal" },
  { name: "Skills", href: "#skills" },
  { name: "Experiencia", href: "#experience" },
  { name: "Proyectos", href: "#projects" },
  { name: "Contacto", href: "#contact" },
];
