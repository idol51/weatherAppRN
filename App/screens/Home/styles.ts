import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    body: {
        flex: 1,
    },
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    weatherIcon: {
        width: 160,
        height: 160,
        objectFit: "contain",
        alignSelf: "center"
    },
    weatherTitle: {
        alignSelf: "center",
        fontSize: 24
    },
    temperature: {
        fontSize: 48,
        fontWeight: "bold",
        alignSelf: "center"
    }
})