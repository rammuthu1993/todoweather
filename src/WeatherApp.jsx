import { useState } from 'react'
import './WeatherApp.css'
import drizzleicon from './assets/drizzleicon.png'
import rain from './assets/rain.jpeg'
import snow from './assets/snow.jpeg'

function WeatherApp(){
    const [temp,setTemp] = useState(0)
    const [city,setCity] = useState("Erode")
    const [humidity,setHumidity] = useState("")
    const [country,setCountry] = useState("")
    const [place,setPlace] = useState("")
    const [lat,setLat] = useState("")
    const [long,setLong] = useState("")
    const [img,setImg] = useState("")
    const [fall,setFall] = useState(false)
    const [loading,setLoading] = useState(false)
    const [citynotfound,setCityNotFound] = useState(false)

    const weatherIconMap = {
            "01d":drizzleicon,
            "01n":drizzleicon,
            "02d":snow,
            "02n":snow,
            "03d":rain,
            "03n":rain,
            "04d":rain,
            "04n":drizzleicon,
            "05d":drizzleicon,
            "05n":drizzleicon,
    }
    const handlePress=(e)=>{
        if(e.key==='Enter'){
            Weather()
        }
   }


    
    async function Weather(){
        setLoading(true)
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=7c5f832ef2ae5a806198a4581e5ecf42&units=Metrics`

        
        let result = await fetch(url)
        let data = await result.json()
        console.log(data); 
try{  
    if(data.cod === 404){
        setCityNotFound(true)
        setFall(true) 
        
    }        
setTemp(Math.floor((data.main.temp-32)* (5/9)))
setHumidity(data.main.humidity)
setCountry(data.sys.country)
setPlace(data.name)
setLat(data.coord.lat)
setLong(data.coord.lon)
const weatherIconCode= data.weather[0].icon
setImg( weatherIconMap[weatherIconCode] || rain)
setCityNotFound(false)
}
catch(err){
    setFall(true) 
    setCityNotFound(true)
    
     console.log(err.message);
}
finally{
    setFall(false)
    setLoading(false)
     
}
    }
    
return(    
<>
<div className='main'>
{loading && <p>Loading...</p>}    
<div className='header'>
<span> 
<input type="text" onChange={(e)=>setCity(e.target.value)} placeholder='Erode' onKeyDown={handlePress}/> </span>   
<span className='click' onClick={Weather}><i class="fa-solid fa-magnifying-glass"></i></span>
</div>
{fall && <p>Can't fetching weather data</p>}
 {citynotfound && <p>city not found</p>}
{!citynotfound &&<div>
<p>City:{place}</p>
<p>Country:{country}</p>
<p><img src={img} alt="" /></p>
<p>Temperature:{temp}&deg;</p>
<p>Humidity:{humidity}</p>
<p>Latitude:{lat}&nbsp;Longitude:{long}</p></div>}

</div>



</>    

)
}
export default WeatherApp