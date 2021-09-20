import axios from "axios";


const API_URL="https://api.openweathermap.org/data/2.5/weather?q=Kocaeli,tr&units=metric&lang=tr&appid=6f5ea70edffbb68ff961c32f1d46440d"

const changeApi=(cityName)=>{
    return "https://api.openweathermap.org/data/2.5/weather?q="+cityName+",tr&units=metric&lang=tr&appid=6f5ea70edffbb68ff961c32f1d46440d"
}

const getPublicContent=async()=>{

    const result=await axios.get(changeApi("İstanbul"));

    return result;


};
const wepAPI={getPublicContent};
export default wepAPI