import { poppins } from "@/app/fonts"
import { PropsTypeCountryDescription } from "./interfaces"

export const CountryDescription = ({about, content}: PropsTypeCountryDescription) => {
  return(
    <span className={`${poppins.className} font-medium text-gray-700`}>
      <strong className='text-gray-900 font-bold'>{about}: </strong> 
        {content}
    </span>
  )
}