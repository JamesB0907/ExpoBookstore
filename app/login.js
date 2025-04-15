import { Link } from "expo-router";
import { Text, TextInput, View } from "react-native";


export default function Login() {
    return (
        <View>
            <Text>Login</Text>
            <TextInput placeholder="Email" />
            <TextInput placeholder="Password" />
            {/* Fake login button is a link */}
            <Link href="(tabs)">Login</Link>
        </View>
    )
}