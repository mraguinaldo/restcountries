import { PropsType } from "./interface";

export const CONTINENTS: PropsType[] = [
  { id: 0, name: "Africa", map: "/african-continent.png" },
  { id: 1, name: "North America", map: "/american-continent.png" },
  { id: 2, name: "South America", map: "/american-continent.png" },
  { id: 3, name: "Europe", map: "/european-continent.png" },
  { id: 4, name: "Asia", map: "/asian-continent.png" },
  { id: 5, name: "Oceania", map: "/oceania-continent.png" },
  { id: 6, name: "Antarctica", map: "/antarctic-continent.png" },
];

export const initialValues = {
  continent: {id: 0, name: CONTINENTS[0].name, map: CONTINENTS[0].map},
  countryLimiter: 9,
  totalCountries: 0,
  currentTarget: '',
  countryDataFound: {}
}