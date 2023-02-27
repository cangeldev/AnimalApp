import { View, Text } from 'react-native'
import React from 'react'
import { SigninPages } from './src/pages/accountPages/signinPages'

export default function App() {
  return (
    <View style={{ flex: 1 }}>
      <SigninPages />
    </View>
  )
}