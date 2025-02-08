import React from "react";
import { View, Text, TextInput, TouchableOpacity, ScrollView, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

// Dummy Data
const doctors = [
  { name: "Dr. John Smith", contact: "+1234567890", specialty: "Cardiologist", available: "Mon-Fri" },
  { name: "Dr. Emily Brown", contact: "+9876543210", specialty: "Dentist", available: "Tue-Thu" },
  { name: "Dr. Lisa Green", contact: "+9876543210", specialty: "Neurologist", available: "Wed-Sat" },
];

// **Doctor Management Screen**
const DoctorMgmt = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Doctor Management</Text>
        <TouchableOpacity style={styles.logoutButton}>
          <Text style={styles.logoutText}>Logout</Text>
        </TouchableOpacity>
      </View>

      <TextInput placeholder="Search doctors" style={styles.searchBox} />

      <View style={styles.filterSortContainer}>
        <TouchableOpacity style={styles.sortButton}>
          <Text style={styles.buttonText}>Sort</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.sortButton}>
          <Text style={styles.buttonText}>Filter</Text>
        </TouchableOpacity>
      </View>

      <ScrollView>
        {doctors.map((doctor, index) => (
          <View key={index} style={styles.doctorCard}>
            <Text style={styles.doctorName}>{doctor.name}</Text>
            <Text style={styles.doctorInfo}>Contact: {doctor.contact}</Text>
            <Text style={styles.doctorInfo}>Specialty: {doctor.specialty}</Text>
            <Text style={styles.doctorInfo}>Available: {doctor.available}</Text>

            <View style={styles.buttonRow}>
              <TouchableOpacity style={styles.prescriptionButton}>
                <Text style={styles.buttonText}>Prescription</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.receiptButton}>
                <Text style={styles.receiptText}>Receipts</Text>
              </TouchableOpacity>
            </View>
          </View>
        ))}
      </ScrollView>

      <View style={styles.bottomNav}>
        <TouchableOpacity onPress={() => navigation.navigate("ReceptionistPage")}>
          <Ionicons name="home" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Ionicons name="person" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Ionicons name="settings" size={24} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

// **Styles**
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    padding: 16,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "black",
  },
  logoutButton: {
    backgroundColor: "black",
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 50,
  },
  logoutText: {
    color: "white",
  },
  searchBox: {
    backgroundColor: "#f0f0f0",
    padding: 12,
    borderRadius: 50,
    marginBottom: 16,
  },
  filterSortContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 16,
  },
  sortButton: {
    backgroundColor: "red",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 50,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
  },
  doctorCard: {
    backgroundColor: "black",
    padding: 16,
    borderRadius: 12,
    marginBottom: 16,
  },
  doctorName: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
  doctorInfo: {
    color: "#ccc",
  },
  buttonRow: {
    flexDirection: "row",
    marginTop: 10,
  },
  prescriptionButton: {
    backgroundColor: "red",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 50,
    marginRight: 10,
  },
  receiptButton: {
    backgroundColor: "white",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: "gray",
  },
  receiptText: {
    color: "black",
  },
  bottomNav: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 16,
    borderTopWidth: 1,
    borderColor: "#ccc",
  },
});

export default DoctorMgmt;