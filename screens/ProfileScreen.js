import React from 'react';
import { View, Text, StyleSheet, Image, Button, ScrollView, TouchableOpacity } from 'react-native';

const ProfileScreen = ({ navigation }) => {
  const handleLogout = () => {
    // Logic for logout
    console.log("User logged out");
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Profile Section */}
      <View style={styles.section}>
        <Image source={require('../assets/profile.png')} style={styles.profilePic} />
        <Text style={styles.clientName}>Amy Mee</Text>
      </View>

      {/* User Profile */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>User Profile</Text>
        <Text>Name: Amy Mee</Text>
        <Text>Location: Sarbah Hall, UG</Text>
      </View>

      {/* Connected Accounts */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Connected Accounts</Text>
      </View>

      {/* Bank Account Subsection */}
      <View style={styles.subsection}>
        <Text style={styles.subsectionTitle}>Bank Account</Text>
        <Text>Account Number: 123456789</Text>
        <Text>Bank Name: ABC Bank</Text>
      </View>

      {/* Mobile Money Account Subsection */}
      <View style={styles.subsection}>
        <Text style={styles.subsectionTitle}>Mobile Money Account</Text>
        <Text>Phone Number: 0501234567</Text>
        <Text>Provider: XYZ Mobile Money</Text>
      </View>

      {/* Facebook Account Subsection */}
      <View style={styles.subsection}>
        <Text style={styles.subsectionTitle}>Facebook</Text>
        <Text>Username: amymee</Text>
        <Text>Email: amymee@facebook.com</Text>
      </View>

      {/* Socials */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Socials</Text>
        <Text>Email: amymee@yahoo.com</Text>
        <Text>Phone: 0506465106</Text>
      </View>

      {/* Logout Button */}
      <View style={styles.section}>
      <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
    <Text style={styles.logoutButtonText}>Logout</Text>
    </TouchableOpacity>
      </View>

      {/* Navigation Buttons */}
      <View style={styles.navigationButtons}>
        <Button title="Home" onPress={() => navigation.navigate('HomeScreen')} />
        <Button title="Loan" onPress={() => navigation.navigate('ApplicationScreen')} />
        <Button title="Chat" onPress={() => navigation.navigate('HomeSupport')} />
        <Button title="Profile" onPress={() => navigation.navigate('ProfileScreen')} color="purple" />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 20,
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
  section: {
    marginBottom: 5,
  },
  subsection: {
    fontWeight: 'bold',
    marginTop: 10,
    marginRight: 'auto',
    width: '100%',
    padding: 15,
    backgroundColor: 'rgba(0, 0, 0, 0.05)', // Light gray background for subsection
    borderRadius: 5,
  },
  profilePic: {
    width: 100,
    height: 100,
    borderRadius: 50,
    alignSelf: 'center',
    marginBottom: 10,
  },
  clientName: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'green',
    marginBottom: 10,
  },
  subsectionTitle: {
    fontWeight: 'bold',
    fontSize: 0,
  },
  logoutButton: {
    backgroundColor: 'red',
    paddingVertical: 5,  
    paddingHorizontal: 16,
    borderRadius: 10,
    alignItems: 'center',
    alignSelf: 'center', 
    marginTop: 20,
  },
  logoutButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  navigationButtons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 45,
  },
});

export default ProfileScreen;
