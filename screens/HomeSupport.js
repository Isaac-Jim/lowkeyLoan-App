import React, {useState} from 'react';
import {View, Text, TextInput, StyleSheet, Button, Linking, Image } from 'react-native';

const HomeSupport = () => {
  const [email, setEmail] = useState('');
  
  const handleEmailUs = () => {
    const subject = 'Support Request';
    const body = 'Please provide details of your issue or query here';
    const mailto = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    Linking.openURL(mailto);
  };

  const handleVisitWebsite = () => {
    const websiteUrl = 'https://www.website.com';
    Linking.openURL(websiteUrl);
  };

  const handleCallSupport = () => {
    const phoneNumber = 'tel:0506465106';
    Linking.openURL(phoneNumber);
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 24, marginBottom: 20 }}>Hello, Client!</Text>
      <Text style={{ fontSize: 18, marginBottom: 30 }}>How can we help you today?</Text>

      <View style={styles.container}>
      <Text style={styles.label}>Contact Support</Text>
      
      <Text style={styles.subLabel}>Email</Text>
      <TextInput
        style={styles.input}
        value={email}
        onChangeText={setEmail}
        placeholder="Enter your email"
        keyboardType="email-address"
      />

<Button title="Email Us" onPress={handleEmailUs} color="blue" />
      
      <View style={styles.buttonContainer}>
        <Button title="Visit Our Website" onPress={handleVisitWebsite} color="green" />
      </View>

      <View style={styles.buttonContainer}>
        <Button title="Call Support" onPress={handleCallSupport} color="red" />
        </View>

      <View style={{ flexDirection: 'row', marginTop: 30 }}>
        <Button title="Home" onPress={() => {}} />
        <Button title="Loan" onPress={() => {}} />
        <Button title="Chat" onPress={() => {}} color="purple" />
        <Button title="Profile" onPress={() => {}} />
      </View>

      <Image source={require('./image.png')} style={{ marginTop: 50 }} />
      <Text style={{ marginTop: 10 }}>Let's chat</Text>
    </View>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#fff',
      padding: 20,
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
    },
    buttonContainer: {
      marginTop: 20,
    },

    header: {
      width: '100%',
      padding: 20,
      alignItems: 'center',
    },
  
    headerText: {
      fontSize: 24,
      color: '#333',
      textAlign: 'center',
    },
  
    button: {
      backgroundColor: '#007bff',
      padding: 10,
      borderRadius: 4,
      marginVertical: 8,
    },
  
    buttonText: {
      color: '#fff',
    },    
  });

export default HomeSupport;