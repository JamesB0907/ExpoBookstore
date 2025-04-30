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
        flexDirection: 'row',
        // Suggestion: Add some padding and background color to make the header more visually distinct.
        // Example:
        // padding: 10,
        // backgroundColor: '#f8f9fa',
    },
    bookItem: {
        borderColor: "#B2AC88",
        borderWidth: 4,
        padding: 10,
        marginVertical: 20,
        marginHorizontal: 30,
        alignItems: "center",
        // Suggestion: Add a borderRadius to make the edges of the book item container rounded.
        // Example:
        // borderRadius: 10,
        // Suggestion: Add a shadow effect to make the book items stand out more.
        // Example:
        // shadowColor: '#000',
        // shadowOffset: { width: 0, height: 2 },
        // shadowOpacity: 0.2,
        // shadowRadius: 4,
        // elevation: 5, // For Android shadow
    },
    bookImage: {
        width: 200,
        height: 300,
        // Suggestion: Add a borderRadius to the book images for a softer look.
        // Example:
        // borderRadius: 10,
    },
    // Suggestion: Add styles for bookTitle, bookAuthor, and bookPrice to improve text readability and hierarchy.
    // Example:
    // bookTitle: {
    //     fontSize: 18,
    //     fontWeight: 'bold',
    //     marginTop: 10,
    //     textAlign: 'center',
    // },
    // bookAuthor: {
    //     fontSize: 14,
    //     color: '#555',
    //     marginTop: 5,
    //     textAlign: 'center',
    // },
    // bookPrice: {
    //     fontSize: 16,
    //     color: '#28a745',
    //     marginTop: 10,
    //     fontWeight: 'bold',
    //     textAlign: 'center',
    // },
});

export default Storefront;
