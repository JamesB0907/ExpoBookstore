import { Stack } from 'expo-router';

export default function RootLayout() {
    return (
        <Stack>
            <Stack.Screen name="index" options={{
                title: "Splash",
                headerShown: false
            }} />
            <Stack.Screen name="login" options={{
                title: "Login",
                headerShown: false
            }} />
            <Stack.Screen name="(tabs)" options={{
                title: "Home",
                headerShown: false
            }} />
        </Stack>
    )
}