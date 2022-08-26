import { useState } from "react";
import { AsyncPaginate } from "react-select-async-paginate";
import { GEO_API_URL, geoApiOptions } from "../shared/api";
import { CitySearchResult } from "../shared/sharedTypes";

type SearchProps = {
    onSearchChange(searchData: CitySearchResult): void;
};

const Search = ({ onSearchChange }: SearchProps) => {
    const [search, setSearch] = useState(null);

    const loadOptions = (inputValue: string): any => {
        return fetch(`${GEO_API_URL}/cities?minPopulation=10000&namePrefix=${inputValue}`, geoApiOptions)
            .then(response => response.json())
            .then(response => ({
                options: response.data.map((city: any) => ({
                    value: `${city.latitude} ${city.longitude}`,
                    label: `${city.name}, ${city.countryCode}`
                }))
            }))
            .catch(err => console.error(err));

    }

    const handleOnChange = (searchData: any) => {
        setSearch(searchData);
        onSearchChange(searchData);
    }

    return (
        <AsyncPaginate
            placeholder='Search for a city'
            debounceTimeout={1000}
            value={search}
            onChange={handleOnChange}
            loadOptions={loadOptions}
        />
    );
}

export default Search;