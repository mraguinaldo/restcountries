import { API } from "@/services/data";
import { PropsType } from "./interface";

export const UseGetData = async ({ continent, currentTarget }: PropsType) => {
  const { data } = await API.get("/");

  let filteredCountries: any;
  let capturedCountries: any = [];

  const generateCountry = (countries: any) => {
    countries.map((country: any) => {
      const { name, capital, flags } = country;
      let countryGenerated = {
        name: name.common,
        capital,
        flag: flags.png,
      };

      capturedCountries.push(countryGenerated);
    });
  };

  const getCountries = () => {
    let firstLetterCapitalized = currentTarget
      .slice(0, 1)
      .toUpperCase()
      .concat(currentTarget.slice(1).toLowerCase());
    let targetValue = firstLetterCapitalized;

    if (targetValue.length === 0) {
      filteredCountries = data.filter(
        (country: any) => country.continents[0] === continent
      );
      return generateCountry(filteredCountries);
    }
    filteredCountries = data.filter((country: any) =>
      country.name.common.includes(targetValue)
    );
    return generateCountry(filteredCountries);
  };

  getCountries();

  return await { capturedCountries };
};
