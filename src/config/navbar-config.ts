export type navType = Array<{
  href: string;
  page: string;
}>;

export interface navProps {
  href: string;
  page: string;
  style: string;
}

export const navConfig: navType = [
  {
    href: "/",
    page: "Home",
  },
  {

    href: "/portofolio",
    page: "Portofolio",
  },
  {
    href: "/contact",
    page: "Contact",
  },
  {
    href: "/about",
    page: "About",
  },
];