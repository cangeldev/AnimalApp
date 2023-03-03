import { StyleSheet } from "react-native"
import colors from "../../../assets/colors/colors"

export default StyleSheet.create({
    container: {
        borderBottomWidth: 1,
        paddingVertical: 15,
        borderBottomColor: colors.txtInputBackGround
    },
    innerContainer: {
        flexDirection: "row",
        alignItems: "center",
        marginHorizontal: 15
    },
    image: {
        width: 40,
        height: 40,
        borderRadius: 50,
        borderWidth: 2,
        borderColor: colors.txtInputBackGround
    },
    title: {
        fontFamily: "OpenSans-Bold",
        color: colors.black,
        fontSize: 20,
        marginLeft: 5,
        flex: 1
    },
    time: {
        color: "grey",
        fontSize: 10,
        marginHorizontal: 5
    },
    post: {
        alignSelf: "center",
        width: "88%",
        height: 180,
        borderRadius: 20,
        marginTop: 10
    },
    heart: {
        position: "absolute",
        bottom: 6,
        right: 40,
        backgroundColor: colors.white,
        elevation: 2,
        padding: 8,
        borderRadius: 20
    }
})