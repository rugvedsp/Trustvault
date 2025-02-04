import React, {useEffect} from 'react'
import { View, FlatList, StyleSheet, Dimensions, Text, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import DocumentCard from './DocumentCard'; // Assuming this is the reusable DocumentCard component
import { useNavigation } from 'expo-router';
import { useRouter } from 'expo-router';
import { useState } from 'react';
import Ionicons from '@expo/vector-icons/Ionicons';
import Prescription from './../../assets/images/prescription.png';
import VaccineReport from './../../assets/images/vaccineReport.png';
import UploadMediaFile from '../auth/Upload'

const { width } = Dimensions.get('window');

export default function HealthCare() {

    const router =useRouter();
    const navigation = useNavigation();

    useEffect(()=>{
        navigation.setOptions({
            headerShown:false
        })
    },[])


  const [documents, setDocuments] = useState([
    { id: '1', name: 'Vaccination Report', date: '12-01-2023', image: './../../assets/images/vaccineReport.png' },
    { id: '2', name: 'Prescription - Dr. Smith', date: '22-03-2023', image: './../../assets/images/prescription3.png' },
    { id: '3', name: 'Health Checkup Report', date: '10-05-2023', image: './../../assets/images/prescription2.png' },
  ]);

  const [showDropdown, setShowDropdown] = useState(false); // State to handle dropdown visibility

  // Function to handle the selection of Scan or Upload
  // const handleAddDocument = (option) => {
  //   setShowDropdown(false);
  //   if (option === 'scan') {
  //     console.log('User selected Scan Document');
  //     // Add logic for scanning the document here
  //   } else if (option === 'upload') {
  //     console.log('User selected Upload Document');
  //     // Add logic for uploading the document here
  //   }
  // };

  // Function to dynamically calculate number of columns based on screen width
  const getNumColumns = () => {
    if (width > 786) {
      return 4;
    } 
    else {
      return 2;
    }
  };

  const renderItem = ({ item }) => (
    <DocumentCard image={item.image} name={item.name} date={item.date} />
  );

  return (
    <View style={styles.container}>

<TouchableOpacity 
        style={{
          alignSelf:'flex-start',
          marginTop:40,
          marginRight:20,
        }}
        onPress={()=>router.back()}><Ionicons name="arrow-back-sharp" size={24} color="black" /></TouchableOpacity>
      <Text style={styles.heading}>Health Care Documents</Text>

      <FlatList
        data={documents}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.documentList}
        numColumns={getNumColumns()} // Dynamically set number of columns
      />

      {/* Add Document Button */}
      <TouchableOpacity 
        style={styles.addButton}
        onPress={() => setShowDropdown(!showDropdown)} // Toggle the dropdown
      >
        <Text style={styles.addButtonText}>+ Add Document</Text>
      </TouchableOpacity>

      {/* Dropdown for Scan or Upload */}
      {showDropdown && (
        <View style={styles.dropdown}>
          <TouchableOpacity
            style={styles.dropdownItem}
            onPress={() => router.push('./../auth/UploadDoc')}

          >
            <Icon name="camera" size={20} color="black" />
            <Text style={styles.dropdownText}>Scan Document</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.dropdownItem}
            onPress={() => router.push('./../auth/Upload')}
          >
            <Icon name="upload" size={20} color="black" />
            <Text style={styles.dropdownText}>Upload Document</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.dropdownItem}
            onPress={()=>router.push('./../FormTabs/FormTemplate')}
          >
            <Icon name="upload" size={20} color="black" />
            <Text style={styles.dropdownText}>Write form</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems:'center',
    backgroundColor: '#f8f8f8',
    // paddingHorizontal: width * 0.05, // Adjusting padding based on screen width
    // paddingVertical: 20,
    // overflow:'visible',
    margin: width>786?60:10,
    marginBottom: width>786?0:10,
  },
  heading: {
    fontSize: width > 600 ? 30 : 24, // Adjust heading size based on screen size
    fontWeight: 'bold',
    marginBottom: 20,
    marginTop: width>786?10:40,
  },
  documentList: {
    justifyContent: 'space-between', // Ensures space between cards
  },
  addButton: {
    marginTop: 20,
    padding: 15,
    margin:width>786?30:15,
    backgroundColor: 'black',
    borderRadius: 8,
    alignItems: 'center',
    width:300,
  },
  addButtonText: {
    color: '#fff',
    fontSize: 18,
  },
  dropdown: {
    marginTop: 10,
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 15,
    margin:5,
    width:300,
    elevation: 5, // Shadow for dropdown
  },
  dropdownItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
    height:60,
  },
  dropdownText: {
    fontSize: 18,
    marginLeft: 10,
    padding:5,
  },
});
