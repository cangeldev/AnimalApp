import { TextInput } from 'react-native'
import React, { FC, useState } from 'react'
import style from './style'
interface ICustomInput {
    placeHolder: string
    secureText?: boolean;
    changeText: (text: string) => void;
    
}
export const CustomTxtInput: FC<ICustomInput> = ({ placeHolder, secureText, changeText }) => {
    const [text, setText] = useState<string>("");
    const handleTextChange = (inputText: string) => {
        setText(inputText);
        changeText(inputText);
        console.log(inputText)
    };
    return (
        <TextInput
            secureTextEntry={secureText}
            autoCapitalize='none'
            placeholder={placeHolder}
            style={style.container}
            onChangeText={handleTextChange}
            value={text}
        />
    )
}