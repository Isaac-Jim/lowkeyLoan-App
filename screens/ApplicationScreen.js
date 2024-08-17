import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, Button, ScrollView, Image } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';
import * as DocumentPicker from 'expo-document-picker';

function ApplicationScreen({ navigation }) {
  // State to store form values and file uploads
  const [amount, setAmount] = useState('');
  const [duration, setDuration] = useState('30 days');
  const [showScheduledAppointment, setShowScheduledAppointment] = useState(false);
  const [selectedImages, setSelectedImages] = useState([]);
  const [selectedDocuments, setSelectedDocuments] = useState([]);

  // Dummy date for the appointment date
  const appointmentDate = "15th September 2024";

  // Handle image selection
  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setSelectedImages([...selectedImages, result.uri]);
    }
  };

  // Handle document selection
  const pickDocument = async () => {
    const result = await DocumentPicker.getDocumentAsync({
      type: '*/*',
    });

    if (result.type === 'success') {
      setSelectedDocuments([...selectedDocuments, result.uri]);
    }
  };
  const handleSubmit = () => {
    // Navigate to the ScheduleAppointmentScreen
    navigation.navigate('ScheduleAppointmentScreen', { amount, duration, selectedImages, selectedDocuments });
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.heading}>How much do you need?</Text>
      <TextInput
        style={styles.input}
        placeholder="Type amount here"
        value={amount}
        onChangeText={setAmount}
        keyboardType="numeric"
        returnKeyType="done"
        clearButtonMode="while-editing"
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
          onPress={() => setShowScheduledAppointment(!showScheduledAppointment)}
        >
          <Text style={styles.dropdownText}>Scheduled Appointment Date</Text>
          <FontAwesome name={showScheduledAppointment ? "chevron-down" : "chevron-right"} size={24} color="black" />
        </TouchableOpacity>
        {showScheduledAppointment && (
          <View style={styles.appointmentDateContainer}>
            <Text style={styles.appointmentDateText}>Appointment Date: {appointmentDate}</Text>
          </View>
        )}
      </View>

      {/* File upload section */}
      <View style={styles.uploadContainer}>
        <Text style={styles.uploadHeading}>Upload Documents for Collateral</Text>
        <TouchableOpacity style={styles.uploadButton} onPress={pickImage}>
          <Text style={styles.uploadButtonText}>Upload Image</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.uploadButton} onPress={pickDocument}>
          <Text style={styles.uploadButtonText}>Upload Document</Text>
        </TouchableOpacity>

        <View style={styles.fileList}>
          {selectedImages.map((uri, index) => (
            <Image key={index} source={{ uri }} style={styles.imagePreview} />
          ))}
          {selectedDocuments.map((uri, index) => (
            <Text key={index} style={styles.documentPreview}>Document {index + 1}</Text>
          ))}
        </View>
      </View>

      <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
          <Text style={styles.submitButtonText}>Schedule Appointment </Text>
        </TouchableOpacity>

      <View style={styles.navigationButtons}>
        <Button title="Home" onPress={() => navigation.navigate('HomeScreen')} />
        <Button title="Loan" onPress={() => navigation.navigate('ApplicationScreen')} color="purple" />
        <Button title="Chat" onPress={() => navigation.navigate('HomeSupport')} />
        <Button title="Profile" onPress={() => navigation.navigate('ProfileScreen')} />
      </View>
    </ScrollView>
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
  appointmentDateContainer: {
    padding: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
    backgroundColor: '#f9f9f9',
  },
  appointmentDateText: {
    fontSize: 16,
    color: '#333',
  },
  uploadContainer: {
    marginBottom: 20,
  },
  uploadHeading: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  uploadButton: {
    backgroundColor: '#007bff',
    padding: 15,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    marginBottom: 10,
  },
  uploadButtonText: {
    color: '#fff',
    fontSize: 16,
  },
  fileList: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  imagePreview: {
    width: 100,
    height: 100,
    margin: 5,
    borderRadius: 5,
  },
  documentPreview: {
    margin: 5,
    fontSize: 16,
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
