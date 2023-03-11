import { StyleSheet } from "react-native"
import colors from "../../../assets/colors/colors"

export default StyleSheet.create({
    container: {
        backgroundColor: "white",
        margin: 0,
        marginTop: 650,
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25
    },
    text: {
        marginLeft: 20,
        fontFamily: "OpenSans-Bold",
        color: colors.black
    },
    selectImageView: {
        flexDirection: "row"
    },
    imageView: {
        top: 25,
        position: "absolute",
        right: 135,
        width: 70,
        height: 70,
        borderRadius: 50,
    },
    image: {
        width: 70,
        height: 70,
        borderRadius: 50,
        borderWidth: 4,
        borderColor: colors.txtInputBackGround,
        resizeMode: "center"
    },
    closeIcon: {
        position: "absolute",
        right: 15
    },
    button: {
        backgroundColor: colors.orange,
        fontFamily: "OpenSans-Bold",
        position: "absolute",
        right: 20,
        bottom: 20,
        padding: 17,
        borderRadius: 10,
        color: colors.white
    }
})