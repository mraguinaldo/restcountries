import {
  WhatsappLogo,
  FacebookLogo,
  LinkedinLogo,
  InstagramLogo,
  YoutubeLogo,
} from "@phosphor-icons/react";

interface PropsType{
  id: number,
  Icon: any,
  name: string,
  externLink: string
}

export const SOCIALMEDIA: PropsType[] = [
  {
    id: 0,
    Icon: FacebookLogo,
    name: "facebook",
    externLink: "octoplus.delopers",
  },
  {
    id: 1,
    Icon: InstagramLogo,
    name: "instagram",
    externLink: "octoplus.delopers",
  },
  {
    id: 2,
    Icon: WhatsappLogo,
    name: "whatsApp",
    externLink: "octoplus.delopers",
  },
  {
    id: 3,
    Icon: LinkedinLogo,
    name: "linkedin",
    externLink: "octoplus.delopers",
  },
  {
    id: 4,
    Icon: YoutubeLogo,
    name: "youtube",
    externLink: "octoplus.delopers",
  },
];