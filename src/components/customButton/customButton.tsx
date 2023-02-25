import { Text, TouchableOpacity } from 'react-native'
import React, { FC } from 'react'
import style from './style'

interface ICustomButton {
    title: string
}

export const CustomButton: FC<ICustomButton> = ({ title }) => {
    return (
        <TouchableOpacity onPress={() => { console.log("db") }}>
            <Text
                style={style.text}>
                {title}
            </Text>
        </TouchableOpacity>
    )
}
