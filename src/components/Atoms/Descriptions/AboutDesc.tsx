import React from "react";

export default function AboutDesc() {
  return (
    <>
      <p
        id="text"
        className="font-raka text-base pb-3 text-gray-600 dark:text-[#d3d4d6]"
      >
        {/* [PERBAIKAN] Mengganti ' dengan &apos; */}
        Hi, I&apos;m Muhammad Rakha Syailendra! I&apos;m an Informatics Engineering student with a keen interest in web development, application programming, and UI/UX design. I love building clean and visually appealing applications that provide a smooth user experience. I&apos;m also passionate about Data Science, Data Analyst, and Machine Learning.
      </p>
      <p className="font-raka text-base pb-4 text-gray-600 dark:text-[#d3d4d6]">
        {/* [PERBAIKAN] Mengganti ' dengan &apos; */}
        My journey in programmer started in 2023. Initially intrigued by how software can solve real-world problems, I committed myself to learning and growing in this field. I&apos;m proud to have honed my skills through resources like YouTube, Course, Google Group Club{" "}
        and{" "}
        <span
          className="font-semibold border-b border-blue-500/80 pb-1 cursor-pointer
                     text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-blue-500
                     transition-colors duration-300
                     hover:text-white"
        >
          Dicoding Bootcamps
        </span>
        , focusing primarily on{" "}
        <span
          className="font-semibold border-b border-green-500/80 pb-1 cursor-pointer
                     text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-green-500
                     transition-colors duration-300
                     hover:text-white"
        >
          Fullstack Developers
        </span>
        .
      </p>
      <p className="font-raka text-base pb-4 text-gray-600 dark:text-[#d3d4d6]">
        The world of frontend development has so much to offer, and that motivates me to keep challenging myself. I thrive on learning new things, conducting research, and collaborating with both small and large teams. Receiving feedback along the way has been invaluable in helping me grow.
      </p>
      <p className="font-raka text-base pb-4 text-gray-600 dark:text-[#d3d4d6]">
        {/* [PERBAIKAN] Mengganti ' dan ’ dengan &apos; */}
        On this website, you&apos;ll find a collection of my projects and blogs. Writing about what I learn is a way for me to solidify my knowledge, and I&apos;m eager to share that with others. Please don&apos;t hesitate to reach out—I&apos;d be thrilled to connect and assist in any way I can!
      </p>
    </>
  );
}