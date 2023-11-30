import { Circle } from "@phosphor-icons/react";
import { poppins } from "@/app/fonts";
import { PropsType } from "./interface";

export const Button = ({ onClick, content }: PropsType) => {
  return (
    <button
      className={`${poppins.className} flex items-center gap-2 px-8 py-4 cursor-pointer hover:bg-[#d2a4a43b] rounded-md transition-all duration-150 text-[#626262]`}
      onClick={onClick}
    >
      <Circle size={16} weight="duotone" color="#D2A4A4" />
      {content}
    </button>
  );
};
