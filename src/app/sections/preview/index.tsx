"use client";
import { useState } from "react";
import { poppins } from "../../fonts";

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
    <section className="bg-white">
      <div className="limiter ">
        <header>
          <div id="continents" className="flex items-center gap-8">
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
                  } cursor-pointer border-b  text-2xl  ${
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
        </header>

        <div id="preview">
          <div id="view__continent" className="">
            <img src={activeContinentMap} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};
