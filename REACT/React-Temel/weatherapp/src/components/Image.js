import {useContext,useEffect} from 'react'
import WeatherContext from '../context/WeatherContext';


function Image() {

    const {weather,setWeather}=useContext(WeatherContext);

    useEffect(() => {
         if(weather.description==="Güneşli"){
            setWeather({...weather,icon:"https://images.clipartlogo.com/files/images/39/397765/symbols-weather-clear-sunny_f.jpg"})
        }
        else if(weather.description==="Yağmurlu"){
            setWeather({...weather,icon:"https://w7.pngwing.com/pngs/225/472/png-transparent-rain-weather-forecasting-computer-icons-meteorology-rain-blue-text-cloud.png"})
        }
        
    }, [])
    return (
        <div>
            {weather ?
            <img src={ weather.data.weather[0].icon}></img>
             : "Loading"}
            
        </div>
    )
}

export default Image
