import CurrentWeather from "../components/currentWeather/currentWeather";
import Search from "../components/search/search";

const Weather = () => {

    const handleOnSearchChange = (searchData: any) => {
        console.log(searchData);
    }

    return (
        <div>
            <Search onSearchChange={handleOnSearchChange} />
            <CurrentWeather />
        </div>
    );
}

export default Weather;