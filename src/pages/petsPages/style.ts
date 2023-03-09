import { StyleSheet } from "react-native"
import colors from "../../assets/colors/colors"

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white,
        paddingBottom: 15
    },
    addPost: {
        backgroundColor: colors.headerBackground,
        width: 60,
        height: 60,
        textAlign: "center",
        textAlignVertical: "center",
        borderRadius: 30,
        position: 'absolute',
        bottom: 14,
        right: 14
    }
})