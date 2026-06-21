export type NavChild = { label: string; href: string };
export type NavItem = { label: string; href: string; children?: NavChild[] };

export const mainNav: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/service" },
  { label: "Project", href: "/project" },
  { label: "Contact", href: "/contact" },
];

export const footerInfoLinks: NavChild[] = [
  { label: "About us", href: "/about" },
  { label: "Our Services", href: "/service" },
  { label: "Recent Projects", href: "/project" },
  { label: "Our Team", href: "/our-team" },
  { label: "Contact us", href: "/contact" },
];

export const footerQuickLinks: NavChild[] = [
  { label: "Working Process", href: "/our-working-process" },
  { label: "Building Advice", href: "/blog" },
  { label: "Materials & Packages", href: "/shop" },
  { label: "Clients & Reviews", href: "/our-clients" },
  { label: "Request Quote", href: "/contact" },
];
