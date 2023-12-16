import { CaretUp } from "@phosphor-icons/react"

interface PropsType{
  onClick: ()=> void,
  showContent: boolean,
  headerContent: string,
  children: string[]
}

export const Accordion = ({ onClick, showContent, headerContent, children }: PropsType) => {
  return(
    <div className="w-full flex flex-col gap-1">
      <div id="header"  className="flex w-full justify-between cursor-pointer text-gray-700 font-bold" 
        onClick={ onClick }
      >
        {headerContent}
        <CaretUp size={24} color="#212121" className={`
         ${showContent ? 'animate-arrowDown' : 'animate-arrowUp'}`}
        />
      </div>
      <div id="content" className={`w-full flex flex-col gap-[2px] p-2 transition-all duration-300
        ${ showContent ? 'h-auto opacity-1 pointer-events-auto'
          : 'h-0 opacity-0 pointer-events-none'}`}>
          {children.map((content, index)=>(
            <span key={index} className="text-sm">{content}</span>
          ))}
      </div>
    </div>
  )
}