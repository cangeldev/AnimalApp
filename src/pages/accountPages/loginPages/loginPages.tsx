import { View, Text } from 'react-native'
import React from 'react'
import style from './style'
import { CustomButton, CustomTxtInput, Divider } from '../../../components'

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
            </View>
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
            <Text>
                Forgot Password ?
            </Text>
            <Divider />
            <Text>Don't have an account ? <Text style={style.linkText}>Register</Text></Text>
        </View>
    )
}
