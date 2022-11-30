import React, { useState } from "react";
import { AsyncPaginate } from "react-select-async-paginate";
import { geoApiOptions, GEO_API_URL } from "../../api";

//We don't want to call the api everytime the user hits the keyboard so debounce timeout must be added, now a requuest will be sent after 600ms

//We are basically fetching the weather data and passing it onto the other two widgets
// response of "loadOptions" should be an object with "options" prop, which contains array of options.

//order of fetching data
const Search = ({ onSearchChange }) => {
  const [search, setSearch] = useState("");

  const handleChange = (searchData) => {
    setSearch(searchData);
    onSearchChange(searchData);
  };

  const loadOptions = (inputValue) => {
    return fetch(
      `${GEO_API_URL}/cities?minPopulation=100000&namePrefix=${inputValue}`,
      geoApiOptions
    )
      .then((response) => response.json())
      .then((response) => {
        return {
          options: response.data.map((city) => {
            return {
              value: `${city.latitude} ${city.longitude}`,
              label: `${city.name}, ${city.countryCode}`,
            };
          }),
        };
      })
      .catch((err) => console.error(err));
  };

  return (
    <AsyncPaginate
      placeholder="Search for a city"
      debounceTimeout={600}
      value={search}
      onChange={handleChange}
      loadOptions={loadOptions}
    />
  );
};

export default Search;
// [
//     {
//         value: '',
//         label: ''
//     },
//     {

//     },
//     {

//     }
// ]
//my understanding is that any time you type something in the input field, a request will be sent to the said api, the loadoptions prop will be set equal to an object containing a prop called options which is set to an array of objects returned by the 'loadoptions' function and your search field will be set to the label property of whichever option (which is basically an object) you have selected from the displayed list of options and your searchData which was basically the input field init 