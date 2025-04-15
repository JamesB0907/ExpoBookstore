import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, View } from 'react-native';
import Layout from './_layout';
import { Link } from 'expo-router';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
    <Image source={require('../assets/book-splash.png')} style={styles.splash} />
     <Link href="/login" style={{color: 'blue'}}>Welcome to the "Bookstore"</Link>
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
  },
  splash: {
    width: 375,
    height: 500,
  }
});