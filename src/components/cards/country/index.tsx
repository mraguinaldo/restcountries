import { motion } from "framer-motion";
import { PropsType } from "./interface";

export const Country = ({ id, flag, name, capital }: PropsType) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3, delay: 0.2 }}
      key={id}
      className="flex flex-col p-4 gap-2 items-start hover:bg-[#b8b8b838] rounded-md transition-all duration-300 cursor-pointer sm:hover:scale-110 w-52"
    >
      <div id="flag">
        <img src={flag} alt={name} className="w-24 h-14" />
      </div>
      <div className="info mt-[-4px]">
        <h4 className="font-semibold">{name}</h4>
        <span className="text-sm text-[#494949]">{capital}</span>
      </div>
    </motion.div>
  );
};
