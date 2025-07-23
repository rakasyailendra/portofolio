// [PERBAIKAN] Semua impor dirapikan dan ikon yang menyebabkan error (BsSitemap) dihapus
import { AiFillVideoCamera } from "react-icons/ai";
import { BsBarChartFill, BsTerminalFill } from "react-icons/bs";
import { FaDatabase, FaHandPaper, FaJava, FaProjectDiagram, FaPuzzlePiece, FaReact, FaServer } from "react-icons/fa";
import { FiFigma } from "react-icons/fi";
import { GiBearFace } from "react-icons/gi";
import { HiOutlineMail } from "react-icons/hi";
import { IoLogoYoutube } from "react-icons/io";
import { IconType } from "react-icons/lib";
import { MdAnimation } from "react-icons/md";
import {
  SiAdobeaftereffects,
  SiAdobeillustrator,
  SiAdobephotoshop,
  SiAdobepremierepro,
  SiCss3,
  SiFramer,
  SiGooglecolab,
  SiHtml5,
  SiJavascript,
  SiNextdotjs,
  SiOpencv,
  SiPhp,
  SiPython,
  SiReactquery,
  SiRedux,
  SiTailwindcss,
  SiTypescript,
  SiVercel,
  SiVmware,
} from "react-icons/si";
import { TbApi, TbBrandReactNative } from "react-icons/tb";

export interface projectTypes {
  dataProjects: Array<{
    title: string;
    description: string;
    technologies: Array<{ icon: IconType; iconName: string }>;
    date: string;
    imgSrc: string;
    directLink: string;
  }>;
}

export const projectsConfig: projectTypes = {
  dataProjects: [
    {
      title: "Frond End Rest API - Ideas Pages",
      imgSrc:
        "https://raw.githubusercontent.com/rakasyailendra/portofolio/main/public/fetest.png",
      description:
        "A frontend application developed for the 'Ideas' page of the Suitmedia platform. This project, completed as part of the Kampus Merdeka internship program, demonstrates dynamic data fetching from a REST API, featuring pagination and data sorting functionalities to display user-submitted ideas.",
      technologies: [
        { icon: FaReact, iconName: "React.js" },
        { icon: SiNextdotjs, iconName: "Next.js" },
        { icon: SiTypescript, iconName: "TypeScript" },
        { icon: SiTailwindcss, iconName: "Tailwind CSS" },
        { icon: TbApi, iconName: "API" },
      ],
      date: "July 15, 2025",
      directLink: "https://project-test-fe-rakasyainz.vercel.app",
    },
    {
      title: "PT Nusantara Digital Solusi - Admin Panel",
      imgSrc:
        "https://raw.githubusercontent.com/rakasyailendra/portofolio/main/public/admindashboard.png",
      description:
        "A centralized control panel for managing users and business operations at PT Nusantara Digital Solusi. The interface provides a clear overview of key performance indicators and user data.",
      technologies: [
        { icon: FaReact, iconName: "React.js" },
        { icon: SiNextdotjs, iconName: "Next.js" },
        { icon: SiTypescript, iconName: "TypeScript" },
        { icon: SiTailwindcss, iconName: "Tailwind CSS" },
        { icon: FaDatabase, iconName: "Local Storage" },
      ],
      date: "July 13, 2025",
      directLink: "https://frond-end-aksamedia-test.vercel.app",
    },
    {
      title: "JACKDULS SALE VOL. III",
      imgSrc:
        "https://raw.githubusercontent.com/rakasyailendra/portofolio/main/public/jackdulsale.png",
      description:
        "A promotional landing page for JACKDULS fashion brand's Volume III sale, built to drive engagement and Sales for Mobile Application.",
      technologies: [
        { icon: FaReact, iconName: "React.js" },
        { icon: SiNextdotjs, iconName: "Next.js" },
        { icon: SiTypescript, iconName: "TypeScript" },
        { icon: FiFigma, iconName: "Figma" },
        { icon: FaPuzzlePiece, iconName: "React Bits" },
      ],
      date: "July 05, 2025",
      directLink: "https://jackduls-roan.vercel.app",
    },
    {
      title: "Realtime Jackduls E-Commerce",
      imgSrc:
        "https://raw.githubusercontent.com/rakasyailendra/portofolio/main/public/Frame%203.png",
      description:
        "An E-commerce Optimization Platform for JACKDULS, a local fashion brand, aiming to enhance digital presence and improve brand competitiveness by creating a responsive, interactive web profile to strengthen brand identity and reach a wider audience in the modern digital era.",
      technologies: [
        { icon: SiPhp, iconName: "PHP Native" },
        { icon: SiHtml5, iconName: "HTML5" },
        { icon: SiCss3, iconName: "CSS3" },
        { icon: FaDatabase, iconName: "SQL" },
        { icon: FiFigma, iconName: "Figma" },
        { icon: SiAdobeillustrator, iconName: "Adobe Illustrator" },
      ],
      date: "June 15, 2025",
      directLink:
        "https://github.com/rakasyailendra/JACKDULS-ADMIN",
    },
    {
      title: "Employee Attendance and Payroll Application",
      imgSrc:
        "https://raw.githubusercontent.com/rakasyailendra/portofolio/main/public/framepbo2.png",
      description:
        "A Java Desktop App for Attendance and Payroll Management at Islamic Boarding Schools, streamlining employee attendance tracking, shift scheduling, and automated salary calculation to improve administrative efficiency.",
      technologies: [
        { icon: FaJava, iconName: "Java And Java Swing" },
        { icon: FaDatabase, iconName: "SQL" },
        { icon: FiFigma, iconName: "Figma" },
      ],
      date: "June 15, 2025",
      directLink: "https://github.com/rakasyailendra/AbsensiSlipGajiSystem",
    },
    {
      title: "Official Tourism & Culinary Portal of Sidoarjo Regency",
      imgSrc:
        "https://raw.githubusercontent.com/rakasyailendra/portofolio/main/public/sda3.png",
      description:
        "A Special Project from Dicoding Indonesia. Website that presents a comprehensive guide to natural tourist destinations, historical cultural sites, and authentic Sidoarjo cuisine through interactive multimedia content..",
      technologies: [
        { icon: SiHtml5, iconName: "HTML5" },
        { icon: SiCss3, iconName: "CSS3" },
        { icon: SiJavascript, iconName: "JavaScript" },
        { icon: FiFigma, iconName: "Figma" },
      ],
      date: "December, 2024",
      directLink: "https://github.com/rakasyailendra/sidoarjo-city",
    },
    {
      title: "Informatics Advokasi Application",
      imgSrc:
        "https://raw.githubusercontent.com/rakasyailendra/portofolio/main/public/destar.png",
      description:
        "UI/UX A Digital Advocacy Platform for Informatics Students, designed to streamline academic services by integrating student information, UKT appeals, and complaint management into one unified web system, enhancing accessibility, transparency, and administrative efficiency",
      technologies: [
        { icon: FiFigma, iconName: "Figma" },
        { icon: SiAdobeillustrator, iconName: "Adobe Illustrator" },
        { icon: FaProjectDiagram, iconName: "Draw.io" },
      ],
      date: "Mei 2025",
      directLink:
        "https://www.figma.com/design/jmyZakaTVk3ntlRullpwpi/Advokasi-Himpunan-Informatika?node-id=377-1593&m=dev&t=F1VeeGCzYXd6CRDY-1",
    },
    {
      title: "LinkTree Profiles",
      imgSrc:
        "https://raw.githubusercontent.com/rakasyailendra/portofolio/main/public/profiles.png",
      description:
        "Personal Linktree Featuring with Links to Social Media Profiles for us to Connect with Instagram, LinkedIn, GitHub, TikTok, and YouTube, offering a direct way to connect and explore his work and online presence.",
      technologies: [
        { icon: SiHtml5, iconName: "HTML5" },
        { icon: SiCss3, iconName: "CSS3" },
        { icon: SiJavascript, iconName: "JavaScript" },
        { icon: FiFigma, iconName: "Figma" },
      ],
      date: "Juni 2025",
      directLink:
        "https://rakasyailendra.github.io/profiles/",
    },
    {
      title: "Jackduks UI/UX",
      imgSrc:
        "https://raw.githubusercontent.com/rakasyailendra/portofolio/main/public/pemweb.png",
      description:
        " Prototype For Realtime Website Collaboration with Jackduls Partner — Building a Seamless and Dynamic Web Experience for JACKDULS",
      technologies: [
        { icon: FiFigma, iconName: "Figma" },
        { icon: SiAdobeillustrator, iconName: "Adobe Illustrator" },
      ],
      date: "Juni 2025",
      directLink:
        "https://www.figma.com/design/lDcQv4uTDtiZUn4u5Ze4nj/JACKDULS-PROTOTYPE?node-id=0-1&t=8X2dtpPTpiiuFyXW-1",
    },
    {
      title: "Library Smart Bookshelf",
      imgSrc:
        "https://raw.githubusercontent.com/rakasyailendra/portofolio/main/public/fe1.png",
      description:
        "A minimalist and elegant Website for managing personal reading collections. Features include book tracking, completion status, and real-time search..",
      technologies: [
        { icon: SiJavascript, iconName: "JavaScript" },
        { icon: SiHtml5, iconName: "HTML5" },
        { icon: SiCss3, iconName: "CSS3" },
      ],
      date: "Juni, 2025",
      directLink: "https://github.com/rakasyailendra/bookshelf-FE",
    },
    {
      title: "Explore Europe – Bootstrap Tourism Demo Website",
      imgSrc:
        "https://raw.githubusercontent.com/rakasyailendra/portofolio/main/public/boostrap.png",
      description:
        "This demo website is designed to provide a modern, responsive, and informative user experience for showcasing European destinations. Built using Bootstrap, it demonstrates how a well-structured layout, interactive components, and visually engaging content can come together to promote tourism effectively. From curated travel news to user feedback forms, this site represents the foundation for creating a full-fledged travel platform tailored to global exploration",
      technologies: [
        { icon: SiHtml5, iconName: "HTML5" },
        { icon: SiJavascript, iconName: "JavaScript" },
        { icon: SiCss3, iconName: "CSS3" },
      ],
      date: "Juni 2025",
      directLink: "https://github.com/rakasyailendra/BOOTSTRAP-DEMO-",
    },
    {
      title: "Portofolio",
      imgSrc:
        "https://raw.githubusercontent.com/rakasyailendra/portofolio/main/public/profiles3.png",
      description:
        "Personal Portfolio of Rakha Syailendra with Responsive Website, Attractive Design, and Real-world Development Experiences.",
      technologies: [
        { icon: SiNextdotjs, iconName: "Next" },
        { icon: FaReact, iconName: "React" },
        { icon: SiTypescript, iconName: "TypeScript" },
        { icon: SiJavascript, iconName: "JavaScript" },
        { icon: SiTailwindcss, iconName: "Tailwind CSS" },
        { icon: FiFigma, iconName: "Figma" },
        { icon: HiOutlineMail, iconName: "Email.js" },
      ],
      date: "July 2025",
      directLink: "https://github.com/rakasyailendra/portofolio",
    },
    {
      title: "Super Admin Dashboard",
      imgSrc:
        "https://raw.githubusercontent.com/rakasyailendra/portofolio/main/public/ads3.png",
      description:
        "UI/UX prototype Project Created in Collaboration With My Patner Informatics. Advocacy System is a web-based platform designed to facilitate the management of students' academic and non-academic advocacy information..",
      technologies: [
        { icon: FiFigma, iconName: "Figma" },
        { icon: SiAdobeillustrator, iconName: "Adobe Illustrator" },
      ],
      date: "Juni 2025",
      directLink: "https://www.figma.com/proto/jmyZakaTVk3ntlRullpwpi/Advokasi-Himpunan-Informatika?page-id=0%3A1&node-id=4615-5783&p=f&viewport=-8%2C255%2C0.06&t=bAvFGGg9cQm8HSPt-1&scaling=contain&content-scaling=fixed",
    },
    {
      title: "Real-Time Hand Gesture Detection Using OpenCV & MediaPipe",
      imgSrc:
        "https://raw.githubusercontent.com/rakasyailendra/portofolio/main/public/sensor.png",
      description:
        "Hand Gesture Recognition with Python & MediaPipe is a real-time computer vision project that detects and tracks hand movements using a webcam. Built with OpenCV and MediaPipe, the system identifies whether the detected hand is the left or right hand, counts the number of raised fingers, and displays the result directly on the video feed. ",
      technologies: [
        { icon: SiPython, iconName: "Python" },
        { icon: SiGooglecolab, iconName: "Google Colab" },
        { icon: FaHandPaper, iconName: "MediaPipe" },
        { icon: SiOpencv, iconName: "OpenCV" },
      ],
      date: "Agustus 2024",
      directLink: "https://github.com/rakasyailendra/finger-five-test",
    },
    {
      title: "RNN - Sentiment Analysis on Public Response to Social and Physical Distancing during COVID-19",
      imgSrc:
        "https://raw.githubusercontent.com/rakasyailendra/portofolio/main/public/rnn.png",
      description:
        "RNN and LSTM to Analyze public sentiment regarding social distancing and physical distancing measures during the COVID-19 pandemic on Twitter. By analyzing Indonesian-language tweets.",
      technologies: [
        { icon: SiPython, iconName: "Python" },
        { icon: SiGooglecolab, iconName: "Google Colab" },
        { icon: FaDatabase, iconName: "Raw Data" },
        { icon: BsBarChartFill, iconName: "Data Visualization" },
      ],
      date: "Juni 2025",
      directLink: "https://github.com/rakasyailendra/RNN-Sentiment-Analysis-on-Social-Distancing-and-Physical-Distancing-on-Twitter-Social-Media",
    },
    {
      title: "Wireframe for Employee Absence and Salary Slip Application",
      imgSrc:
        "https://raw.githubusercontent.com/rakasyailendra/portofolio/main/public/wireframe.png",
      description:
        "Wireframe Design showcases the User interface and user experience layout for an employee attendance and salary slip application. The interface includes features for employee check-in/check-out, displaying the work shift, and managing attendance records, along with a login page for the system.",
      technologies: [
        { icon: FiFigma, iconName: "Figma" },
        { icon: SiAdobeillustrator, iconName: "Adobe Illustrator" },
      ],
      date: "Juni 2025",
      directLink: "https://www.figma.com/design/IUw8UnyBoI1UMJhSJDtvrY/Aset-PBO_APK-Absensi---Slip-Gaji?node-id=0-1",
    },
    {
      title: "Computer Network Security firewall",
      imgSrc:
        "https://raw.githubusercontent.com/rakasyailendra/portofolio/main/public/firewall.png",
      description:
        "As part of the Final Project for the Computer Networks Class, I was responsible for configuring the Firewall within a simulated Network infrastructure for a Boarding House, using MikroTik Router, GNS3, and Winbox.",
      technologies: [
        { icon: FaServer, iconName: "GNS3" },
        { icon: BsTerminalFill, iconName: "WinBox" },
        { icon: SiVmware, iconName: "VMware" },
      ],
      date: "Juni, 2025",
      directLink: "https://github.com/rakasyailendra/Network-Topologhy-For-Based-Boarding-House-System",
    },
    {
      title: "SAY NO TO DRUGS. Selamatkan Generasi, Selamatkan Bangsa",
      imgSrc:
        "https://raw.githubusercontent.com/rakasyailendra/portofolio/main/public/education.png",
      description:
        "Animated Video aims to Raise Awareness Among Youth and a General Public about the dangers of Drug Abuse. Through engaging visuals and educational content, it explains the harmful effects of drugs on vital organs, introduces commonly known types of narcotics, and presents alarming statistics on drug-related deaths in Indonesia.",
      technologies: [
        { icon: SiAdobepremierepro, iconName: "Adobe Premiere Pro" },
        { icon: SiAdobeaftereffects, iconName: "Adobe After Effects" },
        { icon: MdAnimation, iconName: "Adobe Animate" },
        { icon: AiFillVideoCamera, iconName: "Video Project" },
        { icon: IoLogoYoutube, iconName: "Youtube Project" },
      ],
      date: "Juli 2025",
      directLink: "https://drive.google.com/file/d/1D0PUO8ywYYLvtOMH0yuUXSDABwFgKIa0/view?usp=sharing",
    },
  ],
};
