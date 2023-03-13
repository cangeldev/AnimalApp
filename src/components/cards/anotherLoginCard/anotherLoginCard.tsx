import { View, Image } from 'react-native'
import React, { FC } from 'react'
import style from './style'

interface ILoginCard {
    list: Image
}

export const AnotherLoginCard: FC<ILoginCard> = ({ list }) => {
    return (
        <View style={style.view}>
            <Image
                source={list as any}
                style={style.image} />
        </View>
    )
}
