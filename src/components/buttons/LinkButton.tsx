import { Icons, getIcon } from "@/constants";
import { ArrowBigRight } from "lucide-react";
const colors = {
  Youtube: "bg-[#c00]  hover:bg-[#cc0000bb]  ",
  Github: "bg-gray-600  hover:bg-gray-700 ",
  Linkedin: "bg-[#0077b5] hover:bg-[#0076b5b8]",
  Portfolio: "bg-violet-600 hover:bg-violet-700",
};
const LinkButton = ({ link, platform }: { link: string; platform: Icons }) => {
  const Icon = getIcon[platform as Icons];
  const color = colors[platform as Icons];

  return (
    <a
      target="_blank"
      href={link}
      className={`${color} flex items-center w-full gap-2 px-4 py-2 text-base font-semibold text-center text-white transition duration-200 ease-in rounded-lg shadow-md  focus:ring-gray-500 focus:ring-offset-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 `}
    >
      <Icon />
      {platform}
      <ArrowBigRight className="ml-auto" />
    </a>
  );
};

export { LinkButton };
