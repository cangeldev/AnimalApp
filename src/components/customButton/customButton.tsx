import { Text, TouchableOpacity } from 'react-native'
import React, { FC } from 'react'
import style from './style'

interface ICustomButton {
    title: string
    theme?: string
}

export const CustomButton: FC<ICustomButton> = ({ title, theme }) => {
    return (
        <TouchableOpacity
            activeOpacity={0.6}
            onPress={() => { console.log("db") }}>
            <Text
                style={[style.text, style[`${theme}`]]}>
                {title}
            </Text>
        </TouchableOpacity>
    )
}
