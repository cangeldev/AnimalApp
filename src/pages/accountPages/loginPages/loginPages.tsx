import { View, Text } from 'react-native'
import React from 'react'
import style from './style'
import { CustomButton, CustomTxtInput } from '../../../components'

export const LoginPages = () => {
    return (
        <View style={style.container}>
            <View>
                <Text>
                    Happy
                </Text>
                <Text>
                    Animals
                </Text>
                <Text
                    style={style.inputTitle}>
                    Email
                </Text>
                <CustomTxtInput
                    placeHolder='john.doe@example.com'
                />
                <Text style={style.inputTitle}>
                    Password
                </Text>
                <CustomTxtInput
                    placeHolder='******'
                />
                <CustomButton
                    title='Login'
                />
            </View>
        </View>
    )
}
