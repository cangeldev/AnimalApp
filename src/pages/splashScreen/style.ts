import { StyleSheet } from "react-native"
import colors from "../../assets/colors/colors"

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white,
        justifyContent: "center"
    },
    titleView: {
        alignItems: "center",
        marginTop: 100
    },
    title: {
        fontFamily: "HoboStd",
        color: colors.pinkOne,
        fontSize: 65,
        marginLeft: -120
    },
    titlei:
    {
        marginTop: -20,
        marginLeft: 120,
        color: colors.pinkOne,
    },
    infoText:
    {
        fontFamily: "OpenSans-Medium",
        color: colors.black,
        marginHorizontal: 35,
        fontSize: 16,
        textAlign: "center",
        marginTop: 30
    },
    buttonView: {
        marginTop: 25,
        height: 160,
        justifyContent: "space-around"
    },
    pawsLottie: {
        marginLeft: 60,
        marginTop: -30
    },
    petsLottie: {
        width: 250,
        alignSelf: "center",
        top: 40
    }
})