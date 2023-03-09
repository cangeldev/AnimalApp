import { StyleSheet } from "react-native"
import colors from "../../assets/colors/colors"

export default StyleSheet.create({
    container: {

        marginHorizontal: 20,
        marginTop: 10
    },
    text: {
        fontSize: 16,
        fontFamily: "OpenSans-Medium",
        color: colors.black
    },
    txtInput: {
        paddingHorizontal: 10,
        backgroundColor: colors.txtInputBackGround,
        marginTop: 3,
        borderRadius: 10,
        
        color: colors.black

    },


})