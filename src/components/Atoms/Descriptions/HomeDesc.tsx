import * as React from "react";
import { SlideReveal } from "../../ui/FramerMotion/slideReveal";
import StatusAndResume from "../Buttons/Button-ResumeStatus";
import { Reveal } from "../../ui/FramerMotion/onReveal";
import Link from "next/link";
import { BsFillFileEarmarkTextFill } from "react-icons/bs";
import clsx from "clsx";
import { homeConfig } from "@/src/config/home-config";
import { IconWithTooltip } from "../Icons/IconWithTooltip";
import { HoverBorderGradient } from "../../ui/hover-border-gradient";

export default function HomeDesc() {
  // State untuk mengontrol gaya teks "Syailendra"
  const [textStyle, setTextStyle] = React.useState(
    "text-transparent bg-clip-text color-purple-gradient"
  );

  const [hoverSocialMedia, setHoverSocialMedia] = React.useState<any>({
    Figma: "",
    Twitter: "",
    GitHub: "",
  });

  // useEffect untuk mengubah gaya setelah jeda waktu
  React.useEffect(() => {
    const timer = setTimeout(() => {
      setTextStyle("neon-text-purple");
    }, 2500); // Ubah ke neon setelah 2.5 detik

    // Membersihkan timer jika komponen dilepas
    return () => clearTimeout(timer);
  }, []); // Array dependensi kosong agar hanya berjalan sekali

  return (
    <div className="my-32 px-5 lg:px-0">
      <SlideReveal delay={0.2} duration={0.5}>
        <h2 className="text-2xl md:text-5xl text-[#0e1111] dark:text-white font-bold">
          Hi!
        </h2>
      </SlideReveal>
      <SlideReveal delay={0.3} duration={0.5}>
        <h2 className="text-3xl md:text-6xl text-[#0e1111] dark:text-white font-bold">
          I&apos;m Rakha
          {/* === BAGIAN YANG DIUBAH === */}
          {/* Kelas sekarang dinamis berdasarkan state */}
          <span
            className={`font-ghaly px-2 transition-all duration-1000 ${textStyle}`}
          >
            Syailendra
          </span>
          {/* ========================== */}
        </h2>
      </SlideReveal>
      <SlideReveal delay={0.4} duration={0.5}>
        <p className="text-sm md:text-xl max-w-2xl pb-5 text-gray-600 dark:text-slate-200 font-raka font-sans mt-5">
          A <span className="font-semibold">Front-End Developer</span> passionate about clean design and modern UI/UX development, focused on creating visually appealing applications with seamless user experiences.
        </p>
      </SlideReveal>

      <div className="flex flex-row gap-5 mt-5">
        <Reveal delay={0.5} duration={0.5}>
          <HoverBorderGradient
            containerClassName={
              "rounded-xl dark:bg-[#0e1111] border-0 m-1 active:scale-[0.93] hover:scale-[1.02] hover:duration-300"
            }
            className="relative z-30 px-5 py-3 border-[1px] dark:border-gray-600 text-sm sm:text-[15px] font-ghaly font-semibold rounded-xl cursor-pointer dark:hover:bg-gray-950 hover:duration-300"
          >
            <Link
              href={homeConfig.resume}
              target="_blank"
              className={clsx("flex flex-row items-center")}
              passHref
            >
              <BsFillFileEarmarkTextFill className="mr-2 h-[18px] w-[18px]" />{" "}
              Resume
            </Link>
          </HoverBorderGradient>
        </Reveal>

        {/* Komponen ini sekarang menampilkan "MORE ABOUT ME" dengan efek neon */}
        <StatusAndResume />
      </div>

      {/* check it out */}
      <Reveal delay={0.7} duration={0.5}>
        <div className="flex gap-5 mt-8">
          {homeConfig.iconsLink.map((data: any, index: number) => {
            return (
              <Link
                href={data.directLink}
                target="_blank"
                key={index}
                className={`flex flex-row gap-1 items-center text-[16px] cursor-pointer font-semibold text-gray-500 dark:text-slate-300 hover:text-gray-900`}
                onMouseOver={() =>
                  setHoverSocialMedia({ [data.iconName]: data.color })
                }
                onMouseOut={() => setHoverSocialMedia({ [data.iconName]: "" })}
                passHref
              >
                <IconWithTooltip
                  icon={data.icon}
                  iconName={data.iconName}
                  className={`bg-transparent sm:text-lg scale-110 duration-500 ${
                    hoverSocialMedia[data.iconName]
                  }`}
                />
              </Link>
            );
          })}
        </div>
      </Reveal>
    </div>
  );
}
