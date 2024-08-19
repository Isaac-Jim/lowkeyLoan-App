import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Button, Linking, Image } from 'react-native';

const HomeSupport = ({ navigation }) => {
  const [email, setEmail] = useState('');

  const handleEmailUs = () => {
    if (!email) {
      alert('Please enter your email address.');
      return;
    }
    const subject = 'Support Request';
    const body = 'Please provide details of your issue or query here';
    const mailto = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    Linking.openURL(mailto);
  };

  const handleVisitWebsite = () => {
    const websiteUrl = 'https://lowkeyloans-9e711.web.app/homepage.html';
    Linking.openURL(websiteUrl);
  };

  const handleCallSupport = () => {
    const phoneNumber = 'tel:0247266229';
    Linking.openURL(phoneNumber);
  };

  const handleWhatsApp = () => {
    const phoneNumber = '233247266229'; 
    const message = 'Hello, I would like to inquire about your loan services.'; // Replace with the default message if needed
    const url = `whatsapp://send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;
    
    Linking.canOpenURL(url)
      .then((supported) => {
        if (supported) {
          return Linking.openURL(url);
        } else {
          console.log('WhatsApp is not installed on this device');
        }
      })
      .catch((err) => console.error('An error occurred', err));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hello, Client!</Text>
      <Text style={styles.subtitle}>How can we help you today?</Text>

      <View style={styles.contactSection}>
        <Text style={styles.label}>Contact Support</Text>

        <Text style={styles.subLabel}>Email</Text>
        <TextInput
          style={styles.input}
          value={email}
          onChangeText={setEmail}
          placeholder="Enter your email"
          keyboardType="email-address"
        />

        <Button title="Email Us" onPress={handleEmailUs} color="purple" />
      </View>

      <View style={styles.buttonContainer}>
        <Button title="Visit Our Website" onPress={handleVisitWebsite} color="green" />
      </View>

      <View style={styles.buttonContainer}>
        <Button title="Call Support" onPress={handleCallSupport} color="green" />
      </View>

      <View style={styles.buttonContainer}>
        <Button title="Contact on WhatsApp" onPress={handleWhatsApp} color="green" />
      </View>

      <Image source={require('../assets/profile.png')} style={styles.image} />
      <Text style={styles.chatText}>Let's chat</Text>

      <View style={styles.navigationButtons}>
        <Button title="Home" onPress={() => navigation.navigate('HomeScreen')} />
        <Button title="Loan" onPress={() => navigation.navigate('ApplicationScreen')} />
        <Button title="Chat" onPress={() => navigation.navigate('HomeSupport')} color="purple" />
        <Button title="Profile" onPress={() => navigation.navigate('ProfileScreen')} />
      </View>      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 20,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 24,
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 18,
    marginBottom: 30,
  },
  contactSection: {
    width: '100%',
    alignItems: 'center',
  },
  label: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  subLabel: {
    fontSize: 18,
    marginVertical: 10,
  },
  input: {
    borderWidth: 1,
    padding: 10,
    marginBottom: 20,
    borderRadius: 5,
    width: '100%',
  },
  buttonContainer: {
    width: '100%',
    marginTop: 20,
  },
  navigationButtons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginTop: 30,
  },
  image: {
    width: 100,
    height: 100,
    marginTop: 50,
  },
  chatText: {
    marginTop: 10,
  },
});

export default HomeSupport;
