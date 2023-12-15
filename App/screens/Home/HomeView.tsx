import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { FlatList, Image, Text, View } from 'react-native'
import { api } from '../../lib/axios';
import LinearGradient from 'react-native-linear-gradient';
import { styles } from './styles';
import Dropdown from '../../components/dropdown';
import { weatherIcons } from '../../lib/weatherIcons';

export default function HomeView({ time, city, setCity, weatherData }: { time: string, city: string, setCity: React.Dispatch<React.SetStateAction<string>>, weatherData: any }) {
    const [ iconURL, setIconURL ] = useState(require("../../assets/icons/sun.png"));

    useEffect(() => {
        if (!weatherData)
            return;

        
        
        setIconURL(weatherIcons[weatherData?.weather[0]?.icon])
    }, [weatherData])
    return (
      <View style={styles.body}>
        <LinearGradient colors={[ "#BCE8FF", "#fff" ]} locations={[ 0, 0.5 ]} style={[styles.body, { padding: 16, justifyContent: "space-between" }]}>
            <View style={{ gap: 24 }}>
                <View style={styles.header}>
                    <Text style={{ fontSize: 24, fontWeight: "bold" }}>{city}</Text>
                    <Text style={{ fontSize: 20 }}>{time}</Text>
                </View>
                <Image style={styles.weatherIcon} source={iconURL} />
                <Text style={styles.weatherTitle}>{weatherData ? weatherData.weather[0].main : "N/A"}</Text>
                <Text style={styles.temperature}>{weatherData ? Math.round(weatherData?.main?.temp - 273.15) : 0}°</Text>
            </View>
            <View>
                <Dropdown
                    setCity={setCity}
                />
            </View>
        </LinearGradient>
      </View>
    );
}
