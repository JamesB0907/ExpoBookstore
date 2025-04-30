import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native"
import { useRouter } from "expo-router";

export default function Login() {
    const router = useRouter();

    return (
        <View style={styles.deviceContainer}>
            <View style={styles.container}>
                <Text style={styles.loginHeader}>Please Sign In Below</Text>
                <TextInput style={styles.loginInput} placeholder="Email" />
                <TextInput placeholder="Password" style={styles.loginInput} />
                <TouchableOpacity style={styles.loginButton} onPress={() => router.navigate('/(tabs)')}>
                    <Text style={{fontSize: 18}}>Login</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    deviceContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        // Suggestion: Add a background color or gradient to the entire screen for better aesthetics.
        // Example:
        // backgroundColor: "#f0f8ff",
    },
    container: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "burlywood",
        width: 300,
        height: 300,
        borderRadius: 20,
        // Suggestion: Add a shadow effect to make the login box stand out.
        // Example:
        // shadowColor: "#000",
        // shadowOffset: { width: 0, height: 2 },
        // shadowOpacity: 0.25,
        // shadowRadius: 3.84,
        // elevation: 5,
    },
    loginHeader: {
        fontSize: 25,
        marginBottom: 30,
        // Suggestion: Use a bold font weight and a more modern font family for the header.
        // Example:
        // fontWeight: "bold",
        // fontFamily: "Arial",
    },
    loginInput: {
        backgroundColor: "white",
        borderRadius: 10,
        width: 200,
        margin: 10,
        marginBottom: 20,
        // Suggestion: Add padding inside the input fields for better readability.
        // Example:
        // padding: 10,
        // Suggestion: Add a border to the input fields for better visibility.
        // Example:
        // borderWidth: 1,
        // borderColor: "#ccc",
    },
    loginButton: {
        backgroundColor: "coral",
        width: 90,
        height: 40,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 8,
        // Suggestion: Use a gradient or hover effect for the button to make it more interactive.
        // Example:
        // backgroundColor: "linear-gradient(to right, #ff7e5f, #feb47b)",
        // Suggestion: Increase the button size slightly for better accessibility.
        // Example:
        // width: 120,
        // height: 50,
    }
});
