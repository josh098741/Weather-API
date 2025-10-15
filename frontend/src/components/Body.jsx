import React,{useState} from 'react'
import { Search } from 'lucide-react'

function Body(){

    const [city, setCity] = useState(null)
    const [weather, setWeather] = useState([])
    const [error, setError] = useState(false)

    const API_KEY = '525ed507c42449105511024dc4380e35'

    return(
        <div className="w-full h-[700px]">
            <div className="border h-[600px] m-5 rounded">
                <div>
                    <h1 className="text-center text-xl">Enter The City</h1>
                    <form className="border m-5 h-10 rounded flex items-center justify-between p-5">
                        <div>
                            <Search />
                        </div>
                        <input type="text" className="border text-xl outline-none h-10 w-[550px]" />
                        <button type="submit" className="w-60 p-2 bg-blue-400 ml-4">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Body