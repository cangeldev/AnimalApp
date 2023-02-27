import { StyleSheet } from "react-native"
import colors from "../../../assets/colors/colors"

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white
    },
    pawShape: {
        width: 240,
        height: 260,
        resizeMode: "stretch",
        alignSelf: "flex-end",
    },
    title: {
        fontFamily: "HoboStd",
        color: "#f99935",
        fontSize: 65,
        marginTop: -20,
        marginLeft: 45,
    },
    titlei: {
        marginTop: -30,
        marginLeft: 180,
        color: "#d2647d",
    },
    inputTitle: {
        color: colors.black,
        marginBottom: -6,
        marginLeft: 20,
        fontFamily: "OpenSans-SemiBold",
        fontSize: 15
    },
    forgotPassword: {
        fontSize: 12,
        marginHorizontal: 20,
        alignSelf: "flex-end",
        color: colors.black,
        marginTop: -5,
        fontFamily: "OpenSans-SemiBold",
    },
    linkView: {
        flexDirection: "row",
        justifyContent: "center",
        marginTop: 20
    },
    linkText: {
        color: colors.black,
        fontFamily: "OpenSans-Medium",
    },
    linkRegister: {
        color: colors.orange,
        marginLeft: 4,
        fontFamily: "OpenSans-SemiBold",
    },
    anotherLoginView: {
        flexDirection: "row",
        alignSelf: "center",
        width: 200,
        justifyContent: "space-around",
        marginTop: 25,
    },
    backText: {
        fontSize: 16,
        color: colors.black,
        fontFamily: "OpenSans-Medium"
    },
    BackView: {
        position: 'absolute',
        top: 45,
        left: 10,
        flexDirection: "row",       
        alignItems:"center"
    }
})