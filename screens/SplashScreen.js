import React, { useState } from 'react';
import { StyleSheet, View, Text, Button, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';

const SplashScreen = () => {
    const navigation = useNavigation();
  
    const handleSignUpNavigation = () => {
      navigation.navigate('SignIn');
    };
  
    return (
        <LinearGradient
      colors={['lightgreen', 'black']}
      start={{ x: 1, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={styles.container}
    >
        
        <Text style={styles.welcome}>
          Welcome to LOWKEY LOANS!
        </Text>

        <View style={styles.header}>
        <Image source={require('../assets/logo.png')} style={styles.logo} />
      </View>
  
      <View>
      <TouchableOpacity style={styles.startButton} onPress={handleSignUpNavigation}>
        <Text style={styles.startButtonText}>Get Started</Text>
      </TouchableOpacity>
    </View>

  </LinearGradient>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'green',
      justifyContent: 'center',
      alignItems: 'center',
    },
    welcome: {
      color: 'white',
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 50,
    },
    header: {
        marginVertical: 20,
    },
    logo: {
        width: 450,
        height: 200,
    },
    startButton: {
        backgroundColor: '#4CBB17',
        paddingVertical: 12,
        paddingHorizontal: 24,
        borderRadius: 24,
        width: '100%',
        marginBottom: 16,
        alignItems: 'center',
      },
      startButtonText: {
        color: 'black',
        fontSize: 16,
        fontWeight: 'bold',
      },
  });
  
  export default SplashScreen;