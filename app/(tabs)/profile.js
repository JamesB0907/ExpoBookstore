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

// Suggested Style Changes for Improvement:

// 1. Improve the `profileEdit` TextInput background color for better visibility.
// Example:
// profileEdit: {
//     backgroundColor: '#f0f0f0', // Use a lighter color for better contrast.
//     opacity: 1, // Remove opacity for better readability.
// }

// 2. Add padding to the `profileEdit` TextInput for better text alignment.
// Example:
// profileEdit: {
//     paddingHorizontal: 10, // Add horizontal padding for better spacing.
// }

// 3. Use a more visually appealing color for the `Submit` button.
// Example:
// submitButton: {
//     backgroundColor: '#007BFF', // Use a primary color for the button.
//     borderRadius: 5, // Add rounded corners for a modern look.
// }

// 4. Add spacing between the `TextInput` fields and the `Submit` button for better layout.
// Example:
// container: {
//     gap: 20, // Increase the gap between elements for better spacing.
// }

// 5. Center the text inside the `TextInput` fields for better alignment.
// Example:
// profileEdit: {
//     textAlign: 'center', // Center the text inside the input field.
// }

// 6. Add a shadow effect to the `Submit` button for a more modern design.
// Example:
// submitButton: {
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.25,
//     shadowRadius: 3.84,
//     elevation: 5, // Add elevation for Android shadow support.
// }