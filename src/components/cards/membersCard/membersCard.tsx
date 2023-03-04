import { View, Text, Image } from 'react-native'
import React from 'react'
import { Cat } from '../../../assets'
import style from './style'
import colors from '../../../assets/colors/colors'
import IconA from 'react-native-vector-icons/AntDesign';
import IconE from 'react-native-vector-icons/Entypo';
import IconM from 'react-native-vector-icons/MaterialCommunityIcons';

export const MembersCard = () => {
    return (
        <View style={style.container}>
            <Image
                source={Cat}
                style={style.image}
            />
            <View style={style.heart}>
                <IconA
                    name="hearto"
                    color={colors.black}
                    size={20}
                    onPress={() => null}
                />
            </View>
            <View style={style.infoView}>
                <Text style={style.name}>
                    Mila
                </Text>
                <Text style={style.genus}>
                    Baby
                </Text>
                <Text style={style.name}>
                    Cat
                </Text>
            </View>
            <View style={style.petİnfoView}>
                <View style={style.genderView}>
                    <IconM
                        name="gender-female"
                        color={colors.pinkOne}
                        size={24}
                    />
                    <Text style={style.genderText}>
                        Female
                    </Text>
                </View>
                <View style={style.genderView}>
                    <IconM
                        name="weight-pound"
                        color={colors.orange}
                        size={20}
                    />
                    <Text style={style.genderText}>
                        Medium
                    </Text>
                </View>
                <View style={style.adressView}>
                    <IconE
                        name="location"
                        color={colors.headerBackground}
                        size={14}
                    />
                    <Text style={[style.adress]}>
                        Düzce
                    </Text>
                </View>
            </View>
        </View>
    )
}