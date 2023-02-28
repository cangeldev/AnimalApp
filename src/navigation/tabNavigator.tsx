import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomePages, ProfilePages } from '../pages';

export const TabNavigator = () => {
    const Tab = createBottomTabNavigator();

    return (
        <Tab.Navigator
            initialRouteName='HomePages'
            screenOptions={{ headerShown: false }}>
            <Tab.Screen
                name="HomePages"
                component={HomePages}
            />
            <Tab.Screen
                name="ProfilePages"
                component={ProfilePages}
            />
        </Tab.Navigator>
    )
}
