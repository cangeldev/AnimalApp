import { View, Text, Image, StatusBar, ImageBackground, ScrollView } from 'react-native'
import React from 'react'
import style from './style'
import { BackShape, Cat } from '../../assets'
import IconE from 'react-native-vector-icons/Entypo';
import colors from '../../assets/colors/colors'
import { ProfileMyPetsCard } from '../../components/cards';
export const ProfilePages = () => {

    return (
        <View style={style.container}>
            <StatusBar
                backgroundColor={colors.headerBackground}
            />
            <ImageBackground source={Cat} style={style.imageView}
                imageStyle={{ opacity: 0.2 }}>
                <Image
                    source={Cat}
                    style={style.profileImage}
                />
                <Text style={style.name}>
                    Can Gel
                </Text>
                <View style={style.adressView}>
                    <IconE
                        name="location"
                        color={colors.black}
                        size={14}
                    />
                    <Text style={[style.adress]}>
                        Düzce
                    </Text>
                </View>
                <Image
                    source={BackShape}
                    style={style.backShape}
                />
            </ImageBackground>
            <View style={style.infoContainer}>
                <View style={style.infoView}>
                    <Text style={style.infoCount}>
                        74
                    </Text>
                    <Text style={style.infoTitle}>
                        Followers
                    </Text>
                </View>
                <Text style={style.divider}>
                    |
                </Text>
                <View style={style.infoView}>
                    <Text style={style.infoCount}>
                        74
                    </Text>
                    <Text style={style.infoTitle}>
                        Following
                    </Text>
                </View>
            </View>
            <Text style={style.title}>
                My Pets
            </Text>
            <View style={style.petsContainer}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <ProfileMyPetsCard />
                    <ProfileMyPetsCard />
                    <ProfileMyPetsCard />
                    <ProfileMyPetsCard />
                    <ProfileMyPetsCard />
                    <ProfileMyPetsCard />
                    <ProfileMyPetsCard />
                    <ProfileMyPetsCard />
                    <ProfileMyPetsCard />
                    <ProfileMyPetsCard />
                    <ProfileMyPetsCard />
                </ScrollView>
            </View>
        </View>
    )
}