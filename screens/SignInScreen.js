import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';

const SignInScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();

  const handleSignIn = () => {
    // Example mock credentials (replace this with API call later)
    const mockEmail = 'user@example.com';
    const mockPassword = 'password123';
  
    if (email === mockEmail && password === mockPassword) {
      console.log('Successfully signed in!');
      // Navigate to the home screen or wherever after successful sign-in
      navigation.navigate('HomeScreen');
    } else {
      console.log('Invalid email or password');
      // Show an error message to the user (You can use a state to manage this)
      alert('Invalid email or password');
    }
  };

  const handleSignUpNavigation = () => {
    navigation.navigate('SignUp');
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
      <Text style={styles.title}>Welcome back!</Text>
      <Text style={styles.subtitle}>Please Sign In</Text>
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
      <TouchableOpacity style={styles.signInButton} onPress={handleSignIn}>
        <Text style={styles.signInButtonText}>Sign In</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.googleButton}>
        <FontAwesomeIcon icon={faGoogle} size={20} color="green" />
        <Text style={styles.googleButtonText}>Sign In with Google</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.signUpButton} onPress={handleSignUpNavigation}>
        <Text style={styles.signUpButtonText}>Don't have an account? Sign Up</Text>
      </TouchableOpacity>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 69,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 60,
  },
  logo: {
    width: 90, 
    height: 50,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 40,
    marginTop: 20,
    color: '#333',
  },
  subtitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 70,
  },
  input: {
    width: '100%',
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingHorizontal: 12,
    marginBottom: 16,
  },
  signInButton: {
    backgroundColor: '#4CBB17',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 24,
    width: '100%',
    marginBottom: 16,
    alignItems: 'center',
  },
  signInButtonText: {
    color: 'white',
    fontSize: 16,
  },
  googleButton: {
    backgroundColor: '#e3e3e3',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 24,
    width: '100%',
    marginBottom: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  googleButtonText: {
    color: '#333',
    fontSize: 16,
    marginLeft: 8,
  },
  signUpButton: {
    paddingVertical: 12,
    borderRadius: 24,
    alignItems: 'center',
  },
  signUpButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default SignInScreen;
