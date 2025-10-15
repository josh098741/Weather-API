import React,{useState} from 'react'
import { Search } from 'lucide-react'
import axios from 'axios'

function Body(){

    const [city, setCity] = useState('')
    const [weather, setWeather] = useState(null)
    const [error, setError] = useState('')

    const API_KEY = '525ed507c42449105511024dc4380e35'

    const getWeather = async (event) => {
        event.preventDefault();
        try{
            const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`)
            setWeather(response.data)
            setError('')
            setCity('')
        }catch(error){
            console.log(error)
            setError('City Not Found.Try Again')
            setWeather(null)
            setCity('')
        }
    }

    return(
        <div className="w-full h-[700px]">
            <div className="border h-[600px] m-5 rounded">
                <div>
                    <h1 className="text-center text-xl">Enter The City</h1>
                    <form onSubmit={getWeather} className="border m-5 h-10 rounded flex items-center justify-between p-3">
                        <div>
                            <Search className="cursor-not-allowed"/>
                        </div>
                        <input value={city} onChange={(event) => setCity(event.target.value)} type="text" className="text-xl outline-none w-[550px]" />
                        <button type="submit" className="w-60 p-2 bg-blue-400 ml-4">Submit</button>
                    </form>
                </div>
                <div className="border m-5 h-[400px]">
                    {error && <div className="text-center p-5">{error}</div>}
                    {
                        weather && (
                            <div className="m-5 h-[350px] flex flex-col justify-between text-center">
                                <div className="border p-5 rounded-md">{weather.name}</div>
                                <div className="border p-5 rounded-md">{weather.main.temp} ℃</div>
                                <div className="border p-5 rounded-md">{weather.weather[0].description}</div>
                                <div className="border p-5 rounded-md">Humidity: {weather.main.humidity}</div>
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    );
}

export default Body