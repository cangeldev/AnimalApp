import { View, Image, Text, TextInput } from 'react-native'
import React, { FC } from 'react'
import IconI from 'react-native-vector-icons/Ionicons';
import Modal from "react-native-modal";
import { Cat } from '../../../assets';
import colors from '../../../assets/colors/colors';
import style from './style';
import IconA from 'react-native-vector-icons/AntDesign';
import { CustomInputView } from '../../customInputView';
import { DatePickers } from '../../datePicker';
import { RadioButtonGroup } from '../../radioButtonGroup';


interface IModal {
    visible: boolean
    onClick?: () => void;
}
export const MemberAddModal: FC<IModal> = ({ visible, onClick }) => {

    return (
        <Modal
            style={style.modal}
            isVisible={visible}
            onBackdropPress={onClick}>
            <View style={style.container}>
                <IconI
                    name="close-sharp"
                    color={colors.black}
                    size={24}
                    style={style.closeIcon}
                    onPress={onClick}
                />
                <View style={style.imageView}>
                    <Image
                        source={Cat}
                        style={style.image}
                    />
                    <IconA
                        name="camera"
                        style={style.icon}
                    />
                </View>
                <CustomInputView title='Name:' />
                <CustomInputView title='Genus:' />
                <DatePickers />
                <RadioButtonGroup />

            </View>
        </Modal>
    )
}
