import axios from "axios";

const changeApi=(latitude,lonitude)=>{
  
    return "https://api.openweathermap.org/data/2.5/forecast?lat="+latitude+"&lon="+lonitude+"&cnt=7&units=metric&appid=6f5ea70edffbb68ff961c32f1d46440d"
}

const getPublicContent=async(lat,long)=>{
    
    const result=await axios.get(changeApi(lat,long));

    return result;
};

const wepAPI={getPublicContent};

export default wepAPI