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
    innerContainer: {
        alignItems: "center",
        alignSelf: "flex-start",
        marginTop: 10,
        marginLeft: 15
    },
    imageView:
    {
        top: 25,
        position: "absolute",
        right: 170
    },
    galleryImageView: {
        width: 60,
        height: 60,
        borderRadius: 30,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: colors.headerBackground
    },
    galleryImage: {
        width: 30,
        height: 30,
        tintColor: colors.white
    },
    image: {
        width: 70,
        height: 70,
        borderRadius: 50,
        borderWidth: 4,
        borderColor: colors.txtInputBackGround
    },
    icon: {
        position: "absolute",
        right: 0,
        bottom: 0,
        color: colors.white,
        fontSize: 13,
        backgroundColor: colors.orange,
        padding: 7,
        borderRadius: 20
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