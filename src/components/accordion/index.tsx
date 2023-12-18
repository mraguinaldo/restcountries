import { CaretUp } from "@phosphor-icons/react"
import { PropsType } from "./interface"

export const Accordion = ({ 
  onClick, 
  showContent, 
  headerContent, 
  children, 
  Icon }: PropsType) => {
  return(
    <div className="w-full flex flex-col gap-1">
      <div id="header"  
        className="flex w-full justify-between cursor-pointer text-gray-700 font-bold" 
        onClick={ onClick }
      >
        <div className="flex gap-1 items-start justify-start">
          {Icon}
          <h4>{headerContent}</h4>
        </div>
        <CaretUp size={24} color="#212121" className={`
         ${showContent ? 'animate-arrowDown' : 'animate-arrowUp'}`}
        />
      </div>
      <div id="content" 
        className={`w-full flex flex-col gap-[2px] overflow-scroll p-2 transition-all duration-300
        ${ showContent ? `${headerContent === 'Translations' ? 'h-24' : 'h-auto'} h-24 opacity-1 pointer-events-auto`
          : 'h-0 opacity-0 pointer-events-none'}`}>
          {children?.map((content: any, index: number)=>(
            <span key={index} 
            className={`text-sm ${content?.mapName && 
              'cursor-pointer transition-all duration-300 hover:ml-1'}
            `}
            onClick={()=> {
              content?.mapName && window.open(content?.url)
            }}>
              {content?.mapName ? content?.mapName : content}
            </span>
          ))}
      </div>
    </div>
  )
}