import { View, Text, Image } from 'react-native'
import React from 'react'
import { Cat } from '../../../assets'
import IconE from 'react-native-vector-icons/Entypo';
import style from './style';

export const ProfileMyPetsCard = () => {
    return (
        <View style={style.container}>
            <Image
                source={Cat}
                style={style.image}
            />
            <View style={{ flex: 1 }}>
                <Text style={style.name}>
                    Yumurcak
                </Text>
                <Text style={style.genus}>
                    Tekir
                </Text>
            </View>
            <View style={style.infoView}>
                <IconE
                    name="heart"
                    color={"red"}
                    size={13}
                />
                <Text style={style.infoCount}>
                    4
                </Text>
            </View>
        </View>
    )
}
