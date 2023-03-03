import { StyleSheet } from "react-native"
import colors from "../../../assets/colors/colors"

export default StyleSheet.create({
    container: {
        marginHorizontal: 20,
        marginRight: 25,
        justifyContent: "center",
        marginTop: 25
    },
    txtInput: {
        paddingBottom: 7,
        borderColor: colors.pinkOne,
        paddingHorizontal: 20,
        fontSize: 17,
        fontFamily: "OpenSans-Regular",
        borderBottomWidth: 1,
        borderLeftWidth: 1,
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10,
        borderTopWidth: 1
    },
    title: {
        paddingLeft: 5,
        left: 6,
        top: -10,
        position: "absolute",
        backgroundColor: colors.white,
        fontFamily: "OpenSans-SemiBold",
        color: colors.black,
        width: "100%"
    },
    icon: {
        position: "absolute",
        right: 6,
        alignItems: "center"
    }
})