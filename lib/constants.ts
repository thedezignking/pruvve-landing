export const siteConfig = {
  name: "Pruvve",
  description: "Pruvve — production-ready landing page.",
  url: "https://pruvve.com",
  links: {
    github: "https://github.com",
  },
} as const;

export type SiteConfig = typeof siteConfig;
