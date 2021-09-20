import { useContext } from 'react'
import Day from './Day'
import Image from './Image'
import Temperature from './Temperature'
import WeatherContext from '../context/WeatherContext'

function Card() {

    const { weather, setWeather } = useContext(WeatherContext);

    return (
        <div>
            <div className="card" style={{ width: "6rem" }}>
                <h5>
                    <Day></Day>
                </h5>
                <div>
                    <Image></Image>
                </div>
                <div className="card-body">
                    <h5 className="card-title">
                        <Temperature></Temperature>
                    </h5>
                </div>
            </div>
        </div>
    )
}

export default Card
