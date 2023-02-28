import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { LoginPages, SigninPages, SplashScreen } from '../pages'
import { TabNavigator } from './tabNavigator'

export const StackNavigator = () => {
    const Stack = createNativeStackNavigator()
    return (
        <Stack.Navigator initialRouteName='SplashScreen' screenOptions={{ headerShown: false }}>
            <Stack.Screen
                name='SplashScreen'
                component={SplashScreen}
            />
            <Stack.Screen
                name='LoginPages'
                component={LoginPages}
            />
            <Stack.Screen
                name='SigninPages'
                component={SigninPages}
            />
            <Stack.Screen
                name='TabNavigator'
                component={TabNavigator}
            />
        </Stack.Navigator>
    )
}
