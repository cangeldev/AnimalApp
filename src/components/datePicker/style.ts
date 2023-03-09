import { StyleSheet } from "react-native"
import colors from "../../assets/colors/colors"

export default StyleSheet.create({

    container: {
        marginHorizontal: 25,
        marginTop: 20,
        flexDirection: 'row',
        alignItems: 'center',
    },
    text: {
        fontSize: 16,
        fontFamily: "OpenSans-Medium",
        color: colors.black
    },
    date: {
        marginHorizontal: 10,
        paddingTop: 2,
        fontSize: 13,
        fontFamily: "OpenSans-Regular",
    },
    icon: {
        marginLeft:10,
        color: colors.headerBackground
    }
})