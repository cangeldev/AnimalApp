import { View, Text, TextInput } from 'react-native'
import React, { FC } from 'react'
import IconE from 'react-native-vector-icons/Entypo';
import colors from '../../../assets/colors/colors';
import style from './style';

interface ISettingsCard {
    title: string;
    value?: string
    placeholder?: string,
}

export const ProfileSettingsPageCard: FC<ISettingsCard> = ({ title, placeholder, value }) => {
    return (
        <View style={style.container} >
            <TextInput
                value={value}
                style={style.txtInput}
                placeholder={placeholder}
            />
            <Text style={style.title}>{title}</Text>
            <IconE
                name="chevron-right"
                color={colors.headerBackground}
                size={24}
                style={style.icon}
                onPress={() => console.log("first")}
            />
        </View>
    )
}
