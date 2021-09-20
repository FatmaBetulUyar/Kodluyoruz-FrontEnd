import { createContext, useState, useEffect } from "react";
import axios from "axios";
import WeatherService from "../service/Weather.service";
const WeatherContext = createContext();

export const WeatherProvider = ({ children }) => {
    const [weather, setWeather] = useState("");

    useEffect(()=>{
        WeatherService.getPublicContent().then(
            (response)=>{
                setWeather(response);
                console.log(response)
            }
            
        )
        
    },[])

    const values = {
        weather,
        setWeather
    }

    return (<WeatherContext.Provider value={values}>{children}</WeatherContext.Provider>)
}

export default WeatherContext;
