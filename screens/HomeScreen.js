import React from 'react';
import { View, Text, TouchableOpacity, FlatList, StyleSheet, StatusBar, Button } from 'react-native';

const HomeScreen = ({ navigation }) => {
  const loanHistory = [
    { id: '1', status: 'Loan Received', detail: 'Loan of $50 was received' },
    { id: '2', status: 'Loan Disbursed', detail: '$50 was disbursed to your bank' },
    { id: '3', status: 'Loan Approved', detail: 'Loan of $50 was approved' },
    { id: '4', status: 'Loan Declined', detail: 'We are sorry! Your loan was declined' },
  ];

  const renderItem = ({ item }) => (
    <View style={styles.historyItem}>
      <Text style={styles.historyStatus}>{item.status}</Text>
      <Text style={styles.historyDetail}>{item.detail}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <View style={styles.header}>
        <Text style={styles.loanLimit}>Loan Limit</Text>
        <Text style={styles.amount}>$50</Text>
        <Text style={styles.duration}>Loan duration: 30 days</Text>
        <TouchableOpacity 
          style={styles.applyButton}
          onPress={() => navigation.navigate('ApplicationScreen')} // Navigate to ApplicationScreen
        >
          <Text style={styles.applyText}>Apply</Text> 
        </TouchableOpacity>
      </View>
  
      <View style={styles.navBar}>
        <TouchableOpacity style={styles.navItem}><Text style={styles.navText}>History</Text></TouchableOpacity>
      </View>
      <FlatList
        data={loanHistory}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        style={styles.historyList}
      />
      <View style={styles.navigationButtons}>
        <Button title="Home" onPress={() => navigation.navigate('HomeScreen')} color="purple" />
        <Button title="Loan" onPress={() => navigation.navigate('ApplicationScreen')} />
        <Button title="Chat" onPress={() => navigation.navigate('HomeSupport')} />
        <Button title="Profile" onPress={() => navigation.navigate('ProfileScreen')} />
      </View>
    </View>
  );
};
// Apply Button must lead to the ApplicationScreen.js

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 16,
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
  header: {
    backgroundColor: '#4CAF50',
    borderRadius: 10,
    padding: 16,
    alignItems: 'center',
  },
  loanLimit: {
    color: '#ffffff',
    fontSize: 16,
  },
  amount: {
    color: '#ffffff',
    fontSize: 36,
    fontWeight: 'bold',
  },
  duration: {
    color: '#ffffff',
    fontSize: 14,
    marginBottom: 10,
  },
  applyButton: {
    backgroundColor: '#ffffff',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
    marginBottom: 10,
  },
  applyText: {
    color: '#4CAF50',
    fontSize: 16,
  },
  chooseAmount: {
    padding: 5,
  },
  chooseText: {
    color: '#ffffff',
    textDecorationLine: 'underline',
  },
  navBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 20,
  },
  navItem: {
    alignItems: 'center',
  },
  navText: {
    color: '#4CAF50',
    fontSize: 14,
  },
  historyList: {
    flex: 1,
  },
  historyItem: {
    backgroundColor: '#ffffff',
    padding: 16,
    borderRadius: 10,
    marginVertical: 5,
  },
  historyStatus: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  historyDetail: {
    fontSize: 14,
    color: '#555555',
  },
  navigationButtons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 45,
  },
});

export default HomeScreen;