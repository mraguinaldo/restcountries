import { MagnifyingGlass } from "@phosphor-icons/react";
import { PropsType } from "./interface";

export const Input = ({ onChange }: PropsType) => {
  return (
    <div className="bg-gray-300 flex justify-between pl-6 p-4 rounded-full transition-all duration-500 outline-none w-16 hover:w-[80%] gap-4">
      <input
        type="text"
        placeholder="Search country..."
        className="bg-transparent outline-none w-[80%]"
        onChange={onChange}
      />
      <button className="ml-[-24px]">
        <MagnifyingGlass width={32} height={32} />
      </button>
    </div>
  );
};
