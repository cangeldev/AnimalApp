import { StyleSheet } from "react-native"
import colors from "../../assets/colors/colors"

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white
    },
    profileImage: {
        width: 120,
        height: 80,
        borderRadius: 40,
        marginTop: 20
    },
    imageView: {
        height: 250,
        alignItems: "center"
    },
    name: {
        marginTop: 10,
        fontSize: 28,
        color: colors.headerBackground,
        fontFamily: "HoboStd"
    },
    adress: {
        color: colors.black,
        fontFamily: "OpenSans-Medium",
        fontSize: 16,
        marginLeft: 5
    },
    backShape: {
        width: "100%",
        resizeMode: "stretch",
        flex: 1,
        marginTop: 30
    },
    infoContainer: {
        width: "100%",
        marginTop: -15,
        flexDirection: "row",
        justifyContent: "space-around",
    },
    infoView: {
        alignItems: "center",
        width: 100
    },
    infoCount: {
        fontSize: 20,
        color: colors.black,
        fontFamily: "OpenSans-Bold"
    },
    infoTitle: {
        fontSize: 16,
        color: colors.black,
        fontFamily: "OpenSans-Light"
    },
    adressView: {
        flexDirection: "row",
        alignItems: "center"
    },
    petsContainer: {
        alignSelf: "center",
        width: "86%",
        height: 300,
        borderWidth: 1,
        borderColor: colors.txtInputBackGround,
        borderRadius: 15,
    },
    title: {
        marginLeft: 30,
        marginTop: 20,
        marginBottom: 10,
        fontSize: 25,
        fontFamily: "HoboStd",
        color: colors.pinkOne
    },
    divider: {
        fontSize: 30,
        color: colors.txtInputBackGround
    }
})