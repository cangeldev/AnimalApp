import { View, ScrollView } from 'react-native'
import React from 'react'
import style from './style'
import { MembersCard } from '../../components/cards'

export const PetsPages = () => {
    return (
        <View style={style.container}>
            <ScrollView>
                <MembersCard />
                <MembersCard />
                <MembersCard />
                <MembersCard />
            </ScrollView>
        </View>
    )
}
