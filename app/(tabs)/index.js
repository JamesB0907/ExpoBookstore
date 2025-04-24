import { View, Text, ScrollView, Image, StyleSheet } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import SearchBar from "../../components/searchbar.js";
import Logout from "../../components/logout.js";

const Storefront = () => {
    return (
        <SafeAreaView>
            <ScrollView>
                <View style={styles.headContainer}>
                    <SearchBar />
                    <Logout />
                </View>
                <View style={styles.bookItem}>
                    <Image
                        style={styles.bookImage}
                        source={require("../../assets/fellowship.png")}
                    />
                    <Text style={styles.bookTitle}>
                        Lord of the Rings: Fellowship of the Ring
                    </Text>
                    <Text style={styles.bookAuthor}>J. R. R. Tolkien</Text>
                    <Text style={styles.bookPrice}>$4.99</Text>
                </View>
                <View style={styles.bookItem}>
                    <Image
                        style={styles.bookImage}
                        source={require("../../assets/leaves.png")}
                    />
                    <Text style={styles.bookTitle}>House of Leaves</Text>
                    <Text style={styles.bookAuthor}>Mark Z. Danielewski</Text>
                    <Text style={styles.bookPrice}>$10.99</Text>
                </View>
                <View style={styles.bookItem}>
                    <Image
                        style={styles.bookImage}
                        source={require("../../assets/eloquent.png")}
                    />
                    <Text style={styles.bookTitle}>Eloquent JavaScript</Text>
                    <Text style={styles.bookAuthor}>Marijn Haverbeke</Text>
                    <Text style={styles.bookPrice}>$20.99</Text>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    headContainer: {
        display: 'flex',
        flexDirection: 'row'
    },
    bookItem: {
        borderColor: "#B2AC88",
        borderWidth: 4,
        padding: 10,
        marginVertical: 20,
        marginHorizontal: 30,
        alignItems: "center",
    },
    bookImage: {
        width: 200,
        height: 300,
    },
});

export default Storefront;
