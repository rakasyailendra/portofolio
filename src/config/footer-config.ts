export type dataButton = {
  buttonAttributes: Array<{ url: string; title: string; icon: string }>;
};

export const footerConfig: dataButton = {
  buttonAttributes: [
    {
      url: "mailto:mrakhasyailendra442@gmail.com",
      title: "My Email",
      icon: "fa fa-envelope-o",
    },

    {
      url: "https://github.com/rakasyailendra",
      title: "My Github",
      icon: "fa fa-github",
    },

    {
      url: "https://www.linkedin.com/in/rakasyainz/",
      title: "My linkedin",
      icon: "fa fa-linkedin-square",
    },

    {
      url: "https://www.instagram.com/rakasyainz/",
      title: "My Instagram",
      icon: "fa fa-instagram",
    },
  ],
};
