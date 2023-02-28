import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { HomePages, LoginPages, SigninPages, SplashScreen } from '../pages'

export const Container = () => {
    const Stack = createNativeStackNavigator()
    return (
        <NavigationContainer>
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
                    name='HomePages'
                    component={HomePages}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}
