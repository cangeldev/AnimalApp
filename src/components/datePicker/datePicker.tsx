import { View, Text } from 'react-native'
import React, { useState } from 'react'
import DatePicker from 'react-native-date-picker'
import IconF from 'react-native-vector-icons/Ionicons';
import colors from '../../assets/colors/colors';
import style from './style';

export const DatePickers = () => {

    const [date, setDate] = useState(new Date())
    const [open, setOpen] = useState(false)

    return (
        <View style={style.container}>
            <Text style={style.text}>
                Birthday:
            </Text>
            <DatePicker
                modal
                mode='date'
                open={open}
                date={date}
                onConfirm={(date) => {
                    setOpen(false)
                    setDate(date)
                }}
                onCancel={() => {
                    setOpen(false)
                }}
                onDateChange={(date) => {
                    setDate(date);
                }}
            />
            <Text style={style.date}>
                {date?.toLocaleDateString()}
            </Text>
            <IconF
                name="md-calendar-sharp"
                color={colors.black}
                size={24}
                onPress={() => setOpen(true)}
                style={style.icon}
            />
        </View>
    )
}