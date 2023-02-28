import { StyleSheet } from "react-native"
import colors from "../../assets/colors/colors"

export default StyleSheet.create({
    text: {
        backgroundColor: colors.orange,
        borderRadius: 5,
        marginVertical: 10,
        marginHorizontal: 20,
        paddingVertical: 12,
        color: colors.white,
        fontSize: 20,
        textAlign: "center",
        fontFamily: "OpenSans-Bold"
    },
    text2: {
        backgroundColor: colors.black,
        borderRadius: 5,
        marginVertical: 10,
        marginHorizontal: 20,
        paddingVertical: 12,
        color: colors.white,
        fontSize: 20,
        textAlign: "center",
        fontFamily: "OpenSans-Bold"
    },
    firstStyle: {
        backgroundColor: colors.white,
        color: colors.orange,
        borderWidth: 0.7,
        borderColor: colors.orange
    },
})