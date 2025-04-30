
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
                {/* Fake login button is a link */}
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
    },
    container: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "burlywood",
        width: 300,
        height: 300,
        borderRadius: 20,
    },
    loginHeader: {
        fontSize: 25,
        marginBottom: 30,
    },
    loginInput: {
        backgroundColor: "white",
        borderRadius: 10,
        width: 200,
        margin: 10,
        marginBottom: 20
    },
    loginButton: {
        backgroundColor: "coral",
        width: 90,
        height: 40,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 8,
    }
});
