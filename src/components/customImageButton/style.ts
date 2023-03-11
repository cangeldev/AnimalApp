import { StyleSheet } from "react-native"
import colors from "../../assets/colors/colors"

export default StyleSheet.create({
    innerContainer: {
        alignItems: "center",
        alignSelf: "flex-start",
        marginTop: 10,
        marginLeft: 15
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
})