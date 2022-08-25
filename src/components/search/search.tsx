import { useState } from "react";
import { AsyncPaginate } from "react-select-async-paginate";
import { GEO_API_URL, geoApiOptions } from "../../api";

type SearchProps = {
    onSearchChange(searchData: any): void;
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
            placeholder='Search fro a city'
            debounceTimeout={800}
            value={search}
            onChange={handleOnChange}
            loadOptions={loadOptions}
        />
    );
}

export default Search;