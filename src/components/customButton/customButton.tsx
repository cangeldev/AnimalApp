import { Text, TouchableOpacity } from 'react-native'
import React, { FC } from 'react'
import style from './style'
import { useNavigation } from '@react-navigation/native';
interface ICustomButton {
    title: string
    theme?: string
    component?: string
}

export const CustomButton: FC<ICustomButton> = ({ title, theme, component }) => {
    const navigation = useNavigation<any>();
    return (
        <TouchableOpacity
            activeOpacity={0.6}
            onPress={() => navigation.navigate(component)}>
            <Text
                style={[style.text, style[`${theme}`]]}>
                {title}
            </Text>
        </TouchableOpacity>
    )
}
