import { TextInput } from 'react-native'
import React, { FC } from 'react'
import style from './style'
interface ICustomInput {
    placeHolder: string
}
export const CustomTxtInput: FC<ICustomInput> = ({ placeHolder }) => {
    return (
        <TextInput placeholder={placeHolder} style={style.container} onChangeText={(text) => { console.log(text) }} />
    )
}