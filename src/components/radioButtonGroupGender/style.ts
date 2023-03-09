import { StyleSheet } from "react-native"
import colors from "../../assets/colors/colors"

export default StyleSheet.create({
    container: {
        marginHorizontal: 25,
        marginTop: 10,
        flexDirection: "row",
        alignItems: "center"
    },
    text: {
        fontSize: 16,
        fontFamily: "OpenSans-Medium",
        color: colors.black,
        marginRight: 5
    },
    radioGroupView: {
        flexDirection: "row",
    }
})