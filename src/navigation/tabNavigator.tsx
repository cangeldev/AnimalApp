import React from 'react'
import { Image } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomePages, ProfilePages } from '../pages';
import { Hut, HutSelected, Profile, ProfileSelected } from '../assets';
import colors from '../assets/colors/colors';

export const TabNavigator = () => {
    const Tab = createBottomTabNavigator();

    return (
        <Tab.Navigator
            initialRouteName='ProfilePages'
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
                  
                    headerShown: true,
                    headerTitleAlign: "center",
                    headerTitle: "Profile",
                    headerTintColor: colors.white,
                    headerTitleStyle: {
                        fontFamily: "OpenSans-Bold"
                    },
                    headerStyle: {
                        backgroundColor: colors.headerBackground
                    },
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
