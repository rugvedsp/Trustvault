import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import Svg, { Path } from 'react-native-svg';

const PatientTab = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Receptionist</Text>
        <View style={styles.headerIcons}>
          {/* Profile Icon */}
          <TouchableOpacity style={styles.circle}>
            <Svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
              <Path
                d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"
                fill="#000000"
              />
            </Svg>
          </TouchableOpacity>
          {/* Settings Icon */}
          <TouchableOpacity style={styles.circle}>
            <Svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
              <Path
                d="M19.43 12.98c.04-.32.07-.66.07-1s-.03-.68-.07-1l2.11-1.65c.19-.15.24-.42.12-.64l-2-3.46c-.11-.22-.37-.3-.59-.22l-2.49 1a8.12 8.12 0 0 0-1.74-1.01l-.38-2.65A.488.488 0 0 0 14 2h-4c-.24 0-.45.17-.49.4l-.38 2.65c-.63.25-1.2.57-1.74 1.01l-2.49-1a.484.484 0 0 0-.59.22l-2 3.46c-.12.22-.07.49.12.64L4.57 11c-.04.32-.07.66-.07 1s.03.68.07 1l-2.11 1.65c-.19.15-.24.42-.12.64l2 3.46c.11.22.37.3.59.22l2.49-1c.54.44 1.11.76 1.74 1.01l.38 2.65c.04.23.25.4.49.4h4c.24 0 .45-.17.49-.4l.38-2.65c.63-.25 1.2-.57 1.74-1.01l2.49 1c.22.08.48 0 .59-.22l2-3.46c.12-.22.07-.49-.12-.64l-2.11-1.65zM12 15c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z"
                fill="#000000"
              />
            </Svg>
          </TouchableOpacity>
        </View>
      </View>
      {/* Content */}
      <View style={styles.content}>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Today's Appointments</Text>
          {/* Appointments */}
          <View style={styles.appointment}>
            <Text style={styles.appointmentName}>John Smith</Text>
            <Text style={styles.appointmentTime}>10:00 AM - Consultation</Text>
          </View>
          <View style={styles.appointment}>
            <Text style={styles.appointmentName}>Emily Johnson</Text>
            <Text style={styles.appointmentTime}>11:30 AM - Follow-up</Text>
          </View>
          <View style={styles.appointment}>
            <Text style={styles.appointmentName}>Michael Brown</Text>
            <Text style={styles.appointmentTime}>1:00 PM - Check-up</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff', // Black theme background
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 15,
    backgroundColor: '#1e1e1e', // Darker header background
  },
  headerText: {
    color: '#e0e0e0', // Light text for dark theme
    fontSize: 20,
    fontWeight: 'bold',
  },
  headerIcons: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  circle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#ffffff', // White background for the circle
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 15, // Spacing between icons
  },
  content: {
    padding: 20,
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#000000', // Light text
  },
  appointment: {
    padding: 10,
    backgroundColor: '#1e1e1e', // Card background to match the dark theme
    borderRadius: 5,
    marginBottom: 10,
  },
  appointmentName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#ffffff', // White text for better contrast
  },
  appointmentTime: {
    fontSize: 14,
    color: '#b0b0b0', // Slightly lighter gray for secondary text
  },
});

export default PatientTab;
