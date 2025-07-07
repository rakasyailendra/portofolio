import { FaLinkedinIn, FaGithub, FaEnvelope } from "react-icons/fa";
import { IconType } from "react-icons/lib";

export interface homeTypes {
  resume: string;
  iconsLink: Array<{
    icon: IconType;
    iconName: string;
    directLink: string;
    title: string;
    color: string;
  }>;
}

export const homeConfig: homeTypes = {
  resume:
    "https://drive.google.com/file/d/1KrVCVaQNZzIEzLhhvZI-U8Kkm9Yw2-zW/view?usp=sharing",


  iconsLink: [
    {
      icon: FaEnvelope,
      iconName: "Email",
      title: "My Email",
      color: "hover:text-gray-600 dark:hover:text-gray-300",
      directLink: "mailto:mrakhasyailendra442@gmail.com",
    },
    {
      icon: FaLinkedinIn,
      iconName: "LinkedIn",
      title: "rakasyainz",
      color: "hover:text-blue-600",
      directLink: "https://www.linkedin.com/in/rakasyainz/",
    },
    {
      icon: FaGithub,
      iconName: "GitHub",
      title: "rakasyailendra",
      color: "dark:text-white text-black",
      directLink: "https://github.com/rakasyailendra",
    },
  ],
};
