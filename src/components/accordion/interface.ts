import { ReactNode } from "react";

export interface PropsType{
  onClick: ()=> void,
  showContent: boolean,
  headerContent: string,
  children: any,
  Icon: ReactNode
}