import { StyleSheet } from "react-native"

export default StyleSheet.create({
    containerWrap: {
        flex: 1,
        height: 1,
        backgroundColor:"red",
    },
    container: {
        marginHorizontal: 25,
        marginTop: 35,
        flexDirection: 'row',
        alignItems: 'center',
    },
    text: {
        width: 90,
        textAlign: 'center',
        color: "red",
        fontSize: 12,

    }
})