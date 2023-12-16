"use client";
import { useEffect, useState } from "react";
import { Country } from "@/components/cards/country";
import { CONTINENTS } from "./data";
import { Button } from "@/components/button";
import { ActiveMap } from "@/components/map";
import Continent from "./continent";
import { Input } from "@/components/input";
import { toast } from "react-toastify";
import { UseGetData } from "@/hooks/usegetdata";
import { Modal } from "@/components/modal";
import { API } from "@/services/data";

export const Preview = () => {
  const [continent, setContinent] = useState({ name: "Africa", id: 0 });
  const [countryLimiter, setCountryLimiter] = useState(9);
  const [totalCountries, setTotalCountries] = useState(0);
  const [activeMap, setActiveMap] = useState(CONTINENTS[0].image);
  const [countries, setCountries] = useState([]);
  const [currentTarget, setCurrentTarget] = useState("");
  const [openModal, setOpenModal] = useState(false)
  const [country, setCountry] = useState('')
  const [createdCountry, setCreatedCountry] = useState<any>()

  const toggleContinent = (id: number, image: string, name: string) => {
    setContinent({ name, id });
    setCurrentTarget("");
    changeMap(image);
  };

  const changeMap = (image: string) => {
    setActiveMap(image);
  };

  const generateCountries = (capturedCountries: any) => {
    setCountries(capturedCountries);
    setTotalCountries(capturedCountries.length);
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

  const handlecloseModal = () => {
    setOpenModal(false)
  }

  // window.addEventListener('scroll', handlecloseModal)

  const searchCountryData = async(countryName: string) => {
    setOpenModal(true)
    const { data } =  await API.get('/')
    const filteredCountry = data.filter((country: any)=> country.name.common === countryName)

    let criado;

    filteredCountry.map((country: any)=>{
      const {
        name, 
        capital, 
        continents, 
        maps, 
        translations, 
        languages, 
        flag, 
        area, 
        population, 
        currencies } = country

    criado = {
        name: name.common,
        capital: capital[0],
        continent: continents[0],
        maps: Object.entries(maps).map(([mapName, url])=> ({mapName, url})),
        translations: Object.entries(translations)
        .map(([country, translate]: any)=> (translate.official)),
        languages: Object.entries(languages).map(([country, language])=> (language)),
        flag,
        area,
        population,
        currency: Object.entries(currencies)
        .map(([name, currency]: any)=> (currency.symbol))
      }
      
    })

    return setCreatedCountry(criado)
  }
  
  useEffect(() => {
    searchCountryData(country)
  }, [country])

  useEffect(() => {
    const fetchData = async () => {
      let { capturedCountries } = await UseGetData({
        continent: continent.name,
        currentTarget: currentTarget,
      });
      generateCountries(capturedCountries);
    };

    fetchData();
  }, [continent, countryLimiter, currentTarget]);

  return (
    <section className="bg-white py-12 lg:py-32">
      <div className="limiter flex flex-col gap-6 sm:gap-14">
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
          <Input
            onChange={(e: any) => setCurrentTarget(e.currentTarget.value)}
          />
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
              {countries.map(
                ({ name, capital, flag }, index: number) =>
                  index < countryLimiter && (
                    <Country
                      key={index}
                      id={index}
                      name={name}
                      capital={capital}
                      flag={flag}
                      onClick={()=> setCountry(name)}
                    />
                  )
              )}
            </div>

            <div
              id="see__more__countries"
              className="flex flex-col-reverse justify-center gap-4 sm:flex-row sm:justify-between w-full items-center"
            >
              <h4 className="font-medium flex gap-1">
                Total countries:
                <span className="text-[#D2A4A4] font-semibold">
                  {totalCountries}
                </span>
              </h4>
              <Button content="See more countries" onClick={getCountries} />
            </div>
          </div>
        </div>
      </div>
      <Modal showModal={openModal} onClick={()=> setOpenModal(false)} data={createdCountry}/>
    </section>
  );
};
