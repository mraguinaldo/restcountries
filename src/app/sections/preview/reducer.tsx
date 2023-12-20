import { actions } from "./actions"

export const reducer =(state: any, action: any) => {

  const { 
    id, 
    name,
    map, 
    limiter, 
    totalCountries, 
    target, 
    createdCountry } = action

  switch(action.type){
    case actions.toggleContinent: 
    return {
      ...state,
      continent: { id, name, map },
      countryLimiter: 9
    }
    case actions.getCountries:
      return{
        ...state,
        countryLimiter: state.countryLimiter + limiter
      }
    case actions.generateCountries:
      return{
        ...state,
        totalCountries: totalCountries
      }
    case actions.searchCountries:
      return{
        ...state,
        currentTarget: target
      }
    case actions.searchCountryData:
      return{
        ...state,
        countryDataFound: createdCountry
      }
  }
}