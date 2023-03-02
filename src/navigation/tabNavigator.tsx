import React from 'react'
import { Image } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomePages, ProfilePages, ProfileSettingsPages } from '../pages';
import { Hut, HutSelected, Profile, ProfileSelected } from '../assets';
import IconE from 'react-native-vector-icons/Ionicons';
import colors from '../assets/colors/colors';
import { ProfileStackNavigator } from './stackNavigator';
import { useNavigation } from '@react-navigation/native';

export const TabNavigator = () => {
    const Tab = createBottomTabNavigator();
    const navigation = useNavigation()

    return (
        <Tab.Navigator
            initialRouteName='ProfileStackNavigator'
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
                name="ProfileStackNavigator"
                component={ProfileStackNavigator}
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
