import { View, Text, Image, TouchableOpacity, StyleSheet, Modal, FlatList, ScrollView, Dimensions } from 'react-native';
import React, {useEffect} from 'react'
import Ionicons from '@expo/vector-icons/Ionicons';
import { useNavigation } from 'expo-router';
import { useRouter } from 'expo-router';
import { useState } from 'react';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import AntDesign from '@expo/vector-icons/AntDesign';
import Healthcare from './../DomainTabs/HealthCare'

const { width } = Dimensions.get('window');

export default function HorizontalSection() {

  const router = useRouter();
  const navigation = useNavigation();

  useEffect(()=>{
    navigation.setOptions({
        headerShown:false
    })
},[])

  return (

    //this is the add mode section.
    
        <View style={{
          padding:20,
          
        }}>
            <Text style={{
              fontSize:20,
              fontWeight:'bold',
              alignSelf:width>786?'center':0,
              // fontSize:width>786? 22:0,
            }}> Add Document</Text>

            {/* rectangle 1  */}
          <View style={styles.container}> 

            <TouchableOpacity style={styles.rectangle} onPress={()=>router.push('./../DomainTabs/HealthCare')}>
              <FontAwesome5 style={styles.icon} name="hospital-alt" size={24} color="black" />
              <Text style={styles.text}>Health Care </Text>
            </TouchableOpacity>

            {/* rectangle 2  */}
            <TouchableOpacity style={styles.rectangle} onPress={()=>router.push('./../DomainTabs/Finance')}>
            <FontAwesome5 style={styles.icon} name="money-bill" size={24} color="black" />
              <Text style={styles.text}>Financial</Text>
            </TouchableOpacity>

            {/* rectangle 3  */}
            <TouchableOpacity style={styles.rectangle}>
            <Ionicons style={styles.icon} name="school" size={24} color="black" />
              <Text style={styles.text}>Education</Text>
            </TouchableOpacity>

            {/* rectangle 4  */}
            <TouchableOpacity style={styles.rectangle}>
            <FontAwesome style={styles.icon} name="bank" size={24} color="black" />
              <Text style={styles.text}>Legal</Text>
            </TouchableOpacity>

            {/* rectangle 5  */}
            <TouchableOpacity style={styles.rectangle}>
            <AntDesign style={styles.icon} name="lock" size={24} color="black" />
              <Text style={styles.text}>Government</Text>
            </TouchableOpacity>

            {/* rectangle 6  */}
            <TouchableOpacity style={styles.rectangle}>
            <AntDesign style={styles.icon} name="printer" size={24} color="black" />
              <Text style={styles.text}>Electronics</Text>
            </TouchableOpacity>

             {/* rectangle 7  */}
            <TouchableOpacity style={styles.rectangle}>
            <AntDesign style={styles.icon} name="tag" size={24} color="black" />
              <Text style={styles.text}>Miscellaneous</Text>
            </TouchableOpacity>

          </View>
          

          <Text style={{
            fontSize:20,
            marginTop:20,
            marginBottom:20,
            fontWeight:'bold'
          }}>Documents on the go</Text>

          {/* circle icon imaging */}

          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>

            {/* CIRCLE1 */}
            <View style={styles.circleContainer}>
            <TouchableOpacity style={styles.circle}>
               <Image  
                style={styles.image} 
                source={require('./../../assets/images/adhaar.png')} 
                />
            </TouchableOpacity>
            <Text style={styles.circleText}>Adhaar</Text>
            </View>


             {/* CIRCLE2 */}
             <View style={styles.circleContainer}>
            <TouchableOpacity style={styles.circle}>
               <Image  
                style={styles.image} 
                source={require('./../../assets/images/maharashtraBoard.png')} 
                />
            </TouchableOpacity>
            <Text style={styles.circleText}>Marksheet</Text>
            </View>


          </ScrollView>
            
        </View>
        
  )
}

const styles = StyleSheet.create({
  container:{
    padding:10,
    alignItems:'center',
    // margin:50
  },

  rectangle:{
    padding:15,
    marginTop:20,
    textAlign:'center',
    flexDirection:'row',
    borderRadius:13,
    borderColor:'black',
    borderWidth:1.5,
    backgroundColor:'white',
    width: width>786? '50%': '100%',
    height: width>786? 80: 'auto',
    alignContent:'center',
    alignItems:'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    // height:70
    
  },
  icon:{
    margin:5,
    fontSize:30
  },

  text:{
    margin:5,
    fontSize:22,
    paddingLeft: width>786? 90:40,
    textAlign:'center'
  },

  image:{
    width:70,
    height:70,
    borderRadius:40,
    padding:10,
    margin:10
  },

  circle:{
    width: 70,
    height: 70,
    backgroundColor: '#f7f7f7', // Adjust color
    borderRadius: 40, // Half the width and height for circular shape
    justifyContent: 'center',
    borderColor:'black',
    borderWidth:2,
    alignItems: 'center',

    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 4,

  },

  circleContainer:{
    margin:10,
    textAlign:'center'

  },

  circleText:{
    margin:10,
    fontSize:15,
    textAlign:'center'
  }

})