import { View, Image } from 'react-native'
import React, { FC } from 'react'
import Modal from "react-native-modal";
import { Cat } from '../../../assets';
import colors from '../../../assets/colors/colors';
import style from './style';
import IconA from 'react-native-vector-icons/AntDesign';
import { CustomInputView, RadioButtonGroup, DatePickers, CustomButton } from '../../../components';

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
                <IconA
                    name="close"
                    color={colors.black}
                    size={22}
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
                <CustomInputView title='Age Status:' />
                <DatePickers />
                <RadioButtonGroup />
                <View style={style.butonView}>
                    <CustomButton title='Add' />
                </View>
            </View>
        </Modal>
    )
}
