import { View, Text } from 'react-native'
import React from 'react'
import { SplashScreen } from './src/pages/splashScreen'
import { SigninPages } from './src/pages/accountPages/signinPages'
import { LoginPages } from './src/pages/accountPages/loginPages'

export default function App() {
  return (
    <View style={{ flex: 1 }}>
      {/* <SplashScreen /> */}
      {/* <SigninPages />  */}
      <LoginPages />
    </View>
  )
}