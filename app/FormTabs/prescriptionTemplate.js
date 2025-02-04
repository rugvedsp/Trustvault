import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const PrescriptionTemplate = ({ patientName, age, doctorName, medicine }) => {
  return (
    
    <View style={styles.prescriptionContainer}>
    {/* <PrescriptionForm onSubmit={handlePrescriptionSubmit} /> */}
      <Text style={styles.title}>Doctor's Prescription</Text>
      <Text style={styles.label}>Patient Name: <Text style={styles.value}>{patientName}</Text></Text>
      <Text style={styles.label}>Age: <Text style={styles.value}>{age}</Text></Text>
      <Text style={styles.label}>Doctor Name: <Text style={styles.value}>{doctorName}</Text></Text>
      <Text style={styles.label}>Prescribed Medicine: <Text style={styles.value}>{medicine}</Text></Text>
    </View>
  );
};

const styles = StyleSheet.create({
  prescriptionContainer: {
    padding: 20,
    borderWidth: 2,
    borderColor: '#000',
    margin: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    marginVertical: 5,
  },
  value: {
    fontWeight: '400',
  },
});

export default PrescriptionTemplate;
