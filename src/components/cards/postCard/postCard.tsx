import { View, Text, Image } from 'react-native'
import React from 'react'
import style from './style'
import { Cat } from '../../../assets'
import colors from '../../../assets/colors/colors'
import IconM from 'react-native-vector-icons/MaterialCommunityIcons';
import IconA from 'react-native-vector-icons/AntDesign';

export const PostCard = () => {
    return (
        <View style={style.container}>
            <View style={style.innerContainer}>
                <Image
                    source={Cat}
                    style={style.image}
                />
                <Text style={style.title}>
                    Can Gel
                </Text>
                <IconM
                    name="clock-outline"
                    color={colors.black}
                    size={14}
                    style={{}}
                    onPress={() => null}
                />
                <Text style={style.time}>
                    29 minute ago
                </Text>
            </View>
            <Image
                source={Cat}
                style={style.post}
            />
            <View style={style.heart}>
                <IconA
                    name="hearto"
                    color={colors.black}
                    size={20}
                    onPress={() => null}
                />
            </View>
        </View>
    )
}
