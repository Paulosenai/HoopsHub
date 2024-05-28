import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "black",
    },
    logo: {
        width: 200,
        height: 200,
        marginBottom: 300,
    },
    button: {
        backgroundColor: "#FF7A00",
        padding: 10,
        color: 'white',
        fontWeight:'bold',
        borderRadius: 100,
        width: 250,
        margin: 5,
    },
    secondaryButton: {
        backgroundColor: "black",
        borderColor: "white",
        borderWidth: 1,
        padding: 10,
        borderRadius: 100,
        width: 250,
        margin: 5,
    },
    text: {
        fontSize: 16,
        color: 'white',
        textAlign: "center",
        marginTop: 10,
    },
});




export default styles;