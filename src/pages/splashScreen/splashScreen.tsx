import { View, Text, StatusBar } from 'react-native'
import React from 'react'
import style from './style'
import { CustomButton } from '../../components'
import Lottie from 'lottie-react-native';
import { PawsLottie, PetsLottie } from '../../assets';
import { useNavigation } from '@react-navigation/native';
import { LoginPages, SigninPages, } from '../../pages'

export const SplashScreen = () => {
    const navigation = useNavigation<any>();
    const Pets = PetsLottie
    const Paws = PawsLottie
    return (
        <View style={style.container}>

            <Lottie style={style.petsLottie} source={Pets} autoPlay loop={false} />
            <StatusBar
                backgroundColor={"transparent"}
                barStyle={"dark-content"}
                translucent
            />
            <View style={style.titleView}>
                <Text style={style.title}>
                    Happy
                </Text>
                <View>
                    <Lottie
                        style={style.pawsLottie}
                        source={Paws}
                        autoPlay
                        loop={false}
                    />
                    <Text style={[style.title, style.titlei]}>
                        Paws
                    </Text>
                </View>
            </View>
            <Text style={style.infoText}>
                Evcil hayvanlarımızın fotoğraflarını diğer evcil hayvan sahipleri ile paylaşıp etkikeşime geçebilirsiniz.
                Üyelik sistemi ile çalışan uygulamamızı kullanabilmek için evcil hayvan sahibi olmanıza  gerek yok.
            </Text>
            <View style={style.buttonView}>
                <CustomButton
                    title='Login'
                    onClick={() => navigation.navigate(LoginPages)}
                />
                <CustomButton
                    title='Register Now'
                    theme='firstStyle'
                    onClick={() => navigation.navigate(SigninPages)}
                />
            </View>
        </View>
    )
}
