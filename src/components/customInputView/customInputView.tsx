import { View, Text, TextInput } from 'react-native'
import React, { FC } from 'react'
import style from './style'

interface ICustomInputView {
    title: string
}

export const CustomInputView: FC<ICustomInputView> = ({ title }) => {
    return (
        <View style={style.container}>
            <Text style={style.text}>
                {title}
            </Text>
            <TextInput style={style.txtInput} />
        </View>
    )
}