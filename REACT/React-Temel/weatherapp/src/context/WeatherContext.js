import { createContext, useState, useEffect } from "react";
const WeatherContext = createContext();

export const WeatherProvider = ({ children }) => {
    const [weather, setWeather] = useState("");
    const [lat, setLat] = useState("39.9208");
    const [long, setLong] = useState("32.8541");

    const values = {
        weather,
        setWeather,
        lat,
        setLat,
        long,
        setLong
    }


    return (<WeatherContext.Provider value={values}>{children}</WeatherContext.Provider>)
}

export default WeatherContext;
