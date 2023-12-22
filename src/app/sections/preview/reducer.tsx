import { actions } from "./actions"

export const reducer =(state: any, action: any) => {

  const { payload } = action

  switch(action.type){
    case actions.toggleContinent: 
    return {
      ...state,
      continent: payload,
      countryLimiter: 9
    }
    case actions.getCountries:
      return{
        ...state,
        countryLimiter: state.countryLimiter + payload
      }
    case actions.generateCountries:
      return{
        ...state,
        totalCountries: payload
      }
    case actions.searchCountries:
      return{
        ...state,
        currentTarget: payload
      }
    case actions.searchCountryData:
      return{
        ...state,
        countryDataFound: payload
      }
  }
}