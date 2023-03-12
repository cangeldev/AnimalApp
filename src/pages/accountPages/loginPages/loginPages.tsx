import { View, Text, Image, StatusBar, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import style from './style'
import { useNavigation } from '@react-navigation/native';
import Lottie from 'lottie-react-native';
import { CustomButton, CustomTxtInput, Divider } from '../../../components'
import { AnotherLoginCard } from '../../../components/cards/anotherLoginCard'
import { AnotherLoginList } from '../../../utils/helper'
import { BackgroundPaw, PawsLottie } from '../../../assets'
import IconA from 'react-native-vector-icons/AntDesign';
import colors from '../../../assets/colors/colors'
import { TabNavigator } from '../../../navigation';

export const LoginPages = () => {
    const Paws = PawsLottie
    const navigation = useNavigation<any>();
    const [mail, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const handleEmailChange = (inputText: string) => {
        setEmail(inputText);

    };
    const handlePasswordChange = (inputText: string) => {
        setPassword(inputText);
    };
    return (
        <View style={style.container}>
            <StatusBar
                translucent
                backgroundColor={"transparent"}
                barStyle={"dark-content"}
            />
            <Image
                source={BackgroundPaw}
                style={style.pawShape}
            />
            <View>
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
            <Text
                style={style.inputTitle}>
                Email:
            </Text>
            <CustomTxtInput
                placeHolder='john.doe@example.com'
                changeText={handleEmailChange}
            />
            <Text style={style.inputTitle}>
                Password:
            </Text>
            <CustomTxtInput
                secureText={true}
                placeHolder='******'
                changeText={handlePasswordChange}
            />
            <CustomButton
                title='Login'
                onClick={() => navigation.navigate(TabNavigator)}
            />
            <Text style={style.forgotPassword}>
                Forgot Password ?
            </Text>
            <Divider />
            <View style={style.anotherLoginView}>
                {
                    AnotherLoginList.map((item) => <AnotherLoginCard key={item.id} list={item.value} />)
                }
            </View>
            <View style={style.linkView}>
                <Text style={style.linkText}>
                    Don't have an account ?
                </Text>
                <Text style={style.linkRegister}
                    onPress={() => navigation.navigate("SigninPages")}>
                    Register
                </Text>
            </View>
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
        </View>
    )
}
