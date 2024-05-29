export const config = {
  srcSetSizes: ["256", "512", "768", "1280"],
  ogImage: "/ogImage.png",
  logo: "/logo.png",
  siteTitle: "Studio Arsenov",
  seo: {
    defaultTitle: "Studio Arsenov",
    defaultDescription: "Studio Arsenov",
    contact: {
      phone: "+381641300913",
    },
  },
  favico: "/favicon.ico",
  contact: {
    phone: "+381641300913",
    email: "studioarsenov@gmail.com",
    address: "Novi Sad 21000",
  },
  menu: [
    {
      title: "NASLOVNA",
      url: "/#",
    },
    {
      title: "O NAMA",
      url: "/#o-nama",
    },
    {
      title: "USLUGE",
      url: "/#usluge",
    },
    {
      title: "UTISCI",
      url: "/#utisci",
    },
    {
      title: "GALERIJA",
      url: "#",
      submenus: [
        { title: "FOTO GALERIJA", url: "/galerija/vencanja" },
        { title: "FOTOGRAFIJE IZ STUDIJA", url: "/galerija/studio" },
        { title: "VIDEO GALERIJA", url: "/galerija/video-produkcija" },
      ],
    },
    {
      title: "KONTAKT",
      url: "/#kontakt",
    },
  ],
  mobileMenu: [
    {
      title: "NASLOVNA",
      url: "/#",
    },
    {
      title: "O NAMA",
      url: "/#o-nama",
    },
    {
      title: "USLUGE",
      url: "/#usluge",
    },
    {
      title: "FOTO GALERIJA",
      url: "/galerija/vencanja",
    },
    {
      title: "VIDEO GALERIJA",
      url: "/galerija/video-produkcija",
    },
    {
      title: "FOTOGRAFIJE IZ STUDIJA",
      url: "/galerija/studio",
    },
    {
      title: "UTISCI",
      url: "/#utisci",
    },
    {
      title: "KONTAKT",
      url: "/#kontakt",
    },
  ],
  socials: [
    {
      title: "Facebook",
      url: "https://www.facebook.com/studioarsenov/",
      icon: "ic:baseline-facebook",
    },
    {
      title: "Instagram",
      url: "https://www.instagram.com/studio_arsenov/",
      icon: "mdi:instagram",
    },
  ],
}
