"use client";
import { useState } from "react";
import { poppins } from "../../fonts";
import { MagnifyingGlass } from "@phosphor-icons/react";

export const Preview = () => {
  const [continentActive, setContinentActive] = useState(0);

  const continents = [
    { id: 0, name: "Africa", image: "/african-continent.png" },
    { id: 1, name: "America", image: "/american-continent.png" },
    { id: 2, name: "Europa", image: "/european-continent.png" },
    { id: 3, name: "Asia", image: "/asian-continent.png" },
    { id: 4, name: "Oceania", image: "/oceania-continent.png" },
    { id: 5, name: "Antartida", image: "/antarctic-continent.png" },
  ];

  const [activeContinentMap, setActiveContinentMap] = useState(
    continents[0].image
  );

  return (
    <section className="bg-white py-12 lg:py-32">
      <div className="limiter flex flex-col gap-6 sm:gap-28">
        <header className="flex sm:flex-col lg:flex-row justify-between items-start sm:items-center gap-12">
          <div
            id="continents"
            className="flex flex-col sm:flex-row  gap-4 sm:items-center sm:gap-8"
          >
            {continents.map(({ id, name, image }) => (
              <div
                key={id}
                id="continent"
                onClick={() => {
                  setContinentActive(id);
                  setActiveContinentMap(image);
                }}
              >
                <h4
                  className={`${
                    poppins.className
                  } cursor-pointer border-b text-lg  lg:text-2xl  ${
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
          <div className="bg-gray-300 flex justify-between pl-6 p-4 rounded-full transition-all duration-500 outline-none w-16 hover:w-full gap-4">
            <input
              type="text"
              placeholder="Search country..."
              className="bg-transparent outline-none w-[90%]"
            />
            <button className="ml-[-24px]">
              <MagnifyingGlass width={32} height={32} />
            </button>
          </div>
        </header>

        <div id="preview">
          <div id="view__continent" className="">
            <img src={activeContinentMap} alt="" width={490} height={490} />
          </div>
          <div id="view-country"></div>
        </div>
      </div>
    </section>
  );
};
