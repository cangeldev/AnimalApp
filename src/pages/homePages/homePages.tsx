import { View, Text, Image, StatusBar } from 'react-native'
import React from 'react'
import style from './style'
import IconF from 'react-native-vector-icons/FontAwesome';
import colors from '../../assets/colors/colors';
import { PostCard } from '../../components/cards/postCard';

export const HomePages = () => {
    return (
        <View style={style.container}>
            <StatusBar backgroundColor={colors.headerBackground} />
            <IconF
                name="plus"
                color={colors.white}
                size={20}
                style={{ backgroundColor: colors.headerBackground, width: 60, height: 60, textAlign: "center", textAlignVertical: "center", borderRadius: 30, position: 'absolute', bottom: 14, right: 14 }}
                onPress={() => null}
            />
            <PostCard />

        </View>
    )
}