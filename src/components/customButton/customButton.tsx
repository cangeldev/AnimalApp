import { Text, TouchableOpacity } from 'react-native'
import React, { FC } from 'react'
import style from './style'
import { useNavigation } from '@react-navigation/native';
interface ICustomButton {
    title: string
    theme?: string
    onClick?: () => void;
}

export const CustomButton: FC<ICustomButton> = ({ title, theme, onClick }) => {
    const navigation = useNavigation<any>();
    return (
        <TouchableOpacity
            activeOpacity={0.6}
            onPress={onClick}>
            <Text
                style={[style.text, style[`${theme}`]]}>
                {title}
            </Text>
        </TouchableOpacity>
    )
}
