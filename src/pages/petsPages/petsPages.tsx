import { View, ScrollView } from 'react-native'
import React, { useState } from 'react'
import style from './style'
import { MembersCard } from '../../components/cards'
import colors from '../../assets/colors/colors'
import IconF from 'react-native-vector-icons/FontAwesome';
import { MemberAddModal } from '../../components/modal'

export const PetsPages = () => {
    const [ModalVisible, setModalVisible] = useState(false)
    const toggleModal = () => {
        setModalVisible(!ModalVisible);
    };
    function handleInputToggle() {
        setModalVisible(!ModalVisible)
    }

    return (
        <View style={style.container}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <MembersCard />
                <MembersCard />
                <MembersCard />
                <MembersCard />
            </ScrollView>
            <MemberAddModal visible={ModalVisible} onClick={handleInputToggle} />
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
