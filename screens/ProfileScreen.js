import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, Switch, Button, ScrollView } from 'react-native';

const ProfileScreen = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isPasswordEnabled, setIsPasswordEnabled] = useState(false);

  const toggleDarkMode = () => setIsDarkMode(prevState => !prevState);

  const handleLogout = () => {
    // Logic for logout
    console.log("User logged out");
  };

  // Dynamic styles based on dark mode
  const containerStyle = isDarkMode ? styles.darkContainer : styles.lightContainer;
  const textStyle = isDarkMode ? styles.darkText : styles.lightText;

  return (
    <ScrollView contentContainerStyle={containerStyle}>
      {/* Profile Section */}
      <View style={styles.section}>
        <Image source={require('../assets/profile.png')} style={styles.profilePic} />
        <Text style={[styles.clientName, textStyle]}>Amy Mee</Text>
      </View>

      {/* User Profile */}
      <View style={styles.section}>
        <Text style={[styles.sectionTitle, textStyle]}>User Profile</Text>
        <Text style={textStyle}>Name: Amy Mee</Text>
        <Text style={textStyle}>Location: Sarbah Hall, UG</Text>
      </View>

      {/* Connected Accounts */}
      <View style={styles.section}>
        <Text style={[styles.sectionTitle, textStyle]}>Connected Accounts</Text>
      </View>

      {/* Bank Account Subsection */}
      <View style={styles.subsection}>
          <Text style={[styles.subsectionTitle, textStyle]}>Bank Account</Text>
          <Text style={textStyle}>Account Number: 123456789</Text>
          <Text style={textStyle}>Bank Name: ABC Bank</Text>
        </View>

        {/* Mobile Money Account Subsection */}
        <View style={styles.subsection}>
          <Text style={[styles.subsectionTitle, textStyle]}>Mobile Money Account</Text>
          <Text style={textStyle}>Phone Number: 0501234567</Text>
          <Text style={textStyle}>Provider: XYZ Mobile Money</Text>
        </View>

        {/* Facebook Account Subsection */}
        <View style={styles.subsection}>
          <Text style={[styles.subsectionTitle, textStyle]}>Facebook</Text>
          <Text style={textStyle}>Username: amymee</Text>
          <Text style={textStyle}>Email: amymee@facebook.com</Text>
        </View>
      
            {/* App Preferences */}
      <View style={styles.section}>
        <Text style={[styles.sectionTitle, textStyle]}>App Preferences</Text>
        <View style={styles.preference}>
          <Text style={textStyle}>Dark Mode</Text>
          <Switch value={isDarkMode} onValueChange={toggleDarkMode} />
        </View>
      </View>

      {/* Socials */}
      <View style={styles.section}>
        <Text style={[styles.sectionTitle, textStyle]}>Socials</Text>
        <Text style={textStyle}>Email: amymee@yahoo.com</Text>
        <Text style={textStyle}>Phone: 0506465106</Text>
      </View>

      {/* Logout Button */}
      <View style={styles.section}>
        <Button title="Logout" onPress={handleLogout} color="red" />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  lightContainer: {
    padding: 67,
    maxwidth: '100%',
    backgroundColor: '#f2f2f2',
  },
  darkContainer: {
    width: '100%',
    padding: 67,
    backgroundColor: '#333',
  },
  section: {
    marginBottom: 20,
  },
  subsection: {
    fontWeight:'bold',
    marginTop: 10,
    marginRight: 'auto',
    width: '100%',
    padding: 10,
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
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subsectionTitle: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  preference: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 10,
  },
  darkText: {
    color: '#fff',
  },
  lightText: {
    color: '#000',
  },
});

export default ProfileScreen;
