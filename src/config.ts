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
    active: true,
  },
  publications: {
    title: "Publications",
    subtitle: "Research outputs and academic publications",
    isActive: true,
  },
  blog: {
    title: "Blog",
    subtitle: "Notes and reflections",
    isActive: true,
  },
  projects: {
    title: "Research",
    subtitle: "Current and past research projects",
    isActive: true,
  },
  talks: {
    title: "Talks",
    subtitle: "Conference presentations and invited talks",
    isActive: false,
  },
  cv: {
    title: "CV",
    subtitle: "Curriculum Vitae",
    isActive: true,
  },
  teaching: {
    title: "Teaching",
    subtitle: "Courses and supervision",
    isActive: true,
  },
  consulting: {
    title: "Consulting",
    subtitle: "Academic consulting and advisory services",
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
    href: "https://scholar.google.com/citations?user=XxZIEK0AAAAJ&hl=en",
    linkTitle: "Google Scholar",
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
