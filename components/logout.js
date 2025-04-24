import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import { useRouter } from "expo-router";

const Logout = () => {
    const router = useRouter();

    return (
        <TouchableOpacity style={styles.button} onPress={() => router.navigate('/login')}>
            <Text style={styles.text}>Logout</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        marginTop: 11,
        marginRight: 10,
        width: 60,
        height: 40,
        backgroundColor: '#B2AC88',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        color: 'white',
    }
});
export default Logout;
