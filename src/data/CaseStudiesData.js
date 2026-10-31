export const CaseStudiesData = [
  {
    slug: "salesforce-platform-tcs",
    title: "Enterprise Salesforce & DevOps Modernization",
    subtitle: "Orchestrating high-scale CRM architecture, Copado CI/CD pipelines, and reactive LWC platforms.",
    org: "Tata Consultancy Services (TCS)",
    role: "Salesforce Developer & DevOps",
    year: "2024 - Present",
    status: "Active Production",
    tags: ["Salesforce", "DevOps", "Apex", "Copado", "LWC"],
    metrics: [
      { label: "Deployment lead time", value: "-40%" },
      { label: "Merge conflicts resolved", value: "98%" },
      { label: "Architecture", value: "Multi-Org" },
    ],
    summary:
      "Engineered mission-critical enterprise Salesforce integrations, automated CI/CD release cycles with Copado, and architected modular Lightning Web Components that bridge legacy data stores with Salesforce Data Cloud.",
    problem:
      "Enterprise multi-tier Salesforce deployments previously suffered from manual changeset errors, branch drifts across multiple developer sandboxes, and unoptimized batch Apex jobs that occasionally breached governor limits during peak business hours.",
    solution:
      "Established strict trunk-based continuous integration using Copado and Git. Designed domain-driven Apex services with asynchronous Queueable and Batchable abstractions, and rebuilt frontend interactions with lightweight Lightning Web Components adhering to SLDS design tokens.",
    keyWork: [
      "Built resilient REST/SOAP endpoint integrations handling bi-directional sync with external ERP databases.",
      "Engineered automated branch validation, static code scanning, and rollback mechanisms in Copado.",
      "Optimized complex SOQL queries and indexed search patterns across millions of enterprise CRM records.",
      "Developed modular LWC suites with reactive wire services and local caching.",
    ],
    stack: [
      "Salesforce Apex",
      "Lightning Web Components (LWC)",
      "Copado CI/CD",
      "Salesforce Data Cloud",
      "SOQL & SOSL",
      "REST & SOAP APIs",
      "Git",
    ],
    github: null,
    externalLink: null,
  },
  {
    slug: "fullstack-ai-robro",
    title: "Industrial Computer Vision & Operations Platform",
    subtitle: "Real-time edge defect inspection and telemetry dashboard for factory automation lines.",
    org: "Robro Systems",
    role: "Full Stack Developer & PM",
    year: "2023 - 2024",
    status: "Shipped & Deployed",
    tags: ["React", "Node.js", "AI / Computer Vision", "WebSockets"],
    metrics: [
      { label: "Latency", value: "<100ms" },
      { label: "Defect inspection accuracy", value: "99.4%" },
      { label: "Role", value: "Full Stack & PM" },
    ],
    summary:
      "Spearheaded the development of a real-time visual inspection platform that connects edge camera inferences with plant manager dashboards, providing instant anomaly alerts and automated defect analytics.",
    problem:
      "Quality assurance teams on factory floors relied on post-production visual spot checks, which caused high scrap rates and untracked defect patterns across high-speed packaging runs.",
    solution:
      "Created a full-stack real-time telemetry console. Integrated WebSocket feeds directly with edge ML models, added interactive canvas image tagging for active learning feedback loops, and built exportable QA compliance reports.",
    keyWork: [
      "Designed and delivered high-frequency event streaming with WebSockets and Node.js.",
      "Built hardware-accelerated canvas overlays highlighting bounding boxes and heatmaps on live video feeds.",
      "Bridged client-facing feature discovery sessions with agile sprint delivery as hybrid developer-PM.",
    ],
    stack: ["React", "Node.js", "Express", "MongoDB", "WebSockets", "Computer Vision Pipelines"],
    github: null,
    externalLink: null,
  },
  {
    slug: "potencymate-extension",
    title: "Potencymate — Pomodoro Focus Extension",
    subtitle: "A frictionless browser extension designed for hyper-focused work sprints and distraction shielding.",
    org: "Open Source Tool",
    role: "Sole Creator",
    year: "2022",
    status: "Published",
    tags: ["Chrome Extension", "JavaScript", "OAuth2", "UX"],
    metrics: [
      { label: "Bundle size", value: "48KB" },
      { label: "External dependencies", value: "Zero" },
      { label: "Rating", value: "5.0 ★" },
    ],
    summary:
      "Potencymate is a distraction-free Chrome extension crafted around the Pomodoro methodology. Built with pure browser APIs for zero overhead and instant responsiveness.",
    problem:
      "Most productivity extensions are bloated with ads, trackers, and excessive permissions that slow down the browser.",
    solution:
      "Built a zero-dependency, hyper-optimized extension using native Chrome Extension Manifest v3 APIs, background service workers, and clean local storage state.",
    keyWork: [
      "Engineered precise background interval timers that survive browser tab sleeping states.",
      "Integrated OAuth2 authentication for cross-device state synchronization.",
      "Crafted an ultra-minimal, keyboard-first modal UI with dark mode support.",
    ],
    stack: ["JavaScript (ES6+)", "Chrome Extensions API", "OAuth2", "HTML5 & CSS3"],
    github: "https://github.com/aman34503/Potencymate---ChromeExtension",
    externalLink: "https://github.com/aman34503/Potencymate---ChromeExtension",
  },
  {
    slug: "lets-talk-app",
    title: "Let's Talk — Real-Time Peer Support Web App",
    subtitle: "Connecting individuals through anonymous peer conversations and mental wellness toolkits.",
    org: "Open Source / Civic Tech",
    role: "Full Stack Architect",
    year: "2022",
    status: "Active Project",
    tags: ["React", "Real-time", "Firestore", "Socket.io"],
    metrics: [
      { label: "Session latency", value: "Instant" },
      { label: "Data privacy", value: "Zero telemetry" },
    ],
    summary:
      "A compassionate web application built to connect individuals experiencing isolation or anxiety with supportive peer listeners and guided cognitive grounding exercises.",
    problem:
      "Reaching out for help often comes with stigma, mandatory account creations, and intimidating interfaces that prevent people from seeking immediate conversational support.",
    solution:
      "Designed a welcoming, zero-friction anonymous chat platform powered by real-time WebSockets and Firestore, combined with breathing exercise animations and crisis hotline fallbacks.",
    keyWork: [
      "Implemented private peer room matchmaking with ephemeral sessions.",
      "Engineered calming micro-interactions and smooth page transitions using Framer Motion.",
      "Structured real-time document listeners on Firebase Firestore with strict client rules.",
    ],
    stack: ["React", "Socket.io", "Firestore", "Node.js", "Framer Motion", "Material UI"],
    github: "https://github.com/aman34503/Lets-Talk/tree/master",
    externalLink: null,
  },
  {
    slug: "iit-kanpur-research",
    title: "Research Computation & Data Tools @ IIT Kanpur",
    subtitle: "Automating data harvesting, processing pipelines, and research dashboards for academic teams.",
    org: "Indian Institute of Technology, Kanpur",
    role: "Student Research Associate",
    year: "2022",
    status: "Completed",
    tags: ["Python", "Flask", "Node.js", "Research"],
    metrics: [
      { label: "Processing speed", value: "10x faster" },
      { label: "Pipeline coverage", value: "100%" },
    ],
    summary:
      "Developed computational tooling and automated data processing pipelines for academic research initiatives at IIT Kanpur, turning disparate data sets into structured statistical insights.",
    problem:
      "Research team spent hours manually scraping, cleaning, and formatting datasets before running computational models.",
    solution:
      "Built automated Python Flask backends coupled with custom Node.js scrapers and an interactive web interface for rapid parameter tuning and report generation.",
    keyWork: [
      "Implemented fault-tolerant web scrapers with automatic retry backoffs.",
      "Developed lightweight REST API microservices for numerical modeling.",
      "Delivered clear documentation and reproducible execution scripts.",
    ],
    stack: ["Node.js", "Python", "Flask", "Bootstrap", "REST APIs"],
    github: null,
    externalLink: null,
  },
  {
    slug: "restaurant-theme",
    title: "Hospitality Theme & Digital Menu Architecture",
    subtitle: "A modern, responsive culinary web platform optimized for fast loading and conversion.",
    org: "Client Project",
    role: "Frontend Engineer",
    year: "2022",
    status: "Maintained",
    tags: ["React", "UI/UX", "Responsive", "SEO"],
    metrics: [
      { label: "Lighthouse Performance", value: "98/100" },
      { label: "Mobile speed index", value: "0.9s" },
    ],
    summary:
      "Engineered a high-aesthetic, lightning-fast restaurant theme featuring interactive digital menus, reservation booking flows, and rich mobile-first typography.",
    problem:
      "Hospitality venues struggle with clunky PDF menus, unreadable mobile websites, and sluggish load times that turn hungry guests away.",
    solution:
      "Built an accessible, component-driven React menu with category filters, dynamic allergen indicators, and seamless booking integration.",
    keyWork: [
      "Built responsive layout primitives with semantic HTML5 and clean CSS grid.",
      "Integrated client-side state for instantaneous dish search and filtering.",
      "Achieved near-perfect Lighthouse scores across performance, accessibility, and SEO.",
    ],
    stack: ["React", "Material UI", "CSS Grid", "Fetch API", "Responsive UI"],
    github: "https://github.com/aman34503/Resturant-Website",
    externalLink: null,
  },
];
