import { View, Text } from 'react-native'
import React, { useState, FC } from 'react'
import style from './style'
import RadioGroup from 'react-native-radio-buttons-group';
interface IRadio {
    list: any,
    name: string
}
export const RadioButtonGroup: FC<IRadio> = ({ list, name }) => {
    const [radioButtons, setRadioButtons] = useState(list);

    function onPressRadioButtonWeight(radioButtonsArray: any) {
        setRadioButtons(radioButtonsArray);
    }

    return (
        <View style={style.container}>
            <Text style={style.text}>
                {name}
            </Text>
            <RadioGroup
                containerStyle={style.radioGroupView}
                radioButtons={radioButtons}
                onPress={onPressRadioButtonWeight}
            />
        </View>

    )
}
