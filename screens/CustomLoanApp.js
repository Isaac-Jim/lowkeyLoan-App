import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, Alert, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';

function CustomLoanApp() {

    // State to store form values
    const [amount, setAmount] = useState('');
    const [duration, setDuration] = useState('');
    
    return (
        <LinearGradient
      colors={['#FFFFFF', '#FFFFFF', '#658864']}
      start={{ x: 1, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={styles.container}
    >
    <View style={styles.container}>
        <Text>How much do you need?</Text>

// Input for loan amount
<TextInput 
  style={styles.input}
  value={amount}
  onChangeText={setAmount} 
/>

<Text>Loan duration:</Text>

// Buttons for duration options  
<TouchableOpacity
  style={styles.button}
  onPress={() => setDuration('20 days')}
>
  <Text>20 days</Text>  
</TouchableOpacity>

<TouchableOpacity
  style={styles.button}  
  onPress={() => setDuration('30 days')}  
>
  <Text>30 days</Text>
</TouchableOpacity>

// Submit button linked to next screen
<TouchableOpacity
  style={styles.button}
  onPress={() => navigation.navigate('LoanReview')}  
>
  <Text>Get Funds</Text>
</TouchableOpacity>
</View>
</LinearGradient>
    )
}
const styles = StyleSheet.create({
        container: {
          flex: 1, 
          padding: 20
        },
      
        header: {
          fontSize: 20,
          marginBottom: 20
        },
      
        input: {
          borderWidth: 1,
          borderColor: '#ddd',
          padding: 10,
          marginBottom: 20,
          borderRadius: 4
        },
      
        button: {
          backgroundColor: '#fff',
          padding: 10,
          marginBottom: 10, 
          borderRadius: 4
        },
      
        dropdown: {
          borderWidth: 1,
          borderColor: '#ddd',
          padding: 10,
          marginBottom: 20 
        }
      });
    
    export default CustomLoanApp;