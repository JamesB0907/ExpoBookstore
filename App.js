import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, View } from 'react-native';
//assets\book-splash.bmp
export default function App() {
  return (
    <View style={styles.container}>
      <Image source={require('./assets/book-splash.png')} style={styles.splash} />
      <Text> 
        Welcome to the "Bookstore"
      </Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  splash: {
    width: 400,
    height: 400,
    top: 0,
  }
});