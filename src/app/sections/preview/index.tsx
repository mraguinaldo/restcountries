"use client";
import { useEffect, useState } from "react";
import { poppins } from "../../fonts";
import { MagnifyingGlass, Circle } from "@phosphor-icons/react";
import { API } from "@/services/data";
import { Country } from "@/components/cards/country";
import { CONTINENTS } from "./data";

export const Preview = () => {
  const [continentActive, setContinentActive] = useState(0);
  const [continent, setContinent] = useState("Africa");
  const [limiter, setLimiter] = useState(9);
  const [totalContries, setTotalContries] = useState(0);
  const [activeContinentMap, setActiveContinentMap] = useState(
    CONTINENTS[0].image
  );
  const [countries, setCountries] = useState([
    { name: "", capital: "", flag: "" },
  ]);

  const handleToogleContinentActive = (
    id: number,
    image: string,
    name: string
  ) => {
    setContinentActive(id);
    handleToogleMapContinentActive(image);
    handleGetDataForContinentActive(name);
  };

  const handleToogleMapContinentActive = (image: string) => {
    setActiveContinentMap(image);
  };

  const handleGetDataForContinentActive = (name: string) => {
    setContinent(name);
  };

  let allConutries: any;

  let newConuntries: any = [];

  useEffect(() => {
    const getDataApi = async () => {
      let { data } = await API.get("/");

      // console.log(data);

      allConutries = data.filter(
        (country: any) => country.continents[0] === continent
      );

      setTotalContries(allConutries.length);

      // data.map((country: any) => {
      //   console.log(country.continents[0]);
      // });

      allConutries.map((countr: any, index: number) => {
        if (index < limiter) {
          let myCountry = {
            name: countr.name.common,
            capital: countr.capital,
            flag: countr.flags.png,
          };
          newConuntries.push(myCountry);
        }
      });
      return setCountries(newConuntries);
    };

    getDataApi();
  }, [continent, limiter]);

  return (
    <section className="bg-white py-12 lg:py-32">
      <div className="limiter flex flex-col gap-6 sm:gap-28">
        <header className="flex sm:flex-col  justify-between items-start sm:items-center gap-12">
          <div
            id="continents"
            className="flex flex-col sm:flex-row  gap-4 sm:items-center sm:gap-8"
          >
            {CONTINENTS.map(({ id, name, image }) => (
              <div
                key={id}
                id="continent"
                onClick={() => {
                  handleToogleContinentActive(id, image, name);
                }}
              >
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

        <div
          id="preview"
          className="flex flex-col items-center lg:flex-row lg:items-start justify-between gap-8 sticky top-0"
        >
          <div id="view__continent" className="">
            <img src={activeContinentMap} alt="" width={490} height={490} />
          </div>

          <div id="view-countries">
            <div
              id="countries"
              className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-3 gap-4 w-full max-w-[700px]"
            >
              {countries.map(({ name, capital, flag }, index: number) => (
                <Country
                  key={index}
                  id={index}
                  name={name}
                  capital={capital}
                  flag={flag}
                />
              ))}
            </div>

            <div
              id="more__country"
              className="flex justify-between w-full items-center"
            >
              <h4 className="font-medium">
                Total country:{" "}
                <span className="text-[#D2A4A4] font-semibold">
                  {totalContries}
                </span>
              </h4>
              <button
                className={`${poppins.className} flex items-center gap-2 px-8 py-4 cursor-pointer hover:bg-[#d2a4a43b] rounded-md transition-all duration-150 text-[#626262]`}
                onClick={() => setLimiter(limiter + 9)}
              >
                <Circle size={16} weight="duotone" color="#D2A4A4" />
                See more country
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
