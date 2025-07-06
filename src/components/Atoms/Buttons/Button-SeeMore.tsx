import Link from "next/link";
import { BiLinkExternal } from "react-icons/bi";

interface prop {
  directLink: string;
  lineEffect: string;
}

export default function SeeMore({ directLink, lineEffect }: prop) {
  return (
    <div className={lineEffect}>
      <Link
        id="readMore"
        target="_blank"
        rel="noreferrer noopener"
        href={directLink}
        // [PERUBAHAN] Mengembalikan efek gradasi pada teks saat 'group' (kartu) di-hover
        className="text-sm font-semibold text-gray-600 dark:text-white 
                   transition-colors duration-300 hover-underline-animation
                   group-hover:text-transparent group-hover:bg-clip-text 
                   group-hover:bg-gradient-to-r group-hover:from-purple-500 group-hover:via-teal-400 group-hover:to-blue-500"
        passHref
      >
        <span>See More</span>
        {/* Ikon dan animasinya tetap sama */}
        <span className="transition-transform duration-300 group-hover:scale-110">
          <BiLinkExternal aria-hidden="true" />
        </span>
      </Link>
    </div>
  );
}