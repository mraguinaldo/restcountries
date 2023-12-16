import { API } from "@/services/data";


export const UseSearchCountryData =  async(countryName: string) => {
  const { data } =  await API.get('/')
    const filteredCountry = data.filter((country: any)=> country.name.common === countryName)

    let createdCountry;

    filteredCountry.map((country: any)=>{
      const {
        name, 
        capital, 
        continents, 
        maps, 
        translations, 
        languages, 
        flag, 
        area, 
        population, 
        currencies } = country

    return createdCountry = {
        name: name.common,
        capital: capital[0],
        continent: continents[0],
        maps: Object.entries(maps).map(([mapName, url])=> ({mapName, url})),
        translations: Object.entries(translations)
        .map(([country, translate]: any)=> (translate.official)),
        languages: Object.entries(languages).map(([country, language])=> (language)),
        flag,
        area,
        population,
        currency: Object.entries(currencies)
        .map(([name, currency]: any)=> (currency.symbol))
      }
      
    })

    return await { createdCountry }
}