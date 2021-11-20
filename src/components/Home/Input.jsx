import React,{useContext} from 'react';
import {Link} from 'react-router-dom';
//bootstrap
import {  Button } from 'react-bootstrap';
//contexto    
import CityContext from '../../context/CityContext'


const Input = () => {
    const {setCity, handleSearchButton, city} = useContext(CityContext);
    return (
            <div className=" form-container">          
                <input className="p-1 text-black" placeholder="City Name" onChange={e=>setCity(e.target.value)}/> 
                <Link to={`/${city}`}><Button className="p-2" onClick={()=>handleSearchButton()} variant="outline-primary">Search!</Button></Link>
            </div>
        
    );
};

export default Input;