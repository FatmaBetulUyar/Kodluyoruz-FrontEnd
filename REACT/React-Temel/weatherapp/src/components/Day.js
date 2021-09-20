import {useState} from 'react'

function Day() {

    var tarih = new Date();
    const [days] = useState(["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]);

    const getDayName = () => {
        return days[tarih.getDay()];
    }
    return (
        <div>
            <div>{getDayName().slice(0,3)}</div>
        </div>
    )
}

export default Day
