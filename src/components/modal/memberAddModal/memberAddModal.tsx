import { View, Image, TouchableOpacity } from 'react-native'
import React, { FC } from 'react'
import Modal from "react-native-modal";
import colors from '../../../assets/colors/colors';
import style from './style';
import IconA from 'react-native-vector-icons/AntDesign';
import { CustomInputView, DatePickers, CustomButton, RadioButtonGroup } from '../../../components';
import { launchImageLibrary } from 'react-native-image-picker';
import { RadioGroupGenderList, RadioGroupWeightList } from '../../../utils/helper';

interface IModal {
    visible: boolean
    onClick?: () => void;
}

export const MemberAddModal: FC<IModal> = ({ visible, onClick }) => {

    const [response, setResponse] = React.useState<any>(null);
    const openGalery = () => {
        launchImageLibrary({
            selectionLimit: 0,
            mediaType: 'photo',
            includeBase64: false,
        }, setResponse)
    }
    return (
        <Modal
            style={style.modal}
            isVisible={visible}
            onBackdropPress={onClick}>
            <View style={style.container}>
                <IconA
                    name="close"
                    color={colors.black}
                    size={22}
                    style={style.closeIcon}
                    onPress={onClick}
                />
                <TouchableOpacity
                    style={style.imageView}
                    onPress={openGalery}
                >
                    {response?.assets &&
                        response?.assets.map(({ uri }: any) => (
                            <View key={uri}>
                                <Image
                                    style={style.image}
                                    source={{ uri: uri }}
                                />
                            </View>
                        ))}
                    <IconA
                        name="camera"
                        style={style.icon}
                    />
                </TouchableOpacity>
                <CustomInputView title='Name:' />
                <CustomInputView title='Genus:' />
                <CustomInputView title='Age Status:' />
                <DatePickers />
                <RadioButtonGroup
                    list={RadioGroupGenderList}
                    name="Gender:"
                />
                <RadioButtonGroup
                    list={RadioGroupWeightList}
                    name="Weight: "
                />
                <View style={style.butonView}>
                    <CustomButton title='Add' />
                </View>
            </View>
        </Modal>
    )
}
