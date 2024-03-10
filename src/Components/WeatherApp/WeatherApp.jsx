import search_icon from"../Assets/search.png"
import clear_icon from"../Assets/clear.png"
import cloud_icon from"../Assets/cloud.png"
import drizzle_icon from"../Assets/drizzle.png"
import rain_icon from"../Assets/rain.png"
import snow_icon from"../Assets/snow.png"
import wind_icon from"../Assets/wind.png"
import humidity_icon from"../Assets/humidity.png"
import "./WeatherApp.css";
import { useState } from "react"
export default function WeatherApp()
{
    let keyApi="0196b102c3776ebd0c5b1e9b9b5f2f11"
    let [wicon,setWicon]=useState(cloud_icon)
    let search=async()=>{
       let element=document.getElementsByClassName("cityinput")
       let city=element[0].value
       if(city===""){
        alert("Please Enter City Name")
       }
       let url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${keyApi}`
       let response=await fetch(url)
       let data=await response.json()
       if(data.cod==="404")
       {
        alert(" Please Enter Valid City Name ")
        return 0
       }
       let temprature=document.getElementsByClassName("wearther-temp")
       let cityName=document.getElementsByClassName("weather-location")
       let humidity=document.getElementsByClassName("humidity-percent")
       let winSpeed=document.getElementsByClassName("wind-rate")
        cityName[0].innerHTML=data.name
        humidity[0].innerHTML=data.main.humidity+"%"
        winSpeed[0].innerHTML=data.wind.speed+"km/h"
        temprature[0].innerHTML=data.main.temp+"°C" 
        if(data.weather[0].icon==="01d"||data.weather[0].icon==="01n"){
        setWicon(clear_icon)
        }
        else if(data.weather[0].icon==="02d"||data.weather[0].icon==="02n"){
            setWicon(cloud_icon)
        }
        else if(data.weather[0].icon==="03d"||data.weather[0].icon==="03n"){
            setWicon(drizzle_icon)
        }
        else if(data.weather[0].icon==="04d"||data.weather[0].icon==="04n"){
            setWicon(drizzle_icon)
        }
        else if(data.weather[0].icon==="09d"||data.weather[0].icon==="09n"){
            setWicon(rain_icon)
        }
        else if(data.weather[0].icon==="10d"||data.weather[0].icon==="10n"){
            setWicon(rain_icon)
        }
        else if(data.weather[0].icon==="13d"||data.weather[0].icon==="13n"){
            setWicon(snow_icon)
        }
        else{
            setWicon(clear_icon)
        }
}
    return(
        <div className="container">
            <div className="topbar">
            <input type="text" className="cityinput" placeholder="Weather in your city" />
            <div className="search-icon" onClick={search}>
                <img src={search_icon} alt="" />
            </div>
            </div>
            <div className="weather-image">
                <img src={wicon} alt="" />
            </div>
            <div className="wearther-temp">24°c</div>
            <div className="weather-location">london</div>
            <div className="dataContainer">
                <div className="element">
                    <img src={humidity_icon} alt="" className="icon" />
                    <div className="data">
                        <div className="humidity-percent">64%</div>
                        <div className="text">Humidity</div>
                    </div>
                </div>
                <div className="element">
                    <img src={wind_icon} alt="" className="icon" />
                    <div className="data">
                        <div className="wind-rate">80 km/h</div>
                        <div className="text">windspeed</div>
                    </div>
                </div>
            </div>
        </div>
    )
}