import { useState } from "react";
import CurrentWeather from "../components/currentWeather/currentWeather";
import Forecast from "../components/forecast/forecast";
import Search from "../components/search/search";
import { WEATHER_API_KEY, WEATHER_API_URL } from "../components/shared/api";
import { CitySearchResult } from "../components/shared/sharedTypes";

const Weather = () => {
    const [currentWeather, setCurrentWeather] = useState(null);
    const [forecast, setForecast] = useState(null);

    const handleOnSearchChange = (searchData: CitySearchResult) => {
        console.log(searchData);
        const [latitude, longitude] = searchData.value.split(' ');

        const currentWeatherFetch = fetch(`${WEATHER_API_URL}/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${WEATHER_API_KEY}`);
        const forecastFetch = fetch(`${WEATHER_API_URL}/forecast?lat=${latitude}&lon=${longitude}&units=metric&appid=${WEATHER_API_KEY}`);

        Promise.all([currentWeatherFetch, forecastFetch])
            .then(async response => {
                const weatherResponse = await response[0].json();
                const forecastResponse = await response[1].json();

                setCurrentWeather({ city: searchData.label, ...weatherResponse });
                setForecast({ city: searchData.label, ...forecastResponse });
            })
            .catch(err => console.log(err));
    }

    return (
        <div>
            <Search onSearchChange={handleOnSearchChange} />
            {currentWeather && <CurrentWeather data={currentWeather} />}
            {forecast && <Forecast data={forecast} />}
        </div>
    );
}

export default Weather;