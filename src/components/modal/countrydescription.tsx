import { poppins } from "@/app/fonts"


interface PropsType{
  about: string,
  content: string | number
}

export const CountryDescription = ({about, content}: PropsType) => {
  return(
    <span className={`${poppins.className} font-medium text-gray-700`}>
      <strong className='text-gray-900 font-bold'>{about}: </strong> 
        {content}
    </span>
  )
}