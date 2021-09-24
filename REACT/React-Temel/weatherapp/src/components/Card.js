import { useContext, useState,useEffect } from 'react'
import WeatherContext from '../context/WeatherContext'


function Card() {

    const { weather} = useContext(WeatherContext);
    var today = new Date();
    const [days] = useState(["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]);

    const getDayName = () => {

        return days[today.getDay()]
    }



    return (
        <div>
            <div className="row">
                <div className="column ">
                    <div className="card today ">
                        <h5>
                            {getDayName()}
                        </h5>
                        <div >
                            {weather ?
                                <img src={"http://openweathermap.org/img/w/" + weather.data.list[0].weather[0].icon + ".png"} className="card-like-icon-today"></img>
                                : "Loading"}
                        </div>
                        <div className="temperature" >
                            <span >
                                {weather ? `${Math.trunc(weather.data.list[0].main.temp_max)}°C` : "loading"}
                            </span>
                            <span>
                            {weather ? `${Math.trunc(weather.data.list[0].main.temp_min)}°C` : "loading"}
                            </span>
                        </div>
                    </div>
                </div></div>
            <div className="row">
                <div className="column">
                    <div className="card" >
                        <h5>
                            {days[(today.getDay() + 1) > 6 ? (today.getDay() + 1) % 7 : (today.getDay() + 1)]}

                        </h5>
                        <div>
                        {weather ?
                                <img src={"http://openweathermap.org/img/w/" + weather.data.list[1].weather[0].icon + ".png"} className="card-like-icon"></img>
                                : "Loading"}
                        </div>
                        <div className="temperature">
                        <span >
                                {weather ? `${Math.trunc(weather.data.list[1].main.temp_max)}°C` : "loading"}
                            </span>
                            <span>
                            {weather ? `${Math.trunc(weather.data.list[1].main.temp_min)}°C` : "loading"}
                            </span>
                        </div>
                    </div></div>
                <div className="column">
                    <div className="card " >
                        <h5>
                            {days[(today.getDay() + 2) > 6 ? (today.getDay() + 2) % 7 : (today.getDay() + 2)]}
                        </h5>
                        <div>
                        {weather ?
                                <img src={"http://openweathermap.org/img/w/" + weather.data.list[2].weather[0].icon + ".png"} className="card-like-icon"></img>
                                : "Loading"}
                        </div>
                        <div className="temperature">
                        <span >
                                {weather ? `${Math.trunc(weather.data.list[2].main.temp_max)}°C` : "loading"}
                            </span>
                            <span>
                            {weather ? `${Math.trunc(weather.data.list[2].main.temp_min)}°C` : "loading"}
                            </span>
                        </div>
                    </div></div>
                <div className="column">
                    <div className="card " >
                        <h5>
                            {days[(today.getDay() + 3) > 6 ? (today.getDay() + 3) % 7 : (today.getDay() + 3)]}
                        </h5>
                        <div>
                        {weather ?
                                <img src={"http://openweathermap.org/img/w/" + weather.data.list[3].weather[0].icon + ".png"} className="card-like-icon"></img>
                                : "Loading"}
                        </div>
                        <div className="temperature">
                        <span >
                                {weather ? `${Math.trunc(weather.data.list[3].main.temp_max)}°C` : "loading"}
                            </span>
                            <span>
                            {weather ? `${Math.trunc(weather.data.list[3].main.temp_min)}°C` : "loading"}
                            </span>
                        </div>
                    </div></div>
                <div className="column">
                    <div className="card " >
                        <h5>
                            {days[(today.getDay() + 4) > 6 ? (today.getDay() + 4) % 7 : (today.getDay() + 4)]}
                        </h5>
                        <div>
                        {weather ?
                                <img src={"http://openweathermap.org/img/w/" + weather.data.list[4].weather[0].icon + ".png"} className="card-like-icon"></img>
                                : "Loading"}
                        </div>
                        <div className="temperature">
                        <span >
                                {weather ? `${Math.trunc(weather.data.list[4].main.temp_max)}°C` : "loading"}
                            </span>
                            <span>
                            {weather ? `${Math.trunc(weather.data.list[4].main.temp_min)}°C` : "loading"}
                            </span>
                        </div>
                    </div></div>
                <div className="column">
                    <div className="card " >
                        <h5>
                            {days[(today.getDay() + 5) > 6 ? (today.getDay() + 5) % 7 : (today.getDay() + 5)]}
                        </h5>
                        <div>
                        {weather ?
                                <img src={"http://openweathermap.org/img/w/" + weather.data.list[5].weather[0].icon + ".png"} className="card-like-icon"></img>
                                : "Loading"}
                        </div>
                        <div className="temperature">
                        <span >
                                {weather ? `${Math.trunc(weather.data.list[5].main.temp_max)}°C` : "loading"}
                            </span>
                            <span>
                            {weather ? `${Math.trunc(weather.data.list[5].main.temp_min)}°C` : "loading"}
                            </span>
                        </div>
                    </div></div>
                <div className="column">
                    <div className="card " >
                        <h5>
                            {days[(today.getDay() + 6) > 6 ? (today.getDay() + 6) % 7 : (today.getDay() + 6)]}
                        </h5>
                        <div>
                        {weather ?
                                <img src={"http://openweathermap.org/img/w/" + weather.data.list[6].weather[0].icon + ".png"} className="card-like-icon"></img>
                                : "Loading"}
                        </div>
                        <div className="temperature">
                        <span  >
                                {weather ? `${Math.trunc(weather.data.list[6].main.temp_max)}°C` : "loading"}
                            </span>
                            <span>
                            {weather ? `${Math.trunc(weather.data.list[6].main.temp_min)}°C` : "loading"}
                            </span>
                        </div>
                    </div></div>
                
            </div>
        </div>
    )
}

export default Card
