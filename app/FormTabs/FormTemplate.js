import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Dimensions, TouchableOpacity, Text, ScrollView } from 'react-native';
import TemplateRenderer from './TemplateRenderer'; // Import the updated template renderer
const { width } = Dimensions.get('window');

const FormTemplate = () => {
  const [patientName, setPatientName] = useState('');
  const [doctorName, setDoctorName] = useState('');
  const [medication, setMedication] = useState('');
  const [followUpDate, setFollowUpDate] = useState('');
  const [notes, setNotes] = useState(''); // Additional notes field

  const handleGenerateTemplate = () => {
    // Call the TemplateRenderer with form data
    TemplateRenderer({ patientName, doctorName, medication, followUpDate, notes  });
  };

  return (
    <View style={styles.container}>
      <ScrollView>
      <Text style={styles.text}> Patient Name: </Text>
      <TextInput
        placeholder="Patient Name"
        value={patientName}
        onChangeText={setPatientName}
        style={styles.input}
      />
      <Text style={styles.text}> Doctor Name: </Text>
      <TextInput
      
        placeholder="Doctor Name"
        value={doctorName}
        onChangeText={setDoctorName}
        style={styles.input}
      />
      <Text style={styles.text}> Medications:  </Text>
      <TextInput
        placeholder="Medication"
        value={medication}
        onChangeText={setMedication}
        style={styles.input}
      />
      <Text style={styles.text}> Follow Up Date:  </Text>
      <TextInput
        placeholder="Follow-Up Date (YYYY-MM-DD)"
        value={followUpDate}
        onChangeText={setFollowUpDate}
        style={styles.input}
      />
      <Text style={styles.text}> Notes </Text>
      <TextInput
        placeholder="Additional Notes"
        value={notes}
        onChangeText={setNotes}
        style={[styles.input, styles.notesInput]} // Apply custom style for notes
        multiline={true} // Allow multiple lines
      />
      
      <TouchableOpacity style={styles.button}
        onPress={handleGenerateTemplate}
      >
        <Text style={styles.buttonText}>Generate Template</Text>
      </TouchableOpacity>
      </ScrollView>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff', // White background
    padding: 20,
  },
  input:{
    marginTop:10,
    padding:15,
    borderWidth:2,
    borderRadius:20,
    borderColor:"black",
    width:325
  },

  notesInput: {
    height: 100, // Height for notes input
    textAlignVertical: 'top', // Align text to the top
  },
  button: {
    padding: 15,
    backgroundColor: "black",
    // borderRadius: 99,
    marginTop: 50,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center', // Ensures the button is centered horizontally
    width: width>786?'30%':'50%',  // Controls the width of the button
  },
  buttonText: {
    color: "white", 
    fontSize: 16,
    fontWeight: 'bold',
  },
  text:{
    fontSize:18,
    alignSelf: 'flex-start',
    marginLeft:10,
  }
});

export default FormTemplate;
