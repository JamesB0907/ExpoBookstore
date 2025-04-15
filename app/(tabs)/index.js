import { View, Text, ScrollView, Image, StyleSheet } from 'react-native'
import React from 'react'

const Storefront = () => {
  return (
    <ScrollView>
        <View style={styles.bookItem}>
            <Image style={styles.bookImage} />
            <Text style={styles.bookTitle}>Lord of the Rings: Fellowship of the Ring</Text>
            <Text style={styles.bookAuthor}>J. R. R. Tolkien</Text>
            <Text style={styles.bookPrice}>$4.99</Text>
        </View>
        <View style={styles.bookItem}>
            <Image style={styles.bookImage}/>
            <Text style={styles.bookTitle}>House of Leaves</Text>
            <Text style={styles.bookAuthor}>Mark Z. Danielewski</Text>
            <Text style={styles.bookPrice}>$10.99</Text>
        </View>
        <View style={styles.bookItem}>
            <Image style={styles.bookImage}/>
            <Text style={styles.bookTitle}>Eloquent JavaScript</Text>
            <Text style={styles.bookAuthor}>Marijn Haverbeke</Text>
            <Text style={styles.bookPrice}>$20.99</Text>
        </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  bookItem: {
    borderColor: '#B2AC88',
    borderWidth: 4,
    padding: 10,
    marginVertical: 20,
    marginHorizontal: 30,
  },
  bookImage: {
    width: 375,
    height: 200,
  }
})

export default Storefront;