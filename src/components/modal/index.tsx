/* eslint-disable react/no-children-prop */
/* eslint-disable @next/next/no-img-element */

import { poppins } from "@/app/fonts"
import { CountryDescription } from "./countrydescription";
import { Accordion } from "./accordion";
import { useState } from "react";
import { X } from "@phosphor-icons/react";

interface PropsType{
  showModal: boolean,
  onClick: ()=> void
}

export const Modal =({ showModal, onClick }: PropsType) => {
  const [showContent, setShowContent] = useState(100)

 const accordionsCountry = [
  {
    id: 0, 
    headerContent: 'Maps', 
    children: [ 'Google Maps', 'Aguinaldo Maps']
  },
  {
    id: 1, 
    headerContent: 'Translations', 
    children: [ 'Angola', 'Luanda']
  },
  {
    id: 2, 
    headerContent: 'Languages', 
    children: [ 'Portugese', 'Ingles', 'Francês']
  }
 ]

  const aboutCountry = [
    { id: 0, about: 'Nome', content: 'Angola'},
    { id: 1, about: 'Capital', content: 'Luanda'},
  ]

  const othersInformations = [
    { id: 0, about: 'Area', content: 2780400},
    { id: 1, about: 'Population', content: 45376763},
    { id: 2, about: 'Currency', content: 'AOA'},
  ]

  const hideChildren = (id: number) => {
    const isDisplayed = id === showContent

    if(isDisplayed){
      return setShowContent(100)
    }
    return setShowContent(id)
  }

  return(
    <div id="main" className={`fixed top-12 max-w-xs right-8 w-full animate-fade_up 
      ${showModal ? 'flex' : 'hidden'}
    `}>
      <div className="container w-full max-w-xs bg-white shadow-md 
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
            <img src="" alt="flag" />
            {aboutCountry.map(({id, about, content})=>(
              <CountryDescription key={id} about={about} content={content}/>
            ))}
          </div>
          <div id="about_continent">
            <span className={`${poppins.className} font-semibold text-gray-700`}>
              Africa
            </span>
          </div>
        </div>
        <div id="accordions_area" className="w-full max-w-xs bg-gray-100 p-2 
          rounded-xl flex flex-col"
        >
        {accordionsCountry.map(({id, headerContent, children})=>(
          <Accordion 
            key={id} 
            headerContent={headerContent} 
            onClick={()=> hideChildren(id)}
            showContent={id === showContent} 
            children={children}/>
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