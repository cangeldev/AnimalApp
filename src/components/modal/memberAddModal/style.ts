import { StyleSheet } from "react-native"
import colors from "../../../assets/colors/colors"

export default StyleSheet.create({
    modal: {
        backgroundColor: "white",
        marginTop: 155
    },
    container: {
        flex: 1,
        marginTop: 10
    },
    closeIcon: {
        position: "absolute",
        right: 10,
    },
    imageView:
    {
        marginTop: 15,
        alignSelf: "center",
        width: 100,
        height: 100,
        borderRadius: 50,
        borderWidth: 4,
        borderColor: colors.txtInputBackGround,
        alignItems: "center",
        justifyContent: "center"
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 50,
        borderWidth: 4,
        borderColor: colors.txtInputBackGround,
        resizeMode: "center"
    },
    icon: {
        position: "absolute",
        right: 0,
        bottom: 0,
        color: colors.white,
        fontSize: 16,
        backgroundColor: colors.orange,
        padding: 7,
        borderRadius: 20
    },
    butonView: {
        marginTop: 10
    }

})