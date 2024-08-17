import React from 'react';
import { View, Text } from 'react-native';

function ScheduleAppointmentScreen({ route }) {
  const { amount, duration, selectedImages, selectedDocuments } = route.params;

  return (
    <View>
      <Text>Schedule your appointment</Text>
      {/* Render appointment scheduling form using the received parameters */}
    </View>
  );
}

export default ScheduleAppointmentScreen;
