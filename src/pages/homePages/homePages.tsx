import { View, StatusBar, ScrollView } from 'react-native'
import React, { useState } from 'react'
import style from './style'
import IconF from 'react-native-vector-icons/FontAwesome';
import colors from '../../assets/colors/colors';
import { PostCard } from '../../components/cards';
import { ShareImageModal } from '../../components/modal';

export const HomePages = () => {
    const [ModalVisible, setModalVisible] = useState(false)
    const toggleModal = () => {
        setModalVisible(!ModalVisible);
    };
    function handleInputToggle() {
        setModalVisible(!ModalVisible)
    }

    return (
        <View style={style.container}>
            <StatusBar backgroundColor={colors.headerBackground} />
            <ScrollView>
                <PostCard />
                <PostCard />
                <PostCard />
                <PostCard />
                <PostCard />
                <PostCard />
                <PostCard />
            </ScrollView>
            <ShareImageModal
                visible={ModalVisible}
                onClick={handleInputToggle}
            />
            <IconF
                name="plus"
                color={colors.white}
                size={20}
                style={style.addPost}
                onPress={toggleModal}
            />
        </View>
    )
}