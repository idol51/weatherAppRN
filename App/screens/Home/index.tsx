import React, { useEffect, useState } from 'react'
import HomeView from './HomeView'
import { api } from '../../lib/axios';

export default function Home() {
    const [weatherData, setWeatherData] = useState<unknown>(null);
    const [ city, setCity ] = useState<string>("Delhi");
    const [ time, setTime ] = useState<string>("");

    const API_KEY = '260c47cd21ed067bb4683de6e7882ef3';
  
    useEffect(() => {      
      api.get(`/weather?q=${encodeURIComponent(city)}&appid=${API_KEY}`
      )
        .then(response => {
            console.log(response.data.weather[0]);
            
          setWeatherData(response.data);
        })
        .catch(error => {
          console.error('Error fetching weather data:', error);
        });
    }, [city]);

    useEffect(() => {
      setInterval(() => {
        setTime(new Date().toLocaleTimeString())
      }, 1000)
    }, [])
  return (
    <HomeView
      time={time}
      weatherData={weatherData}
      city={city}
      setCity={setCity}
    />
  )
}
