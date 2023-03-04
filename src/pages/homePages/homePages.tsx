import { View, StatusBar } from 'react-native'
import React from 'react'
import style from './style'
import IconF from 'react-native-vector-icons/FontAwesome';
import colors from '../../assets/colors/colors';
import { PostCard } from '../../components/cards';

export const HomePages = () => {
    return (
        <View style={style.container}>
            <StatusBar backgroundColor={colors.headerBackground} />
            <IconF
                name="plus"
                color={colors.white}
                size={20}
                style={style.addPost}
                onPress={() => null}
            />
            <PostCard />
        </View>
    )
}