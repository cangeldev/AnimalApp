import { View, Text } from 'react-native'
import React from 'react'
import style from './style'
import { CustomButton, CustomTxtInput, Divider } from '../../../components'
import { AnotherLoginCard } from '../../../components/cards/anotherLoginCard'
import { AnotherLoginList } from '../../../utils/helper'

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
            <View style={style.anotherLoginView}>
                {
                    AnotherLoginList.map((item) => <AnotherLoginCard key={item.id} list={item.value} />)
                }
            </View>
            <Text>
                Don't have an account ?
                <Text style={style.linkText}>
                    Register
                </Text>
            </Text>
        </View>
    )
}
