import React from 'react';
import { View, Text, TouchableOpacity, FlatList, StyleSheet, StatusBar } from 'react-native';

const HomeScreen = () => {
  const loanHistory = [
    { id: '1', status: 'Loan Received', detail: 'Loan of ₦30,000 was received' },
    { id: '2', status: 'Loan Disbursed', detail: '₦30,000 was disbursed to your bank' },
    { id: '3', status: 'Loan Approved', detail: 'Loan of ₦30,000 was approved' },
    { id: '4', status: 'Loan Declined', detail: 'We\'re sorry! Your loan was declined' },
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
        <Text style={styles.amount}>₦30,000</Text>
        <Text style={styles.duration}>Loan duration: 29 days</Text>
        <TouchableOpacity style={styles.applyButton}>
          <Text style={styles.applyText}>Apply</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.chooseAmount}>
          <Text style={styles.chooseText}>Choose amount</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.navBar}>
        <TouchableOpacity style={styles.navItem}><Text style={styles.navText}>Products</Text></TouchableOpacity>
        <TouchableOpacity style={styles.navItem}><Text style={styles.navText}>History</Text></TouchableOpacity>
        <TouchableOpacity style={styles.navItem}><Text style={styles.navText}>Invite</Text></TouchableOpacity>
        <TouchableOpacity style={styles.navItem}><Text style={styles.navText}>Accounts</Text></TouchableOpacity>
      </View>
      <FlatList
        data={loanHistory}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        style={styles.historyList}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 16,
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
});

export default HomeScreen;