import { StyleSheet } from "react-native";
import { color } from "react-native-reanimated";


const styles = StyleSheet.create({
    container: {
        padding: 5,
    },
    messageBox: {
        marginLeft: 10,
        borderRadius: 5,
        padding: 8,
    },
    name: {
        color: "white",
        fontWeight: "bold",
        fontSize: 12,
        marginBottom: 5
    },
    message: {
        color: "white",
    },
    time: {
        color: "#c9c9c9",
        fontSize: 10,
        alignSelf: "flex-end"
    },
});

export default styles;