import { View, Text, StatusBar, Image } from 'react-native'
import React from 'react'
import { BackgroundPaw, PawsLottie } from '../../../assets'
import IconA from 'react-native-vector-icons/AntDesign';
import colors from '../../../assets/colors/colors';
import { CustomButton, CustomTxtInput } from '../../../components';
import style from '../loginPages/style';
import styles from './style';
import Lottie from 'lottie-react-native';

export const SigninPages = () => {
    const Paws = PawsLottie
    return (
        <View style={style.container}>
            <StatusBar
                barStyle={'dark-content'}
                backgroundColor={"transparent"}
                translucent
            />
            <View style={style.BackView}>
                <IconA
                    name="left"
                    color={colors.black}
                    size={23}
                />
                <Text style={style.backText}>
                    Back
                </Text>
            </View>
            <Image
                source={BackgroundPaw}
                style={style.pawShape}
            />
            <View>
                <Text style={styles.title}>
                    Happy
                </Text>
                <View>
                    <Lottie
                        style={style.pawsLottie}
                        source={Paws}
                        autoPlay
                        loop={false}
                    />
                    <Text style={[styles.title, styles.titlei]}>
                        Paws
                    </Text>
                </View>
            </View>
            <Text
                style={style.inputTitle}>
                Email:
            </Text>
            <CustomTxtInput
                placeHolder='john.doe@example.com'
            />
            <Text style={style.inputTitle}>
                Password:
            </Text>
            <CustomTxtInput
                secureText={true}
                placeHolder='******'
            />
            <Text style={style.inputTitle}>
                Confirm Password:
            </Text>
            <CustomTxtInput
                secureText={true}
                placeHolder='******'
            />
            <CustomButton
                title='Register Now'
            />
            <View style={styles.linkView}>
                <Text style={style.linkText}>
                    Already have an account ?
                </Text>
                <Text style={style.linkRegister}>
                    Login
                </Text>
            </View>
        </View>
    )
}
