"use client";
import { useEffect, useState } from "react";
import { API } from "@/services/data";
import { Country } from "@/components/cards/country";
import { CONTINENTS } from "./data";
import { Button } from "@/components/button";
import { ActiveMap } from "@/components/map";
import Continent from "./continent";
import { Input } from "@/components/input";
import { toast } from "react-toastify";

export const Preview = () => {
  const [continent, setContinent] = useState({ name: "Africa", id: 0 });
  const [countryLimiter, setCountryLimiter] = useState(9);
  const [totalCountries, setTotalCountries] = useState(0);
  const [activeMap, setActiveMap] = useState(CONTINENTS[0].image);
  const [countries, setCountries] = useState([]);

  const toggleContinent = (id: number, image: string, name: string) => {
    setContinent({ name, id });
    changeMap(image);
  };

  const changeMap = (image: string) => {
    setActiveMap(image);
  };

  const captureCountries = (data: []) => {
    let capturedCountries = data.filter(
      (country: any) => country.continents[0] === continent.name
    );

    generateCountries(capturedCountries);
  };

  const generateCountries = (capturedCountries: any) => {
    let countriesCreated: any = [];
    capturedCountries.map((country: any, index: number) => {
      let conditionGenerateCountry = index < countryLimiter;
      if (conditionGenerateCountry) {
        const { name, capital, flags } = country;
        let countryCreated = {
          name: name.common,
          capital,
          flag: flags.png,
        };

        countriesCreated.push(countryCreated);
      }

      setCountries(countriesCreated);
    });

    getTotalCountries(capturedCountries);
  };

  const getTotalCountries = (capturedCountries: any) => {
    let sizeCapturedCountries = capturedCountries.length;
    setTotalCountries(sizeCapturedCountries);
  };

  const getCountries = () => {
    const reachedlimit = countryLimiter >= totalCountries;
    if (reachedlimit) {
      return toast("Search completed 😉", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
    return setCountryLimiter((prev) => prev + 9);
  };

  let filtered: any;

  const getDataApi = async (currentTarget: string) => {
    const { data } = await API.get("/");

    filtered = data.filter((country: any) =>
      country.name.common.includes(currentTarget)
    );

    console.log(filtered);
  };

  useEffect(() => {
    const fetchDataAPI = async () => {
      const { data } = await API.get("/");
      captureCountries(data);
    };

    fetchDataAPI();
  }, [continent, countryLimiter]);

  return (
    <section className="bg-white py-12 lg:py-32">
      <div className="limiter flex flex-col gap-6 sm:gap-28">
        <header className="flex sm:flex-col  justify-between items-start sm:items-center gap-12">
          <div
            id="continents"
            className="flex flex-col sm:flex-row  gap-4 sm:items-center sm:gap-8"
          >
            {CONTINENTS.map(({ id, name, image }) => (
              <Continent
                key={id}
                id={id}
                name={name}
                active={id === continent.id}
                onClick={() => {
                  toggleContinent(id, image, name);
                  setCountryLimiter(9);
                }}
              />
            ))}
          </div>
          <Input onChange={(e: any) => getDataApi(e.currentTarget.value)} />
        </header>

        <div
          id="preview"
          className="flex flex-col items-center lg:flex-row lg:items-start justify-between gap-8 sticky top-0"
        >
          <ActiveMap src={activeMap} />

          <div id="see__countries">
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
              id="see__more__countries"
              className="flex justify-between w-full items-center"
            >
              <h4 className="font-medium flex gap-1">
                Total countries:
                <span className="text-[#D2A4A4] font-semibold">
                  {totalCountries}
                </span>
              </h4>
              <Button onClick={getCountries} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
