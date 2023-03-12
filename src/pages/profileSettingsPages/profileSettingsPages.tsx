import { View, Image, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import style from './style'
import IconA from 'react-native-vector-icons/Entypo';
import { Cat } from '../../assets';
import { ProfileSettingsPageCard } from '../../components/cards';
import { DatePickers, RadioButtonGroupGender } from '../../components';
import { launchImageLibrary } from 'react-native-image-picker';

export const ProfileSettingsPages = () => {
    const [response, setResponse] = React.useState<any>(null);
    const openGalery = () => {
        launchImageLibrary({
            selectionLimit: 0,
            mediaType: 'photo',
            includeBase64: false,
        }, setResponse)
    }

    return (
        <View style={style.container}>
            <View style={style.innerContainer}>

                <TouchableOpacity
                    style={style.imageView}
                    onPress={openGalery}
                >
                    {response?.assets &&
                        response?.assets.map(({ uri }: any) => (
                            <View key={uri}>
                                <Image
                                    style={style.profileImage}
                                    source={{ uri: uri }}
                                />
                            </View>
                        ))}
                    <IconA
                        name="camera"
                        style={style.ImageChangeIcon}
                    />
                </TouchableOpacity>
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
