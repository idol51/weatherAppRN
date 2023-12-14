import React from 'react'
import { TextInput, View } from 'react-native'
import { styles } from './styles'

export default function Search() {
  return (
    <View style={styles.searchWrapper}>
        <TextInput style={styles.searchInput} placeholder='Enter City here...' />
    </View>
  )
}
