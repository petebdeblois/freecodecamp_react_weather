import { useState } from "react"
import { AsyncPaginate } from "react-select-async-paginate"
import { GEO_API_URL, geoApiOptions } from "../../api"

const Search = (onSearchChange) => {
  // setSearch will be use to update the value
  // useState(null) is because we init it as null
  const [search, setSearch] = useState(null)
  
  const loadOptions = async (inputValue) => {
    try {
      const response = await fetch(`${GEO_API_URL}/cities?minPopulation=500000&namePrefix=${inputValue}`, geoApiOptions);
      const response_1 = await response.json()
      return {
        options: response_1.data.map((city) => {
          return {
            value: `${city.latitude} ${city.longitude}`,
            label: `${city.name}, ${city.countryCode}`,
          };
        })
      }
    } catch (err) {
      return console.error(err)
    }
  }

  const handleOnChange = (searchData) => {
    setSearch(searchData);
    onSearchChange();
  }


  return (
    <AsyncPaginate
      placeholder='Search'
      debounceTimeout={600}
      value={search}
      onChange={handleOnChange}
      loadOptions={loadOptions}
    />
  )
}

export default Search
