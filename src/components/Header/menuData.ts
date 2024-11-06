import { Menu } from "@/types/menu";
const menuData: Menu[] = [
  {
    id: 1,
    title: "Blog",
    newTab: false,
    path: "/",
  },
  {
    id: 2,
    title: "Despre noi",
    newTab: false,
    path: "/despre-noi",
  },

  {
    id: 3,
    title: "Servicii de Dezvoltare & Promovare",
    newTab: false,
    submenu: [
      {
        id: 301,
        title: "Aplicatii mobile",
        newTab: false,
        path: "https://www.webappdynamicx.ro/servicii/dezvoltare-aplicatii-mobile",
      },
      {
        id: 31,
        title: "Website",
        newTab: false,
        path: "https://www.webappdynamicx.ro/servicii/dezvoltare-site-web",
      },
      {
        id: 31,
        title: "Magazin online",
        newTab: false,
        path: "https://www.webappdynamicx.ro/servicii/creare-magazin-online",
      },
      {
        id: 31,
        title: "Promovare SEO",
        newTab: false,
        path: "/inscrie-firma",
      },
    ],
  },

  {
    id: 4,
    title: "Articole SEO",
    path: "/articole-seo",
    newTab: false,
  },
  {
    id: 5,
    title: "Firme partenere",
    newTab: false,
    path: "/firme-partenere",
  },
  {
    id: 6,
    title: "Contact",
    newTab: false,
    path: "/support",
  },
];

export default menuData;
