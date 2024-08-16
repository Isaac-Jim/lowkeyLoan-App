import React from 'react';
import { SafeAreaView, StyleSheet, StatusBar } from 'react-native';
import HomeSupport from './screens/HomeSupport'; // Adjust the path to where your HomeSupport component is located

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <HomeSupport />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
