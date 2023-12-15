/* eslint-disable @next/next/no-img-element */

import { poppins } from "@/app/fonts"
import { CaretDown } from "@phosphor-icons/react";

interface PropsType{
  showModal: boolean
}

export const Modal =({ showModal }: PropsType) => {
  return(
    <div id="main" className={`fixed top-12 max-w-xs right-8 w-full animate-fade_up 
      ${showModal ? 'flex' : 'hidden'}
    `}>
      <div className="container w-full max-w-xs bg-white shadow-md 
        p-6 rounded-2xl flex flex-col gap-4"
      >
        <div id="top_area" className="flex justify-between items-start">
          <div id="about_country" className="flex flex-col gap-2 items-start">
            <img src="" alt="flag" />
            <span className={`${poppins.className} font-medium text-gray-500`}>
              <strong className='text-gray-600 font-bold'>Name: </strong> 
              Angola
            </span>
            <span className={`${poppins.className} font-medium text-gray-500`}>
              <strong className='text-gray-600 font-bold'>Capital: </strong> 
              Luanda
            </span>
          </div>
          <div id="about_continent">
            <span className={`${poppins.className} font-semibold text-gray-700`}>
              Africa
            </span>
          </div>
        </div>
        <div id="maps_area" className="w-full max-w-xs bg-gray-100 p-2 
          rounded-xl gap-2 flex flex-col"
        >
          <button className="flex justify-between w-full text-gray-700" onClick={()=> alert('Clicou')}>
            Maps
            <CaretDown size={24} color="#212121"/>
          </button>
          <button className="flex justify-between w-full text-gray-700" onClick={()=> alert('Clicou')}>
            Translations
            <CaretDown size={24} color="#212121"/>
          </button>
          <button className="flex justify-between w-full text-gray-700" onClick={()=> alert('Clicou')}>
            Languages
            <CaretDown size={24} color="#212121"/>
          </button>
        </div>
        <div id="others__informations" className='flex flex-col gap-2'>
          <span className={`${poppins.className} font-normal text-gray-700`}>
            <strong className="font-bold">Area: </strong> 
            2780400
          </span>
          <span className={`${poppins.className} font-semibold text-gray-700`}>
            <strong className="font-bold">Population: </strong>
            45376763
          </span>
          <span className={`${poppins.className} font-semibold text-gray-700`}>
            <strong className="font-bold">Currency: </strong>
            AOA
          </span>
        </div>
      </div>
    </div>
  )
}