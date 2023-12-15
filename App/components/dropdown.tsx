import React from 'react'
import { Text, View } from 'react-native'
import { AutocompleteDropdown } from 'react-native-autocomplete-dropdown'
import { citiesList } from '../lib/cities'

export default function Dropdown({ setCity }: { setCity: React.Dispatch<React.SetStateAction<string>> }) {
  return (
    <View style={{ gap: 12 }}>
      <Text style={{ fontSize: 20, fontWeight: "bold", alignSelf: "center" }}>Click below to Select City</Text>
        <AutocompleteDropdown
          clearOnFocus={false}
          closeOnBlur={true}
          closeOnSubmit={false}
          initialValue={{ id: '1' }} // or just '2'
          onSelectItem={(item) => item?.title ? setCity(item?.title) : null}
          dataSet={citiesList.map((city, i) => (
            { id: `${i}`, title: city.name }
          ))}
        />
    </View>
  )
}
