import { View, Text, Image, TouchableOpacity, StyleSheet, Modal, FlatList, ScrollView } from 'react-native';
import React, {useEffect} from 'react'
import Ionicons from '@expo/vector-icons/Ionicons';
import { useNavigation } from 'expo-router';
import { useRouter } from 'expo-router';
import { useState } from 'react';

export default function DueSection() {
  return (

    <View>

      <Text style={{
            margin:20,
            fontSize:19,
            fontWeight:'bold'
        }}>Due Documents</Text>

        {/* horizontal scrollable section */}
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>

            {/* card1 */}

            <TouchableOpacity style={styles.card}>
                <Image 
                style={styles.image} 
                source={require('./../../assets/images/adanilogo.png')} 
                />
                <Text style={styles.title}> Electric Bill </Text>
                <Text style={styles.description}> due in 3 days </Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.card}>
                <Image 
                style={styles.image} 
                source={require('./../../assets/images/croma.png')} 
                />
                <Text style={styles.title}> AC Servicing </Text>
                <Text style={styles.description}> due next week </Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.card}>
                <Image 
                style={styles.image} 
                source={require('./../../assets/images/adanilogo.png')} 
                />
                <Text style={styles.title}> Office Bill </Text>
                <Text style={styles.description}> due next week </Text>
            </TouchableOpacity>

        </ScrollView> 

    </View>
  )
}

const styles = StyleSheet.create({

    card:{
        backgroundColor: 'white',
        padding: 20,
        margin:20,
        borderRadius: 10,
        marginRight: 10,
        width: 200,
        height: 170,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        
      },

      title:{
        fontWeight: 'bold',
        color: '#333',
        fontSize:17
        
      },

      description: {
        color: '#333',
        fontSize:17
      },

      image: {
        padding:10,
        width: 70,
        height: 70,
        borderRadius: 8, // Adjust this if you want rounded corners
        marginRight: 15, // Space between image and text
      },    
})
