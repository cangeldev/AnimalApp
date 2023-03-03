import { StyleSheet } from "react-native"
import colors from "../../assets/colors/colors"

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white,
    },
    imageView: {
        margin: 20,
        marginBottom: 10,
        marginTop: 30,
        alignSelf: "flex-start"
    },
    profileImage: {
        width: 90,
        height: 90,
        borderRadius: 50,
        borderWidth: 4,
        borderColor: colors.txtInputBackGround,
    },
    petsImage: {
        width: 40,
        height: 40,
        borderRadius: 20,
        borderWidth: 2,
        borderColor: colors.txtInputBackGround,
        marginRight: 3
    },
    ImageChangeIcon: {
        position: "absolute",
        right: 4,
        bottom: 0,
        color: colors.white,
        fontSize: 16,
        backgroundColor: colors.orange,
        padding: 7,
        borderRadius: 20
    },
    innerContainer: {
        flexDirection: "row"
    },
    petsView: {
        marginLeft: 5,
        marginTop: 30,
        padding: 5,
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        borderWidth: 1,
        borderRadius: 10,
        marginRight: 30,
        borderColor: colors.txtInputBackGround
    },
    petsViewTitle: {
        fontSize: 16,
        color: colors.headerBackground,
        marginBottom: 5,
        fontFamily: "HoboStd"
    },
    petsListView: {
        flexDirection: "row",
        overflow: "scroll"
    }
})