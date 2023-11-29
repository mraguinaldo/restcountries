import { poppins } from "../../../fonts";
import { MagnifyingGlass } from "@phosphor-icons/react";
import { CONTINENTS } from "../data";

interface PropsType {
  onClick: () => void;
  continentActive: number;
}

const Header = ({ onClick, continentActive }: PropsType) => {
  return (
    <header className="flex sm:flex-col  justify-between items-start sm:items-center gap-12">
      <div
        id="continents"
        className="flex flex-col sm:flex-row  gap-4 sm:items-center sm:gap-8"
      >
        {CONTINENTS.map(({ id, name, image }) => (
          <div key={id} id="continent" onClick={() => onClick}>
            <h4
              className={`${
                poppins.className
              } cursor-pointer border-b text-sm  lg:text-lg  ${
                id === continentActive
                  ? "text-[#D2A4A4] border-[#D2A4A4] transition-all duration-300"
                  : "text-[#353535] border-[#353535]"
              }`}
            >
              {name}
            </h4>
          </div>
        ))}
      </div>
      <div className="bg-gray-300 flex justify-between pl-6 p-4 rounded-full transition-all duration-500 outline-none w-16 hover:w-[80%] gap-4">
        <input
          type="text"
          placeholder="Search country..."
          className="bg-transparent outline-none w-[80%]"
        />
        <button className="ml-[-24px]">
          <MagnifyingGlass width={32} height={32} />
        </button>
      </div>
    </header>
  );
};

export default Header;
