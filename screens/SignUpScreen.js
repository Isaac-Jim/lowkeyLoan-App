import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, Alert, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';

const SignUpScreen = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const navigation = useNavigation();

  const handleSignUp = () => {
    // Validate input fields
    if (!name || !email || !password || !phoneNumber) {
      Alert.alert('Error', 'Please fill in all the required fields.');
      return;
    }
    // Validate email format
    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!emailRegex.test(email)) {
      Alert.alert('Error', 'Please enter a valid email address.');
      return;
    }

    // Validate password complexity
    const passwordRegex = /^[a-zA-Z0-9@#$%*?&]{8,}$/;
    if(!passwordRegex.test(password)) {
      Alert.alert('Error', 'Password must be at least 8 characters containing letters, numbers or special symbols.');
      return;
    }

    // Validate phone number format
    const phoneNumberRegex = /^\d{10}$/;
    if (!phoneNumberRegex.test(phoneNumber)) {
      Alert.alert('Error', 'Please enter a valid 10-digit phone number.');
      return;
    }
    // Handle sign-up logic
    console.log('Signing up with name:', name, 'email:', email, 'password:', password, 'and phone number:', phoneNumber);
  };

  const handleSignInNavigation = () => {
    navigation.navigate('SignIn');
  };

  return (
    <LinearGradient
      colors={['#FFFFFF', '#FFFFFF', '#658864']}
      start={{ x: 1, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={styles.container}
    >
      <View style={styles.header}>
        <Image source={require('../assets/logo.png')} style={styles.logo} />
      </View>
      <View style={styles.container}>
        <Text style={styles.title}>Welcome Aboard</Text>
        <Text style={styles.subtitle}>Let's get you that loan!</Text>
        <View style={styles.formContainer}>
          <TextInput
            style={styles.input}
            placeholder="Name"
            value={name}
            onChangeText={setName}
          />
          <TextInput
            style={styles.input}
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
          />
          <TextInput
            style={styles.input}
            placeholder="Password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />
          <TextInput
            style={styles.input}
            placeholder="Phone Number"
            value={phoneNumber}
            onChangeText={setPhoneNumber}
            keyboardType="phone-pad"
          />
          <TouchableOpacity style={styles.signUpButton} onPress={handleSignUp}>
            <Text style={styles.signUpButtonText}>Sign Up</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.googleButton}>
            <Text style={styles.googleButtonText}>Sign Up with Google</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.signInButton} onPress={handleSignInNavigation}>
            <Text style={styles.signInButtonText}>Already have an account? Sign In</Text>
          </TouchableOpacity>
        </View>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f2f2f2',
    paddingHorizontal: 24,
  },
  header: {
    alignItems: 'center',
    marginBottom: 32,
  },
  logo: {
    width: 400,
    height: 120,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 48,
  },
  formContainer: {
    width: 'fill',
  },
  input: {
    width: 'fill',
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingHorizontal: 12,
    marginBottom: 16,
  },
  signUpButton: {
    backgroundColor: '#4CBB17',
    paddingVertical: 12,
    paddingHorizontal: 24,
    alignItems: 'center',
    borderRadius: 34,
    width: '100%',
    marginBottom: 16,
  },
  signUpButtonText: {
    color: 'white',
    fontSize: 16,
  },
  signInButton: {
    paddingVertical: 12,
    borderRadius: 24,
    alignItems: 'center',
  },
  signInButtonText: {
    color: '#4CBB17',
    fontSize: 16,
    fontWeight: 'bold',
  },
  googleButton: {
    backgroundColor: '#e3e3e3',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 25,
    width: '100%',
  },
  googleButtonText: {
    color: '#333',
    fontSize: 16,
  },
});

export default SignUpScreen;
