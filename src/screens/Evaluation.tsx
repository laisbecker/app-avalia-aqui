import { SafeAreaView, StatusBar, StyleSheet, Text } from "react-native";

export default function Evaluations() {
    return (
        <SafeAreaView>
            <Text>Evaluations</Text>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "flex-start",
        marginTop: 100,
    },
    title: {
        fontSize: 40,
        color: "#3b5a00",
        textAlign: "center",
        fontWeight: "600",
    },
    descriptionText: {
        fontSize: 16,
        color: "#000000",
        padding: 20,
        textAlign: "center",
        marginBottom: 50,
    },
    button: {
        width: 100,
        height: 40,
        backgroundColor: "#000000",
        borderRadius: 8,
        alignSelf: "center",
        justifyContent: "center",
        alignItems: "center",
    },
    buttonText: {
        fontSize: 18,
        color: "#b7ff30",
    },
});
