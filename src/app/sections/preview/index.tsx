"use client";
import { useEffect, useReducer, useState } from "react";
import { Country } from "@/components/cards/country";
import { CONTINENTS, initialValues } from "./data";
import { Button } from "@/components/button";
import { ActiveMap } from "@/components/map";
import Continent from "./continent";
import { Input } from "@/components/input";
import { toast } from "react-toastify";
import { UseGetData } from "@/hooks/usegetdata";
import { Modal } from "@/components/modal";
import { UseSearchCountryData } from "@/hooks/usesearchcountrydata";
import { PropsTypeReducer } from "./interface";
import { actions } from "./actions";

const reducer =(state: any, action: any) =>{

  const { 
    id, 
    name,
    map, 
    limiter, 
    totalCountries, 
    target, 
    createdCountry } = action

  switch(action.type){
    case actions.toggleContinent: 
    return {
      ...state,
      continent: { id, name, map },
      countryLimiter: 9
    }
    case actions.getCountries:
      return{
        ...state,
        countryLimiter: state.countryLimiter + limiter
      }
    case actions.generateCountries:
      return{
        ...state,
        totalCountries: totalCountries
      }
    case actions.searchCountries:
      return{
        ...state,
        currentTarget: target
      }
    case actions.searchCountryData:
      return{
        ...state,
        countryDataFound: createdCountry
      }
  }
}

export const Preview = () => {
  const [countries, setCountries] = useState([]);
  const [openModal, setOpenModal] = useState(false)
  const [country, setCountry] = useState<string>()

  const [state, dispatch] = useReducer(reducer, initialValues)

  const {
    continent,
    countryLimiter,
    totalCountries,
    currentTarget,
    countryDataFound
  } = state as PropsTypeReducer

  const toggleContinent = (id: number, name: string, map: string) => {
    dispatch({type: actions.toggleContinent, id, name, map})
  };

  const generateCountries = (capturedCountries: any) => {
    setCountries(capturedCountries);

   let totalCountries = capturedCountries.length
    dispatch({type: actions.generateCountries, totalCountries })
  };


  const searchCountry = (e: any) => {
    let target = e.currentTarget.value
    dispatch({type: actions.searchCountries, target})
  }

  const getCountries = () => {
    const reachedlimit = countryLimiter >= totalCountries;
    const limiter = 9
    if (reachedlimit) {
      return showToast('Search completed 😉')
    }
    return  dispatch({type: actions.getCountries, limiter})
  };

  const showToast = ( message:string ) => {
    toast(message, {
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

  const searchCountryData = async(countryName: any) => {
    const {  createdCountry } = await UseSearchCountryData(countryName)
    dispatch({type: actions.searchCountryData, createdCountry})
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
  }, [continent.name, countryLimiter, currentTarget]);

  return (
    <section className="bg-white py-12 lg:py-32">
      <div className="limiter flex flex-col gap-6 sm:gap-14">
        <header className="flex sm:flex-col  justify-between items-start sm:items-center gap-12">
          <div
            id="continents"
            className="flex flex-col sm:flex-row  gap-4 sm:items-center sm:gap-8"
          >
            {CONTINENTS.map(({ id, name, map }) => (
              <Continent
                key={id}
                id={id}
                name={name}
                active={id === continent.id}
                onClick={() => {
                  toggleContinent(id, name, map);
                }}
              />
            ))}
          </div>
          <Input
            onChange={(e: any) => searchCountry(e)}
          />
        </header>

        <div
          id="preview"
          className="flex flex-col items-center lg:flex-row lg:items-start justify-between gap-8 sticky top-0"
        >
          <ActiveMap src={continent.map} />

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
                      onClick={()=> {
                        setOpenModal(true)
                        setCountry(name)
                        }
                      }
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
      <Modal showModal={openModal} onClick={()=> setOpenModal(false)} data={countryDataFound}/>
    </section>
  );
};
