import { StyleSheet } from "react-native"
import colors from "../../../assets/colors/colors"

export default StyleSheet.create({
    container: {
        margin: 15,
        flexDirection: "row",
        alignItems: "center",
        marginHorizontal: 20
    },
    image: {
        width: 60,
        height: 60,
        borderRadius: 30
    },
    name: {
        fontSize: 16,
        color: colors.black,
        fontFamily: "OpenSans-Medium",
        marginHorizontal: 10
    },
    genus: {
        fontSize: 13,
        color: colors.orange,
        fontFamily: "OpenSans-Light",
        marginHorizontal: 10
    },
    infoView: {
        alignItems: "center",
        flexDirection: "row"
    },
    infoCount: {
        fontSize: 16,
        marginLeft: 4
    }
})