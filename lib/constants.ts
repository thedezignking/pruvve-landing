export const siteConfig = {
  name: "Pruvve",
  description: "Pruvve — production-ready landing page.",
  url: "https://pruvve.com",
  links: {
    github: "https://github.com",
  },
} as const;

export type SiteConfig = typeof siteConfig;

export const navLinks = [
  { label: "Features", href: "#features" },
  { label: "How it Works", href: "#how-it-works" },
  { label: "FAQs", href: "#faqs" },
] as const;

export type NavLink = (typeof navLinks)[number];
