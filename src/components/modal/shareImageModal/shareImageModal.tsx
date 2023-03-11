import { View, Text, Image } from 'react-native'
import React, { FC } from 'react'
import IconI from 'react-native-vector-icons/Ionicons';
import Modal from "react-native-modal";
import { Camera, ImageGallery } from '../../../assets';
import colors from '../../../assets/colors/colors';
import style from './style';
import { CustomImageButton } from '../../customImageButton';
import { launchImageLibrary } from 'react-native-image-picker';
interface IModal {
    visible: boolean
    onClick?: () => void;
}

export const ShareImageModal: FC<IModal> = ({ visible, onClick }) => {
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
            style={style.container}
            isVisible={visible}
            onBackdropPress={onClick}>
            <View>
                <IconI
                    name="close-sharp"
                    color={colors.black}
                    size={24}
                    style={style.closeIcon}
                    onPress={onClick}
                />
                <Text style={style.text}>
                    Paylaşmak istediğiniz resmi seçiniz:
                </Text>
                <View style={style.selectImageView}>
                    <CustomImageButton
                        title='Galery'
                        backImage={ImageGallery}
                        onClick={openGalery}
                    />
                    <CustomImageButton
                        title='Camera'
                        backImage={Camera}
                        onClick={openGalery}
                    />
                </View>
                <View style={style.imageView}>
                    {response?.assets &&
                        response?.assets.map(({ uri }: any) => (
                            <View key={uri}>
                                <Image
                                    style={style.image}
                                    source={{ uri: uri }}
                                />
                            </View>
                        ))}
                </View>
                <Text style={style.button}>
                    Share
                </Text>
            </View>
        </Modal>
    )
}
