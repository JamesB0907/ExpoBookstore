import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, View } from 'react-native';
import Layout from './_layout';
import { Link } from 'expo-router';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      {/* Consider adding a title or tagline above the image for better context */}
      {/* Example: <Text style={styles.title}>Welcome to the Bookstore</Text> */}
      
      <Image source={require('../assets/book-splash.png')} style={styles.splash} />
      
      {/* The link text could be styled to look more like a button for better UX */}
      {/* Example: <Link href="/login" style={styles.linkButton}>Welcome to the "Bookstore"</Link> */}
      
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    // Suggestion: Add some padding for better spacing
    // padding: 20,
  },
  splash: {
    width: 375,
    height: 500,
    // Suggestion: Add a border or shadow to make the image stand out
    // borderRadius: 10,
    // shadowColor: '#000',
    // shadowOffset: { width: 0, height: 2 },
    // shadowOpacity: 0.3,
    // shadowRadius: 4,
  },
  // Suggested new styles:
  // title: {
  //   fontSize: 24,
  //   fontWeight: 'bold',
  //   marginBottom: 20,
  //   color: '#333',
  // },
  // linkButton: {
  //   color: '#fff',
  //   backgroundColor: '#007BFF',
  //   paddingVertical: 10,
  //   paddingHorizontal: 20,
  //   borderRadius: 5,
  //   textAlign: 'center',
  //   marginTop: 20,
  // },
});