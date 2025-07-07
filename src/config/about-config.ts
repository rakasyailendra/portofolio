export type dataAbout = {
  photo: {
    style: string;
    src: string;
    alt: string;
  };

  sortBy: {
    education: object;
    certificate: object;
  };

  iconSkills: Array<{
    style: string;
    src: string;
    width: number;
    height: number;
    alt: string;
    title: string;
  }>;
};

export interface aboutTypes {
  style: string;
  src: string;
  width?: number;
  height?: number;
  alt: string;
  title: string;
  description: string;
  imgLink: string;
  directLink: string;
  type?: string;
  eduTitle: string;
  major: string;
  skills: string[];
  key: number;
}

export const aboutConfig: dataAbout = {
  photo: {
    style: "rounded-md w-60 md:w-[900px]",
    src: "https://raw.githubusercontent.com/rakasyailendra/portofolio/main/public/foto-profiles.jpg",
    alt: "foto-profil-rakha",
  },

  sortBy: {
    education: {
      type: "education",
      description: "Here is My Learning Journey",
      bootCamp: [
        {
          eduTitle: "UPN Veteran East Java University",
          major: "Undergraduate Informatics Student",
          style: "py-4 pl-4 max-w-[150px]",
          skills: [
            "React.js", "React Native", "Next.js", "TypeScript", "JavaScript", "HTML5", "CSS", "Tailwind CSS", "UI/UX", "PHP Native", "Java Swing", "SQL", "JSX", "Tableau", "Data Science", "Data Analyst", "Visualization Data", "Artificial intelligence (AI)", "Machine Learning", "Networking System", "Apps Desktop", "Object-Oriented Programming", "TensorFlow", "UML",
          ],
          imgLink:
            "https://raw.githubusercontent.com/rakasyailendra/portofolio/main/public/Logo_UPN_Veteran_Jawa_Timur.png",
          directLink: "https://www.upnjatim.ac.id/",
        },
        {
          eduTitle: "Dicoding Indonesia",
          major: "Course Class (Fullstack Developer, Data Science, Machine Learning, End Artificial intelligence (AI))",
          style: "py-4 pl-4 max-w-[150px]",
          skills: [
            "React.js", "Nex.js", "HTML5", "CSS", "JavaScript", "PHP Native", "Tailwind CSS", "Tableau", "SQL", "Data Sceince", "Data Analyst", "frond end Developer", "Back end Developer", "Problem Solving", "Teamwork", "Deployment", "Java", "Amazon Web Service (AWS)", "Artificial intelligence (AI)",
          ],
          imgLink:
            "https://raw.githubusercontent.com/rakasyailendra/portofolio/main/public/DICODING.png",
          directLink: "https://www.dicoding.com/",
        },
        {
          eduTitle: "GDSC (Google Developers Student Club)",
          major: "Organization Members",
          style: "py-4 pl-4 max-w-[150px]",
          skills: [
            "Web Developers", "Moblie Developers", "Artificial intelligence (AI)", "Android Developers", "Flutter", "FlutterFlow", "Firebase", "Application Programming Interface (API)", "GeminiAI", "Cloud", "Cloud Computing", "Machine Learning", "TensorFlow",
          ],
          imgLink:
            "https://raw.githubusercontent.com/rakasyailendra/portofolio/main/public/GDG23%20Kivu%20logo.png",
          directLink: "",
        },
        {
          eduTitle: "MySkill ID",
          major: "Bootcamp and Courses Class (Computer Science)",
          style: "py-4 pl-4 max-w-[150px]",
          skills: [
            "Algoritms and Programming", "Web Development", "UI/UX Desaigner", "Database Systems", "Data Science", "Data Analyst", "Information System",
          ],
          imgLink:
            "https://raw.githubusercontent.com/rakasyailendra/portofolio/main/public/MySkill.png",
          directLink: "",
        },
      ],
    },
    certificate: {
      type: "certificate",
      description: "Here is My Licenses & Certifications",
      certificates: [
        {
          title: "Frond End Developer",
          description: "Dicoding Indonesia",
          imgLink:
            "https://raw.githubusercontent.com/rakasyailendra/portofolio/main/public/FE.png",
          directLink:
            "https://drive.google.com/file/d/1y1CJlsRwRzZo_PSlmjmo7B_6Qvmd0RMs/view?usp=sharing",
        },
        {
          title: "Web Developer",
          description: "Dicoding Indonesia",
          imgLink:
            "https://raw.githubusercontent.com/rakasyailendra/portofolio/main/public/web.png",
          directLink:
            "https://drive.google.com/file/d/1jjZGVnxYtDWzBPdc9OO6DgwhhKMIo5L4/view?usp=sharing",
        },
        {
          title: "Financial Literacy 101",
          description: "Dicoding Indonesia",
          imgLink:
            "https://raw.githubusercontent.com/rakasyailendra/portofolio/main/public/Financial%20Literacy.png",
          directLink:
            "https://drive.google.com/file/d/1KO6bWQLgOEQpVLX7EiOMGR7hoG8b5lhO/view?usp=sharing",
        },
        {
          title: "Devfest 2024",
          description: "Google Developers Group",
          imgLink:
            "https://raw.githubusercontent.com/rakasyailendra/portofolio/main/public/devfest'.png",
          directLink:
            "https://drive.google.com/file/d/1PYslC2z8FPfmRsw3cExKSlLtY6CiaX-B/view?usp=sharing",
        },
        {
          title: "Data Science",
          description: "Dicoding Indonesia",
          imgLink:
            "https://raw.githubusercontent.com/rakasyailendra/portofolio/main/public/data%20science.png",
          directLink:
            "https://drive.google.com/file/d/1XymhuOfjCN4Tsh4JiBTvVV2Ba2ESjqHM/view?usp=sharing",
        },
        {
          title: "Artificial intelligence (AI)",
          description: "Dicoding Indonesia",
          imgLink:
            "https://raw.githubusercontent.com/rakasyailendra/portofolio/main/public/AI.png",
          directLink:
            "https://drive.google.com/file/d/1j6NSh3D57U4n5_DSaox75AZvmtuSZeWx/view?usp=sharing",
        },
        {
          title: "Flutter In Production",
          description: "Google Developers Group",
          imgLink:
            "https://raw.githubusercontent.com/rakasyailendra/portofolio/main/public/Flutter.png",
          directLink:
            "https://drive.google.com/file/d/1uUBjSXoML8TrzWgXAIRS89pnlbU7sgVw/view?usp=sharing",
        },
        {
          title: "Cyber Security",
          description: "BEM FISIP UPN VETERAN JATIM",
          imgLink:
            "https://raw.githubusercontent.com/rakasyailendra/portofolio/main/public/cyber%20security.png",
          directLink:
            "https://drive.google.com/file/d/1xg7_lE0p9XXHs9X4MAVDnahNE1v2MqFY/view?usp=sharing",
        },
        {
          title: "Data Analyst",
          description: "BEM FASILKOM UPN VETERAN JAWA TIMUR",
          imgLink:
            "https://raw.githubusercontent.com/rakasyailendra/portofolio/main/public/data%20analisyt.png",
          directLink:
            "https://drive.google.com/file/d/14n3rwio_ZGpMw7KixJWhnRAGqhonhAFD/view?usp=sharing",
        },
        {
          title: "Spark 2024",
          description: "HIMATIFA UPN VETERAN JAWA TIMUR",
          imgLink:
            "https://raw.githubusercontent.com/rakasyailendra/portofolio/main/public/SPARK.png",
          directLink:
            "https://drive.google.com/file/d/1NugKqj2G4Ly-zKaTR0nRbrnS8-_6AU-0/view?usp=sharing",
        },
        {
          title: "___________________________",
          description: "Click button below for see more",
          imgLink:
            "https://res.cloudinary.com/druckyjuu/image/upload/v1690600078/Projects/See-more_h0fw8i.svg",
          directLink:
            "https://drive.google.com/drive/folders/19s450phd8UaYDELjn08QYEKFMoGzud0-?usp=sharing",
        },
      ],
    },
  },

  iconSkills: [
    {
      style: "w-10 md:w-11",
      src: "https://img.icons8.com/color/48/html-5--v1.png",
      width: 48,
      height: 48,
      alt: "html5",
      title: "HTML5",
    },
    {
      style: "w-10 md:w-11",
      src: "https://img.icons8.com/color/48/css3.png",
      width: 48,
      height: 48,
      alt: "css",
      title: "CSS3",
    },
    {
      style: "w-10 md:w-11",
      src: "https://img.icons8.com/color/48/javascript--v1.png",
      width: 48,
      height: 48,
      alt: "javascript",
      title: "JavaScript",
    },
    {
      style: "w-10 md:w-11",
      src: "https://img.icons8.com/color/48/typescript.png",
      width: 48,
      height: 48,
      alt: "typescript",
      title: "TypeScript",
    },
    {
      style: "w-10 md:w-11",
      src: "https://img.icons8.com/officel/48/php-logo.png",
      width: 48,
      height: 48,
      alt: "php",
      title: "PHP",
    },
    {
      style: "w-10 md:w-11",
      src: "https://img.icons8.com/color/48/python--v1.png",
      width: 48,
      height: 48,
      alt: "python",
      title: "Python",
    },
    {
      style: "w-10 md:w-11",
      src: "https://img.icons8.com/color/48/c-programming.png",
      width: 48,
      height: 48,
      alt: "c-programming",
      title: "C",
    },
    {
      style: "w-10 md:w-11",
      src: "https://img.icons8.com/color/48/sql.png",
      width: 48,
      height: 48,
      alt: "sql",
      title: "SQL",
    },
    {
      style: "w-10 md:w-11",
      src: "https://img.icons8.com/fluency/48/000000/node-js.png",
      width: 48,
      height: 48,
      alt: "nodejs",
      title: "Node.js",
    },
    {
      style: "w-10 md:w-11",
      src: "https://img.icons8.com/officel/48/react.png",
      width: 48,
      height: 48,
      alt: "react",
      title: "React.js",
    },
    {
      style: "w-10 md:w-11 p-1",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
      width: 48,
      height: 48,
      alt: "nextjs",
      title: "Next.js",
    },
    {
      style: "w-10 md:w-11",
      src: "https://img.icons8.com/color/48/tailwind_css.png",
      width: 48,
      height: 48,
      alt: "tailwindcss",
      title: "Tailwind CSS",
    },
    {
      style: "w-10 md:w-11",
      src: "https://img.icons8.com/color/48/java-coffee-cup-logo--v1.png",
      width: 48,
      height: 48,
      alt: "java",
      title: "Java / Java Swing",
    },
    {
      style: "w-10 md:w-11",
      src: "https://img.icons8.com/color/48/tensorflow.png",
      width: 48,
      height: 48,
      alt: "tensorflow",
      title: "TensorFlow",
    },
    {
      style: "w-10 md:w-11",
      src: "https://img.icons8.com/color/48/visual-studio-code-2019.png",
      width: 48,
      height: 48,
      alt: "vscode",
      title: "VS Code",
    },
    {
      style: "w-10 md:w-11 p-1",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg",
      width: 48,
      height: 48,
      alt: "git",
      title: "Git",
    },
    {
      style: "w-10 md:w-11",
      src: "https://img.icons8.com/color/48/figma--v1.png",
      width: 48,
      height: 48,
      alt: "figma",
      title: "Figma",
    },
    {
      style: "w-10 md:w-11",
      src: "https://raw.githubusercontent.com/rakasyailendra/portofolio/main/public/GNS3.png",
      width: 48,
      height: 48,
      alt: "gns3",
      title: "GNS3",
    },
  ],
};