import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { LoginPages, ProfilePages, ProfileSettingsPages, SigninPages, SplashScreen } from '../pages'
import { TabNavigator } from './tabNavigator'
import colors from '../assets/colors/colors'
import IconE from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native'

const Stack = createNativeStackNavigator()
export const StackNavigator = () => {
    return (
        <Stack.Navigator
            initialRouteName='TabNavigator'
            screenOptions={{ headerShown: false }}>
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

export function ProfileStackNavigator() {
    const navigation = useNavigation()
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen
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
                    headerRight: () => (
                        <IconE
                            name="md-settings-outline"
                            color={colors.white}
                            size={20}
                            style={{ marginRight: 20 }}
                            onPress={() => navigation.navigate(ProfileSettingsPages)}
                        />),
                }}
            />
            <Stack.Screen
                name="ProfileSettingsPages"
                component={ProfileSettingsPages}
            />
        </Stack.Navigator>
    )
}