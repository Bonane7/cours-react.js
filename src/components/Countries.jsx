import { useEffect, useState } from "react";

function Countries() {
  const [listCountries, setListCountries] = useState([]);

  console.log(listCountries);
  useEffect(() => {
    //https://restcountries.com/v3.1/all?fields=name,capital,currencies,region,languages,borders,flags,population
    fetch(
      "https://restcountries.com/v3.1/all?fields=name,capital,currencies,region,languages,borders,flags,population"
    )
      .then((Response) => Response.json())
      .then((data) => setListCountries(data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      <nav className="w-full h-20 bg-blue-700 text-white flex items-center ">
        <p className="font-bold text-2xl">Countries List</p>
      </nav>
      <div className="mt-10 grid lg:grid-cols-4 lg:gap-10 lg:px-40 md:grid-cols-2 md:items-between md:gap-8 md:px-8 sm:grid-cols-1 sm:gap-4 sm:px-4">
        {listCountries.map((country) => (
          <div key={country.name.common}>
            {/* Name Country */}
            <h2 className="text-blue-700 font-bold text-2xl pb-2">Country: {country.name.common}</h2>
            
            {/* Flague */}
            <img src={country.flags.svg} />
            <p className="text-green-400 font-semibold">Population: {country.population}</p>

            {/* Language */}
            <div className="flex gap-2">
              {Object.values(country.languages || {}).map((lang) => (
                <p className="text-green-400 font-semibold" key={lang}>Langue: {lang}</p>
              ))}
            </div>

              {/* borders */}
            <div key={country.borders} className="flex gap-4">
              {country.borders?.map((border) => (
                <p  key={border} className="flex text-green-400 font-semibold">
                  {border}
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Countries;
