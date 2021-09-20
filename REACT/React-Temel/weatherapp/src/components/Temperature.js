import React, { useContext, useEffect } from 'react'
import WeatherContext from '../context/WeatherContext'
import axios from 'axios';

function Temperature() {

    const { weather, setWeather } = useContext(WeatherContext);


    return (
        <div>
            <h1>
                { weather ? weather.data.name : "loading.." }
            </h1>
            <h2>
                 {weather ? weather.data.main.temp_max : "loading.."}
            </h2>
<h2>
            {weather ? weather.data.main.temp_min : "loading.."}
</h2>
        </div>
    )
}

export default Temperature
