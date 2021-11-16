import React, {createContext, useState} from 'react';
//crear contexto
const CityContext = createContext();

const CityContextProvider = ({children}) => {
    const [city, setCity] = useState("")
    const [weatherData, setWeatherData] = useState({});
    //funciones
    const handleSearchButton = async () => {
        const request = await fetch(
          `https://api.weatherapi.com/v1/current.json?key=e0090a221b304252859142354211008%20&q=${city}&aqi=no`
            );
        const result = await request.json();
    
        setWeatherData(result)
        }

        const data ={city, setCity, weatherData, handleSearchButton}

    return (
        <CityContext.Provider value={data}>{children}</CityContext.Provider>
    );
};
export {CityContextProvider};
export default CityContext;