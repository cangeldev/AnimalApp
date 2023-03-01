import React from 'react'
import { Image } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomePages, ProfilePages } from '../pages';
import { Hut, HutSelected, Profile, ProfileSelected } from '../assets';

export const TabNavigator = () => {
    const Tab = createBottomTabNavigator();

    return (
        <Tab.Navigator
            initialRouteName='HomePages'
            screenOptions={{
                headerShown: false,
                tabBarShowLabel: false
            }}>
            <Tab.Screen
                name="HomePages"
                component={HomePages}
                options={{
                    tabBarIcon: ({ focused }) => focused ?
                        <Image
                            source={HutSelected}
                            style={{
                                width: 28,
                                height: 28,
                            }} /> :
                        <Image
                            source={Hut}
                            style={{
                                width: 28,
                                height: 28,
                            }} />,
                }}
            />
            <Tab.Screen
                name="ProfilePages"
                component={ProfilePages}
                options={{
                    tabBarIcon: ({ focused }) => focused ?
                        <Image
                            source={ProfileSelected}
                            style={{
                                width: 30,
                                height: 30,
                            }} /> :
                        <Image
                            source={Profile}
                            style={{
                                width: 30,
                                height: 30,
                            }} />,
                }}
            />
        </Tab.Navigator>
    )
}
