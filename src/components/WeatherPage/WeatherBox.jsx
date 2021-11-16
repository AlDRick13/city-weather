import React, {useContext} from 'react';
import { useLocation, Link} from 'react-router-dom';

//bootstrap
import {  Button } from 'react-bootstrap';
//context
import CityContext from '../../context/CityContext'


const WeatherBox = () => {
    const {city, weatherData} = useContext(CityContext);
    const {pathname} = useLocation()
    const showButtonOrInfo = () => {
        if (pathname === "/"+city){
            return <Link to={`/${city}/details`}><Button variant="outline-info">Show more!</Button></Link>
        } if (pathname ===  "/"+city+"/details") {
            return<>
            <h5>{weatherData.current.condition.text}</h5>            
           <h5>Feels like: {weatherData.current.feelslike_c}°C </h5>
           <h5>Humidity: {weatherData.current.humidity} </h5>
           <h5>Wind Speed: {weatherData.current.wind_kph}kph</h5>
           </>
    }}
    return (
        <>
            
            {weatherData.current &&(
            
                <div className="Weather-box">
                    <h1>{weatherData.location.name} </h1>
                <h2>{weatherData.location.region} </h2>
                <h3>{weatherData.location.country}</h3>
                <hr/>
                <img src={weatherData.current.condition.icon} alt="weather" width={120} height={120} />
        
                <h3>{weatherData.current.temp_c}°C</h3>
                <hr/>
                {showButtonOrInfo()}                
                </div>
                
            
            )}
            
      </>
    );
};

export default WeatherBox;