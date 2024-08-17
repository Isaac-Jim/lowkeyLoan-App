import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, Button } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

function ApplicationScreen({ navigation }) {
  // State to store form values
  const [amount, setAmount] = useState('');
  const [duration, setDuration] = useState('30 days');
  const [paymentMethod, setPaymentMethod] = useState('Mobile Money');
  const [showScheduledPayment, setShowScheduledPayment] = useState(false); // State to show/hide scheduled payment dropdown

  // Dummy date for the payment due date (can be replaced with real logic)
  const paymentDueDate = "15th September 2024";

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>How much do you need?</Text>
      <TextInput
        style={styles.input}
        placeholder="Type amount here"
        value={amount}
        onChangeText={setAmount}
        keyboardType="numeric"
      />

      <Text style={styles.subheading}>Loan duration</Text>
      <View style={styles.durationContainer}>
        <TouchableOpacity
          style={[styles.durationButton, duration === '14 days' && styles.activeDurationButton]}
          onPress={() => setDuration('14 days')}
        >
          <Text style={duration === '14 days' ? styles.activeDurationText : styles.durationText}>14 days</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.durationButton, duration === '20 days' && styles.activeDurationButton]}
          onPress={() => setDuration('20 days')}
        >
          <Text style={duration === '20 days' ? styles.activeDurationText : styles.durationText}>20 days</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.durationButton, duration === '30 days' && styles.activeDurationButton]}
          onPress={() => setDuration('30 days')}
        >
          <Text style={duration === '30 days' ? styles.activeDurationText : styles.durationText}>30 days</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.dropdownContainer}>
        <TouchableOpacity
          style={styles.dropdown}
          onPress={() => setShowScheduledPayment(!showScheduledPayment)} // Toggle dropdown visibility
        >
          <Text style={styles.dropdownText}>Scheduled payment</Text>
          <FontAwesome name={showScheduledPayment ? "chevron-down" : "chevron-right"} size={24} color="black" />
        </TouchableOpacity>
        {showScheduledPayment && ( // Conditionally render the payment due date dropdown
          <View style={styles.paymentDueDateContainer}>
            <Text style={styles.paymentDueDateText}>Payment Due Date: {paymentDueDate}</Text>
          </View>
        )}
        
      </View>

      <Text style={styles.subheading}>Where should we send the money?</Text>
      <View style={styles.paymentMethodContainer}>
        <TouchableOpacity
          style={[styles.paymentMethodButton, paymentMethod === 'Bank Account' && styles.activePaymentMethodButton]}
          onPress={() => setPaymentMethod('Bank Account')}
        >
          <Text style={styles.paymentMethodText}>Bank Account</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.paymentMethodButton, paymentMethod === 'Mobile Money' && styles.activePaymentMethodButton]}
          onPress={() => setPaymentMethod('Mobile Money')}
        >
          <Text style={styles.paymentMethodText}>Mobile Money</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.submitButton}>
        <Text style={styles.submitButtonText}>Get Funds</Text>
      </TouchableOpacity>

      <View style={styles.navigationButtons}>
        <Button title="Home" onPress={() => navigation.navigate('HomeScreen')}  />
        <Button title="Loan" onPress={() => navigation.navigate('ApplicationScreen')} color="purple" />
        <Button title="Chat" onPress={() => navigation.navigate('HomeSupport')} />
        <Button title="Profile" onPress={() => navigation.navigate('ProfileScreen')} />
      </View>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#333',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  subheading: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  durationContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  durationButton: {
    flex: 1,
    padding: 10,
    borderWidth: 1,
    borderColor: '#333',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    marginHorizontal: 5,
  },
  activeDurationButton: {
    backgroundColor: 'green',
  },
  durationText: {
    color: '#333',
  },
  activeDurationText: {
    color: '#fff',
  },
  dropdownContainer: {
    marginBottom: 20,
  },
  dropdown: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
    marginBottom: 10,
  },
  dropdownText: {
    fontSize: 16,
  },
  paymentDueDateContainer: {
    padding: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
    backgroundColor: '#f9f9f9',
  },
  paymentDueDateText: {
    fontSize: 16,
    color: '#333',
  },
  paymentMethodContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  paymentMethodButton: {
    flex: 1,
    padding: 15,
    borderWidth: 1,
    borderColor: '#333',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    marginHorizontal: 5,
  },
  activePaymentMethodButton: {
    backgroundColor: 'lightgreen',
  },
  paymentMethodText: {
    color: '#333',
  },
  submitButton: {
    backgroundColor: 'green',
    padding: 15,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
  },
  submitButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  navigationButtons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 45,
  },
});

export default ApplicationScreen;
