import { View, Text } from 'react-native'
import React, { useState } from 'react'
import style from './style'
import RadioGroup from 'react-native-radio-buttons-group';
import colors from '../../assets/colors/colors';

export const RadioButtonGroup = () => {
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

    function onPressRadioButton(radioButtonsArray: any) {
        setRadioButtons(radioButtonsArray);
    }
    function onPressRadioButtonWeight(radioButtonsArray: any) {
        setRadioButtonsWeight(radioButtonsArray);
    }

    return (
        <View>
            <View style={style.container}>
                <Text style={style.text}>Gender:</Text>
                <RadioGroup
                    containerStyle={style.radioGroupView}
                    radioButtons={radioButtons}
                    onPress={onPressRadioButton}
                />
            </View>
            <View style={style.container}>
                <Text style={style.text}>Weight: </Text>
                <RadioGroup
                    containerStyle={style.radioGroupView}
                    radioButtons={radioButtonsWeight}
                    onPress={onPressRadioButtonWeight}
                />
            </View>
        </View>
    )
}
