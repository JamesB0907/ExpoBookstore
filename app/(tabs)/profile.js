import { View, Text, TextInput, StyleSheet, Button } from 'react-native'
import React from 'react'

const Profile = () => {
    let username = "User123"
    let email = "user123@place.com"
  return (
    <View style={styles.container}>
      <Text style={{fontWeight: 'bold', fontSize: 35}}>Profile</Text>
      <Text style={{fontWeight: 'bold', fontSize: 20}}>Username</Text>
      <TextInput value={username} editable={true} style={styles.profileEdit}/>
      <Text style={{fontWeight: 'bold', fontSize: 20}}>Email</Text>
      <TextInput value={email} editable={true} style={styles.profileEdit}/>
      <Button title="Submit" color="black" style={styles.submitButton}/>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        gap: 10
    },
    profileEdit: {
        borderRadius: 10,
        backgroundColor: 'grey',
        opacity: 0.25,
        fontWeight: 'bold',
        width: 200,
        height: 50,
        fontSize: 20,
    },
    submitButton: {
        marginTop: 20,
        padding: 12
    }
})

export default Profile