import { View, Image, Text } from 'react-native'
import React from 'react'
import style from './style'
import IconA from 'react-native-vector-icons/Entypo';
import { Cat } from '../../assets';
import { ProfileSettingsPageCard } from '../../components/cards';
import { DatePickers, RadioButtonGroupGender } from '../../components';

export const ProfileSettingsPages = () => {
    return (
        <View style={style.container}>
            <View style={style.innerContainer}>

                <View style={style.imageView}>
                    <Image
                        source={Cat}
                        style={style.profileImage}
                    />
                    <IconA
                        name="camera"
                        style={style.ImageChangeIcon}
                        onPress={() => console.log("first")}
                    />
                </View>
                <View style={style.petsView}>
                    <Text style={style.petsViewTitle}>
                        My Pets
                    </Text>
                    <View style={style.petsListView}>
                        <Image source={Cat} style={style.petsImage} />
                        <Image source={Cat} style={style.petsImage} />
                        <Image source={Cat} style={style.petsImage} />
                    </View>
                </View>
            </View>
            <ProfileSettingsPageCard
                title='Name:'
                value='Can Gel'
            />
            <ProfileSettingsPageCard
                title='Email:'
                value='example@gmail.com'
            />
            <ProfileSettingsPageCard
                title='Password:'
                placeholder='**********'
            />
            <ProfileSettingsPageCard
                title='Adress'
                value='Düzce'
            />
            <View style={style.dateView}>
                <DatePickers />
            </View>
            <RadioButtonGroupGender />
            <ProfileSettingsPageCard
                title='Telephone'
                value='+90 0500 123 23 11'
            />
        </View>
    )
}
