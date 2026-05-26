import { useState } from "react";

export default function Weather(){
      const [city,setCity] = useState('');
      const [weatherData,setWeatherData] = useState(null);
      const [error,setError] = useState('');
      const getweather = async (e) =>{
        e.preventDefault();
        if(!city.trim()) return;
        try{
             const api = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=4dc08e3a4413173d42f1e3c595f38b64&units=metric`);

             if(!api.ok) throw new Error("city not found");
             const data = await api.json()
             setWeatherData(data);
             setError('');
           }   
            catch (err){
                 setError(err.message);
                 setWeatherData(null);

            }
      };
    return(
        <div>
        <form onSubmit={getweather}>
        <input type="text" value={city} onChange={(e) => setCity(e.target.value) }/>
        <button  type="submit">Search</button>
        </form>
        {error && <p>{error}</p>}
        {weatherData && (
            <div>
                <h1>location:{weatherData.name}</h1>
                <p> Temperatrue:{weatherData.main.temp} °C</p>
                <p> Description:{weatherData.weather[0].description}</p>
            </div>
    )}
        </div>
        

    );
}