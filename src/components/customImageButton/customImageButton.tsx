import { View, Text, TouchableOpacity, Image } from 'react-native'
import React, { FC } from 'react'
import colors from '../../assets/colors/colors'
import style from './style'

interface ICustomImage {
    title: string,
    backImage: Image,
    onClick?: () => void;
}

export const CustomImageButton: FC<ICustomImage> = ({ title, backImage, onClick }) => {
    return (
        <TouchableOpacity
            style={style.innerContainer}
            onPress={onClick}>
            <View style={style.galleryImageView}>
                <Image
                    source={backImage as any}
                    style={style.galleryImage}
                />
            </View>
            <Text style={{ color: colors.black }}>
                {title}
            </Text>
        </TouchableOpacity>
    )
}
