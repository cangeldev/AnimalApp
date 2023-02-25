import { StyleSheet } from "react-native"

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white"
    },
    pawShape: {
        width: 200,
        height: 200,
        resizeMode: "stretch",
        position: "absolute",
        right: 10,
        top: 20
    },
    inputTitle: {
        color: "red"
    },
    linkText:{
        color:"#f99935"
    },
    anotherLoginView: {
        flexDirection: "row",
        alignSelf: "center",
        width: 200,
        justifyContent: "space-around",
        marginTop: 30,
     },
})