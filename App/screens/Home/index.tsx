import React, { useEffect, useState } from 'react'
import HomeView from './HomeView'
import { api } from '../../lib/axios';

export default function Home() {
    const [weatherData, setWeatherData] = useState<any>(null);
    const API_KEY = '260c47cd21ed067bb4683de6e7882ef3';
    const city = '';
    const lat = 25;
    const lon = 25;
  
    useEffect(() => {
      api.get(`/weather?lat=${lat}&lon=${lon}&APPID=${API_KEY}&units=metric`
      )
        .then(response => {
            console.log(response.data);
            
          setWeatherData(response.data);
        })
        .catch(error => {
          console.error('Error fetching weather data:', error);
        });
    }, []);
  return (
    <HomeView />
  )
}
