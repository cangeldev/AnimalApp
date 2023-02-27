import { View, Text, Image, StatusBar } from 'react-native'
import React from 'react'
import style from './style'
import { CustomButton, CustomTxtInput, Divider } from '../../../components'
import { AnotherLoginCard } from '../../../components/cards/anotherLoginCard'
import { AnotherLoginList } from '../../../utils/helper'
import { BackgroundPaw } from '../../../assets'
import IconA from 'react-native-vector-icons/AntDesign';
import colors from '../../../assets/colors/colors'
export const LoginPages = () => {
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
                <Text style={[style.title, style.titlei]}>
                    Paws
                </Text>
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
            <CustomButton
                title='Login'
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
                <Text style={style.linkRegister}>
                    Register
                </Text>
            </View>
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
        </View>
    )
}
