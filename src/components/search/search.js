import { useState } from "react"
import { AsyncPaginate } from "react-select-async-paginate"

const Search = (onSearchChange) => {
  // setSearch will be use to update the value
  // useState(null) is because we init it as null
  const [search, setSearch] = useState(null)

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
    />
  )
}

export default Search
