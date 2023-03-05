import { View, Text, Image } from 'react-native'
import React, { useState, FC } from 'react'
import IconI from 'react-native-vector-icons/Ionicons';
import IconA from 'react-native-vector-icons/Entypo';
import Modal from "react-native-modal";
import { Cat, ImageGallery } from '../../../assets';
import colors from '../../../assets/colors/colors';
import style from './style';

interface IModal {
    visible: boolean
    onClick?: () => void;
}
export const ShareImageModal: FC<IModal> = ({ visible, onClick }) => {

    return (
        <Modal
            style={style.container}
            isVisible={visible}
            onBackdropPress={onClick}>
            <View>
                <IconI
                    name="close-sharp"
                    color={colors.black}
                    size={24}
                    style={style.closeIcon}
                    onPress={onClick}
                />
                <Text style={style.text}>
                    Paylaşmak istediğiniz resmi seçiniz:
                </Text>
                <View style={style.innerContainer}>
                    <View style={style.galleryImageView}>
                        <Image
                            source={ImageGallery}
                            style={style.galleryImage}
                        />
                    </View>
                    <Text style={{ color: colors.black }}>
                        Gallery
                    </Text>
                </View>
                <View style={style.imageView}>
                    <Image
                        source={Cat}
                        style={style.image}
                    />
                    <IconA
                        name="check"
                        style={style.icon}
                    />
                </View>
                <Text style={style.button}>
                    Share
                </Text>
            </View>
        </Modal>
    )
}
