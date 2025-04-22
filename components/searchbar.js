import { View, Text, StyleSheet, TextInput } from 'react-native'
import React from 'react'

const SearchBar = () => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <TextInput placeholder="🔍Search" style={styles.searchBar} />
    </View>
  )
}

const styles = StyleSheet.create({
    searchBar: {
        color: 'grey',
        fontSize: 20,
        borderColor: 'black ',
        borderWidth: 2,
        borderRadius: 10,
        margin: 10,
        width: '70%',
        opacity: 0.75,
        position: 'relative',
    }
})
export default SearchBar;