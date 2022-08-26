import './currentWeather.css'

const CurrentWeather = ({ data }: any) => {
    const weather = data.weather[0];
    const mainData = data.main;

    return (
        <div className='weather'>
            <div className='top'>
                <div>
                    <p className='city'>{data.city}</p>
                    <p className='weather-description'>{weather.description}</p>
                </div>
                <img alt='weather' className='weather-icon' src={`./icons/${weather.icon}.png`} />
            </div>
            <div className='bottom'>
                <p className='temperature'>{Math.round(mainData.temp)}°C</p>
                <div className='details'>
                    <div className='parameter-row'>
                        <span className='parameter-label'>Details</span>
                    </div>
                    <div className='parameter-row'>
                        <span className='parameter-label'>Feels like</span>
                        <span className='parameter-value'>{Math.round(mainData.feels_like)}°C</span>
                    </div>
                    <div className='parameter-row'>
                        <span className='parameter-label'>Wind</span>
                        <span className='parameter-value'>{data.wind.speed} m/s</span>
                    </div>
                    <div className='parameter-row'>
                        <span className='parameter-label'>Humidity</span>
                        <span className='parameter-value'>{mainData.humidity}%</span>
                    </div>
                    <div className='parameter-row'>
                        <span className='parameter-label'>Pressure</span>
                        <span className='parameter-value'>{mainData.pressure} hPa</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CurrentWeather;