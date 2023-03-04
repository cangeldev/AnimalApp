import { StyleSheet } from "react-native"
import colors from "../../../assets/colors/colors"

export default StyleSheet.create({
    container: {
        marginHorizontal: 15,
        marginTop: 15,
        paddingBottom: 10,
        borderWidth: 1,
        borderRadius: 15,
        borderColor: colors.txtInputBackGround
    },
    image: {
        width: "100%",
        height: 200,
        borderTopRightRadius: 15,
        borderTopLeftRadius: 15
    },
    infoView: {
        flexDirection: "row",
        marginHorizontal: 10,
        marginVertical: 5
    },
    name: {
        color: colors.black,
        paddingHorizontal: 5,
        fontFamily: "OpenSans-ExtraBold",
        fontSize: 16
    },
    genus: {
        paddingHorizontal: 3,
        fontFamily: "OpenSans-Regular",
        fontSize: 16
    },
    heart: {
        position: "absolute",
        bottom: 45,
        right: 15,
        backgroundColor: colors.white,
        elevation: 2,
        padding: 8,
        borderRadius: 20
    },
    adress: {
        fontFamily: "OpenSans-Medium",
        fontSize: 12,
        marginLeft: 5
    },
    adressView: {
        marginLeft: 15,
        flexDirection: "row",
        alignItems: "center",
        position: "absolute",
        right: 0
    },
    petİnfoView: {
        marginHorizontal: 10,
        flexDirection: "row",
        alignItems: "center"
    },
    genderView: {
        flexDirection: "row",
        alignItems: "center"
    },
    genderText: {
        color: colors.black,
        fontSize: 15,
        fontFamily: "OpenSans-Medium",
        marginRight: 10,
        marginLeft: 2
    }
})