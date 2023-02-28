import { StyleSheet } from "react-native"
import colors from "../../../assets/colors/colors"

export default StyleSheet.create({
    title: {
        fontFamily: "HoboStd",
        color: colors.pinkOne,
        fontSize: 65,
        marginTop: -10,
        marginLeft: 45,
    },
    titlei: {
        marginTop: -20,
        marginLeft: 180,
        color: "#f99935",
    },
    linkView: {
        flexDirection: "row",
        alignSelf: "center",
        position: 'absolute',
        bottom: 15,
    },
})