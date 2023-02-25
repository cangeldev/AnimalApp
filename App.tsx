import { View, Text } from 'react-native'
import React from 'react'
import { LoginPages } from './src/pages/accountPages/loginPages'

export default function App() {
  return (
    <View style={{ flex: 1 }}>
      <LoginPages />
    </View>
  )
}