import React from 'react'
import Routes from './routes'
import { AutocompleteDropdownContextProvider } from 'react-native-autocomplete-dropdown'

export default function App() {
  return (
    <AutocompleteDropdownContextProvider>
      <Routes />
    </AutocompleteDropdownContextProvider>
  )
}
