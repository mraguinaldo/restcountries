import { poppins } from "@/app/fonts";

interface PropsType {
  active: boolean;
  name: string;
  onClick: () => void;
}

const Continent = ({ onClick, active, name }: PropsType) => {
  return (
    <h4
      onClick={onClick}
      className={`${
        poppins.className
      } cursor-pointer border-b text-sm  lg:text-lg  ${
        active
          ? "text-[#D2A4A4] border-[#D2A4A4] transition-all duration-300"
          : "text-[#353535] border-[#353535]"
      }`}
    >
      {name}
    </h4>
  );
};

export default Continent;
