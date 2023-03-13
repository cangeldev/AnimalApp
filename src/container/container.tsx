import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { StackNavigator } from '../navigation'

export const Container = () => {

    return (
        <NavigationContainer>
            <StackNavigator />
        </NavigationContainer>
    )
}
