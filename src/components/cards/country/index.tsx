interface PropsType {
  id: number;
  flag: string;
  name: string;
  capital: string;
}

export const Country = ({ id, flag, name, capital }: PropsType) => {
  return (
    <div
      key={id}
      className="flex flex-col p-4 gap-2 items-start hover:bg-[#b8b8b838] rounded-md transition-all duration-300 cursor-pointer sm:hover:scale-110"
    >
      <div id="flag">
        <img src={flag} alt={name} className="w-24 h-14" />
      </div>
      <div className="info mt-[-4px]">
        <h4 className="font-semibold">{name}</h4>
        <span className="text-sm text-[#494949]">{capital}</span>
      </div>
    </div>
  );
};
