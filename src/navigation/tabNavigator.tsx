import React from 'react'
import { Image } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomePages } from '../pages';
import { Hut, HutSelected, Profile, ProfileSelected } from '../assets';
import { ProfileStackNavigator } from './stackNavigator';
import colors from '../assets/colors/colors';
import IconE from 'react-native-vector-icons/Ionicons';

export const TabNavigator = () => {
    const Tab = createBottomTabNavigator();
    return (
        <Tab.Navigator
            initialRouteName='HomePages'
            screenOptions={{
                headerShown: false,
                tabBarShowLabel: false,
                headerTitle: "Home",
                headerRight: () => (
                    <IconE
                        name="notifications"
                        color={colors.white}
                        size={20}
                        style={{ marginRight: 20 }}
                        onPress={() => null}
                    />)
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
                    headerShown: true,
                    headerTitleAlign: "center",
                    headerTintColor: colors.white,
                    headerTitleStyle: {
                        fontFamily: "OpenSans-Bold"
                    },
                    headerStyle: {
                        backgroundColor: colors.headerBackground
                    },
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
