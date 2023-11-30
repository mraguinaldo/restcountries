import { poppins } from "@/app/fonts";
import { motion } from "framer-motion";
import { PropsType } from "./interface";

const Continent = ({ onClick, active, name, id }: PropsType) => {
  return (
    <motion.h4
      initial={{ opacity: 0, x: 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, delay: id / 6 + 0.9 }}
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
    </motion.h4>
  );
};

export default Continent;
