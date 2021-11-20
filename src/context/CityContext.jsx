import React, {createContext, useState} from 'react';
//crear contexto
const CityContext = createContext();

const CityContextProvider = ({children}) => {
    const [city, setCity] = useState("")
    const [weatherData, setWeatherData] = useState({});
    const [loader, setLoader] = useState(false);
    const [error, setError] = useState(false);

    //funciones
    const handleSearchButton = async () => {
        try {
            setLoader(true);

            const request = await fetch(
              `https://api.weatherapi.com/v1/current.json?key=e0090a221b304252859142354211008%20&q=${city}&aqi=no`
                );
            const result = await request.json();
            if (result.error) {
                setError(result.message);
            } else {
                setWeatherData(result)
                setLoader(false);
            }
            
        } catch (error) {
            console.log(error)
            
        }


        }

        const data ={error, loader, city, setCity, weatherData, handleSearchButton}

    return (
        <CityContext.Provider value={data}>{children}</CityContext.Provider>
    );
};
export {CityContextProvider};
export default CityContext;