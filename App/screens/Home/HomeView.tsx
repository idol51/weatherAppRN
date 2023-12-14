import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { FlatList, Image, Text, View } from 'react-native'
import { api } from '../../lib/axios';
import LinearGradient from 'react-native-linear-gradient';
import { styles } from './styles';
import Search from '../../components/search';
import RNPickerSelect from "react-native-picker-select"

export default function HomeView({  }) {
    
  
    return (
      <View style={styles.body}>
        <LinearGradient colors={[ "#BCE8FF", "#fff" ]} locations={[ 0, 0.5 ]} style={[styles.body, { padding: 16, gap: 20 }]}>
            <View style={styles.header}>
                <Text style={{ fontSize: 24, fontWeight: "bold" }}>Delhi</Text>
                <Text style={{ fontSize: 20 }}>11:00</Text>
            </View>
            <Image style={styles.weatherIcon} source={require(`../../assets/images/haze.png`)} />
            <Text style={styles.weatherTitle}>Haze</Text>
            <Text style={styles.temperature}>24°</Text>
            <View>
                <RNPickerSelect
                    onValueChange={(value) => console.log(value)}
                    items={[
                        { label: 'Football', value: 'football' },
                        { label: 'Baseball', value: 'baseball' },
                        { label: 'Hockey', value: 'hockey' },
                    ]}
                />
                <FlatList 
                    renderItem={({item}) => (<Text>{item}</Text>)} 
                    data={["werty"]} 
                />
            </View>
        </LinearGradient>
      </View>
    );
}
