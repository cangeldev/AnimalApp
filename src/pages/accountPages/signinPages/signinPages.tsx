import { View, Text, StatusBar, Image,TouchableOpacity } from 'react-native'
import React from 'react'
import { BackgroundPaw, PawsLottie } from '../../../assets'
import IconA from 'react-native-vector-icons/AntDesign';
import colors from '../../../assets/colors/colors';
import { CustomButton, CustomTxtInput } from '../../../components';
import style from '../loginPages/style';
import styles from './style';
import Lottie from 'lottie-react-native';
import { useNavigation } from '@react-navigation/native';

export const SigninPages = () => {
    const Paws = PawsLottie
    const navigation = useNavigation<any>();
    return (
        <View style={style.container}>
            <StatusBar
                barStyle={'dark-content'}
                backgroundColor={"transparent"}
                translucent
            />
            <TouchableOpacity style={style.BackView}
                onPress={() => navigation.goBack()}>
                <IconA
                    name="left"
                    color={colors.black}
                    size={23}
                />
                <Text style={style.backText}>
                    Back
                </Text>
            </TouchableOpacity>
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
                <Text style={style.linkRegister} onPress={() => navigation.navigate("LoginPages")}>
                    Login
                </Text>
            </View>
        </View>
    )
}
