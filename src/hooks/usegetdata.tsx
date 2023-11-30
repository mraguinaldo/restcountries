import { API } from "@/services/data";

export const UseGetData = async () => {
  const { data } = await API.get("/");

  let filtered = data.filter((country: any) =>
    country.name.common.includes("Angola")
  );

  let newCountriesCaptured: any = [];
  filtered.map((country: any, index: number) => {
    let conditionGenerateCountry = index < 9;
    if (conditionGenerateCountry) {
      const { name, capital, flags } = country;
      let countryCreated = {
        name: name.common,
        capital,
        flag: flags.png,
      };

      newCountriesCaptured.push(countryCreated);
    }
  });



  console.log(newCountriesCaptured)

  return(
    <h1>dsdsd</h1>
  )
};



