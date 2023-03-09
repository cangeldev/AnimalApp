import { View, Text } from 'react-native'
import React, { useState } from 'react'
import style from './style'
import RadioGroup from 'react-native-radio-buttons-group';
import colors from '../../assets/colors/colors';

export const RadioButtonGroupWeight = () => {
    const [radioButtonsWeight, setRadioButtonsWeight] = useState([
        {
            id: '1',
            label: 'Light',
            value: 'Light',
            size: 20,
            color: colors.black,
            labelStyle: {
                color: colors.black,
                marginLeft: 6,
                fontFamily: "OpenSans-Regular",
            }
        },
        {
            id: '2',
            label: 'Medium',
            value: 'Medium',
            size: 20,
            color: colors.black,
            labelStyle: {
                color: colors.black,
                marginLeft: 6,
                fontFamily: "OpenSans-Regular",
            }
        },
        {
            id: '3',
            label: 'Fat',
            value: 'Fat',
            size: 20,
            color: colors.black,
            labelStyle: {
                color: colors.black,
                marginLeft: 6,
                fontFamily: "OpenSans-Regular",
            }
        }
    ]);

    function onPressRadioButtonWeight(radioButtonsArray: any) {
        setRadioButtonsWeight(radioButtonsArray);
    }

    return (
        <View style={style.container}>
            <Text style={style.text}>Weight: </Text>
            <RadioGroup
                containerStyle={style.radioGroupView}
                radioButtons={radioButtonsWeight}
                onPress={onPressRadioButtonWeight}
            />
        </View>

    )
}
