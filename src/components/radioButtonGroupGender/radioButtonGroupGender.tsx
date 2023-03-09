import { View, Text } from 'react-native'
import React, { useState } from 'react'
import style from './style'
import RadioGroup from 'react-native-radio-buttons-group';
import colors from '../../assets/colors/colors';

export const RadioButtonGroupGender = () => {
    const [radioButtons, setRadioButtons] = useState([
        {
            id: '1',
            label: 'Male',
            value: 'Male',
            size: 20,
            color: "#00a8ff",
            labelStyle: {
                color: colors.black,
                marginLeft: 6,
                fontFamily: "OpenSans-Regular",
            }
        },
        {
            id: '2',
            label: 'Female',
            value: 'Female',
            size: 20,
            color: "#ff8ab7",
            labelStyle: {
                color: colors.black,
                marginLeft: 6,
                fontFamily: "OpenSans-Regular",
            }
        }
    ]);

    function onPressRadioButton(radioButtonsArray: any) {
        setRadioButtons(radioButtonsArray);
    }

    return (
        <View style={style.container}>
            <Text style={style.text}>Gender:</Text>
            <RadioGroup
                containerStyle={style.radioGroupView}
                radioButtons={radioButtons}
                onPress={onPressRadioButton}
            />
        </View>
    )
}
