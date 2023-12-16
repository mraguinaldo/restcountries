/* eslint-disable react/no-children-prop */
/* eslint-disable @next/next/no-img-element */

import { poppins } from "@/app/fonts"
import { CountryDescription } from "./countrydescription";
import { Accordion } from "./accordion";
import { useState } from "react";
import { X, MapPin, Translate, GlobeStand } from "@phosphor-icons/react";

interface PropsType{
  showModal: boolean,
  onClick: ()=> void
  data: any
}

export const Modal =({ showModal, onClick, data }: PropsType) => {
  const [showContent, setShowContent] = useState(100)

  console.log(data)

 const accordionsCountry = [
  {
    id: 0, 
    headerContent: 'Maps', 
    children: data?.maps,
    Icon: MapPin
  },
  {
    id: 1, 
    headerContent: 'Translations', 
    children: data?.translations,
    Icon: GlobeStand
  },
  {
    id: 2, 
    headerContent: 'Languages', 
    children: data?.languages,
    Icon: Translate 
  }
 ]

  const aboutCountry = [
    { id: 0, about: 'Name', content: data?.name},
    { id: 1, about: 'Capital', content: data?.capital},
  ]

  const othersInformations = [
    { id: 0, about: 'Area', content: `${data?.area} km²`},
    { id: 1, about: 'Population', content: data?.population},
    { id: 2, about: 'Currency', content: data?.currency[0]},
  ]

  const hideChildren = (id: number) => {
    const isDisplayed = id === showContent

    if(isDisplayed){
      return setShowContent(100)
    }
    return setShowContent(id)
  }

  return(
    <div id="main" className={`fixed top-12 max-w-sm sm:max-w-md right-1 sm:right-8 w-full          animate-fade_up 
      ${showModal ? 'flex' : 'hidden'}
    `}>
      <div className="container w-full max-w-md bg-white shadow-md 
        p-6 rounded-2xl flex flex-col gap-4"
      >
        <button id="close_modal" 
          className="w-full max-w-[30px] h-24px flex items-center justify-center
          rounded-full p-1 cursor-pointer duration-200 transition-all hover:bg-[#41414170]" 
          onClick={onClick}
        >
          <X size={22} color='#1c1c1c'/>
        </button>
        <div id="top_area" className="flex justify-between items-start">
          <div id="about_country" className="flex flex-col gap-2 items-start">
            <span>{data?.flag}</span>
            {aboutCountry.map(({id, about, content})=>(
              <CountryDescription key={id} about={about} content={content}/>
            ))}
          </div>
          <div id="about_continent">
            <span className={`${poppins.className} font-semibold text-gray-700`}>
              {data?.continent}
            </span>
          </div>
        </div>
        <div id="accordions_area" className="w-full max-w-md bg-gray-100 p-2 
          rounded-xl flex flex-col"
        >
        {accordionsCountry.map(({id, headerContent, children, Icon})=>(
          <Accordion 
            key={id} 
            headerContent={headerContent} 
            onClick={()=> hideChildren(id)}
            showContent={id === showContent} 
            children={children}
            Icon={<Icon weight="duotone" size={24} className="pt-[2px]"/>}
            />
        ))}

        </div>
        <div id="others__informations" className='flex flex-col gap-2'>
          {othersInformations.map(({id, about, content})=>(
              <CountryDescription key={id} about={about} content={content}/>
          ))}
        </div>
      </div>
    </div>
  )
}