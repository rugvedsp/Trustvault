import { View, Text, Image, TouchableOpacity, StyleSheet, Modal, FlatList, ScrollView } from 'react-native';
import React, {useEffect} from 'react'
import Ionicons from '@expo/vector-icons/Ionicons';
import { useNavigation } from 'expo-router';
import { useRouter } from 'expo-router';
import { useState } from 'react';
import {auth} from './../../configs/firebaseConfig';

// onPress={()=>router.push('auth/sign-in')}

export default function Header() {

    const [user,setUser] = useState(null); 

    useEffect(() => {
        setUser(auth.currentUser);
    },[]);

    //const userInitial = "A"; // Replace with dynamic initial

    const router =useRouter();

    const navigation = useNavigation();
    useEffect(()=>{
        navigation.setOptions({
            headerShown:false
        })
    },[])


  return (
    <View style={{
        // padding:25,
        paddingTop:35,
        backgroundColor: '#f4f4f4', 
        // height:100%
     }}>

        {/* LOGO AND USER ICON */}
      
        <View style={styles.header} >
        <Image 
        source={require("./../../assets/images/zoomedLogo.png")}
        style={styles.image}
      />

      <View style={styles.userProfile}>
                <TouchableOpacity style={styles.userIcon}  onPress={() => router.replace("/tabs/Profile")}>
                    <Text style={styles.userInitial}>Z</Text> 
                </TouchableOpacity>
            </View>

        </View>
    </View>
  )
}

const styles = StyleSheet.create({

    header:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10,
        backgroundColor: '#f4f4f4',
        // elevation: 4,
        // height:100,
    },

    image:{
            height: 50, // Adjust based on your logo size
            width: 200,
    },

    userProfile: {
        flexDirection: 'row',
        alignItems: 'center',
      },

    userIcon: {
    width: 45,
    height: 45,
    backgroundColor: '#f7f7f7', // Adjust color
    borderRadius: 40, // Half the width and height for circular shape
    justifyContent: 'center',
    borderColor:'black',
    borderWidth:2,
    alignItems: 'center',
    },  

    userInitial: {
        fontSize: 21, // Adjust font size
    },

    // modal styling

    modalOverlay: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent background
    },

    modalContent: {
        width:150,
        backgroundColor: '#fff',
        position: 'absolute',
        top: 100,
        right: 10,
        padding: 20,
        borderRadius: 10,
        elevation: 5,
    },

    dropdownItem: {
        padding: 10,
    },

    dropdownItemText: {
        fontSize: 16,
    },


})