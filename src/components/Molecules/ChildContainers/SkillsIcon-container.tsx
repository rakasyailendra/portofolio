import React from "react";
import IconSkill from "../../Atoms/Icons/IconSkills";
import { aboutConfig } from "@/src/config/about-config";

export default function SkillsIcon() {
  // [PENYESUAIAN] Membagi 18 ikon menjadi 2 baris (9 ikon per baris)
  const firstRowIcons = aboutConfig.iconSkills.slice(0, 9);
  const secondRowIcons = aboutConfig.iconSkills.slice(9);

  return (
    <div className="flex flex-col gap-3 mt-4">
      {/* Baris Pertama */}
      <div className="flex flex-wrap items-center justify-start gap-3">
        {firstRowIcons.map((icon, index) => (
          <IconSkill
            key={index}
            style={icon.style}
            src={icon.src}
            width={icon.width}
            height={icon.height}
            alt={icon.alt}
            title={icon.title}
          />
        ))}
      </div>

      <div className="flex flex-wrap items-center justify-start gap-3">
        {secondRowIcons.map((icon, index) => (
          <IconSkill
            key={index}
            style={icon.style}
            src={icon.src}
            width={icon.width}
            height={icon.height}
            alt={icon.alt}
            title={icon.title}
          />
        ))}
      </div>
    </div>
  );
}