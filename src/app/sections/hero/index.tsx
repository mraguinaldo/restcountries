"use client";
import { Wrapper } from "./style";
import { countries } from "./data";
import { poppins } from "../../fonts";

export const Hero = () => {
  return (
    <Wrapper className="flex items-center ">
      <div className="limiter">
        <div className="text__area  bg-[#59535348] w-full max-w-[646px]  px-8 py-4 sm:py-12 sm:px-8">
          <h1
            className={` ${poppins.className} text-4xl lg:text-6xl text-white font-normal leading-[130%]`}
          >
            Search for any country and learn a little about it
          </h1>

          <div className="countries ">
            {countries.map(({ id, name, src }) => (
              <img
                className="w-full max-w-[48px] sm:max-w-[64px]"
                key={id}
                src={src}
                alt={name}
              />
            ))}
            <span
              className={`${poppins.className} text-[#BFBCBC] text-sm sm:text-2xl font-normal ml-32 sm:ml-36`}
            >
              Discover these countries
            </span>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};
