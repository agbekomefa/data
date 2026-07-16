// ==========================================
// Site Configuration — ferdinandhassan.com
// ==========================================

export const SITE = {
  title: "Ferdinand Hassan",
  desc: "PhD researcher in Technology and Innovation Management at the University of Pretoria, investigating mass timber adoption in South African construction.",
  website: "https://ferdinandhassan.com",
  author: "Ferdinand Hassan",
  lang: "en",
  favicon: "/favicon.svg",
  ogImage: "/og-image.png",
};

// ==========================================
// Theme Configuration
// ==========================================

export const THEME_CONFIG = {
  themeLight: "default",
  themeDark: "default",
  lightAndDark: true,
};

export const THEMES = {
  light_default: {
    background: "#ffffff",
    foreground: "#1a1a2e",
    accent: "#2563eb",
    muted: "#6b7280",
    border: "#e5e7eb",
    surface: "#f9fafb",
  },
  dark_default: {
    background: "#0f0f1a",
    foreground: "#e2e8f0",
    accent: "#60a5fa",
    muted: "#94a3b8",
    border: "#1e293b",
    surface: "#1a1a2e",
  },
} as const;

// ==========================================
// Pages
// ==========================================

export const PAGES = {
  home: {
    title: "",
    subtitle: "",
    description: "Ferdinand Hassan — PhD researcher in technology and innovation management at the University of Pretoria, investigating mass timber adoption in South African construction.",
    active: true,
  },
  publications: {
    title: "Publications",
    subtitle: "Research outputs and academic publications",
    description: "Journal articles, conference papers, and theses by Ferdinand Hassan on mass timber adoption, technology acceptance, and sustainable construction.",
    isActive: true,
  },
  blog: {
    title: "Blog",
    subtitle: "Notes and reflections",
    description: "Notes and reflections from Ferdinand Hassan on research, academia, and the built environment.",
    isActive: true,
  },
  projects: {
    title: "Research",
    subtitle: "Current and past research projects",
    description: "Current and past research projects, including PhD research on mass timber adoption using UTAUT in the South African construction industry.",
    isActive: true,
  },
  talks: {
    title: "Talks",
    subtitle: "Conference presentations and invited talks",
    description: "Conference presentations and invited talks by Ferdinand Hassan.",
    isActive: false,
  },
  cv: {
    title: "CV",
    subtitle: "Curriculum Vitae",
    description: "Curriculum vitae of Ferdinand Hassan — education, professional experience, research output, awards, and skills.",
    isActive: true,
  },
  teaching: {
    title: "Teaching",
    subtitle: "Courses and supervision",
    description: "Teaching, supervision, and training — ETM700 content development, honours supervision, and qualitative research methods.",
    isActive: true,
  },
  consulting: {
    title: "Consulting",
    subtitle: "Academic consulting and advisory services",
    description: "Academic consulting and advisory services — thesis assistance, research methodology guidance, and SME procurement support.",
    isActive: true,
  },
};

// ==========================================
// Navigation
// ==========================================

export const NAV_LINKS = [
  { href: "/", label: "Home", isActive: true },
  { href: "/publications", label: "Publications", isActive: true },
  { href: "/projects", label: "Research", isActive: true },
  { href: "/teaching", label: "Teaching", isActive: true },
  { href: "/consulting", label: "Consulting", isActive: true },
  { href: "/cv", label: "CV", isActive: true },
  { href: "/posts", label: "Blog", isActive: true },
];

// ==========================================
// Social Links
// ==========================================

export const SOCIALS = [
  {
    name: "ORCID",
    href: "https://orcid.org/0009-0005-2171-1332",
    linkTitle: "ORCID Profile",
    isActive: true,
  },
  {
    name: "ResearchGate",
    href: "https://www.researchgate.net/profile/Ferdinand-Hassan",
    linkTitle: "ResearchGate Profile",
    isActive: true,
  },
  {
    name: "GoogleScholar",
    href: "https://scholar.google.com/citations?user=DJogV-EAAAAJ&hl=en",
    linkTitle: "Google Scholar",
    isActive: true,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/ferdinandhassan/",
    linkTitle: "LinkedIn Profile",
    isActive: true,
  },
  {
    name: "GitHub",
    href: "https://github.com/agbekomefa",
    linkTitle: "GitHub Profile",
    isActive: true,
  },
  {
    name: "Email",
    href: "mailto:f@ferdinandhassan.com",
    linkTitle: "Email",
    isActive: true,
  },
] as const;

export const SOCIAL_ICONS: Record<string, string> = {
  ORCID: "ORCID",
  ResearchGate: "ResearchGate",
  GoogleScholar: "GoogleScholar",
  LinkedIn: "LinkedIn",
  GitHub: "GitHub",
  Email: "Mail",
};

// ==========================================
// Analytics (disabled until configured)
// ==========================================

export const ANALYTICS = {
  umami: {
    websiteId: "",
    src: "",
  },
  ga4Id: "",
};

// ==========================================
// Settings
// ==========================================

export const SETTINGS = {
  addDevToolsInProduction: false,
};
