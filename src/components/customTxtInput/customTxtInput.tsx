import { TextInput } from 'react-native'
import React, { FC } from 'react'
import style from './style'
interface ICustomInput {
    placeHolder: string
    secureText?: boolean;
}
export const CustomTxtInput: FC<ICustomInput> = ({ placeHolder, secureText }) => {
    return (
        <TextInput
            secureTextEntry={secureText}
            autoCapitalize='none'
            placeholder={placeHolder}
            style={style.container}
            onChangeText={(text) => { console.log(text) }}
        />
    )
}