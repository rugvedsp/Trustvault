import { View, Text, Image, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import React from 'react';
import { useRouter } from 'expo-router';

const { width } = Dimensions.get('window');

export default function Login() {

    const router =useRouter();


  return (
    <View style={styles.screen}>
      <Image 
        source={require("./../assets/images/logo.png")}
        style={styles.image}
      />

      <View style={styles.container}>
        <Text style={styles.title}>Trusted Document Manager</Text>
        <Text style={styles.description}>
          Discover a new era of security—store, manage, and safeguard all your documents effortlessly in one place with TrustVault. Seamless access, ultimate protection and peace of mind.
        </Text>

        {/* Button */}
        <TouchableOpacity style={styles.button}
            onPress={()=>router.push('auth/sign-in')}>
                
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>


      </View>
      
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,  // Ensures the screen takes up the entire space
    backgroundColor: '#f5f5f5',
    marginTop:60,
    alignItems:'center',
  },
  image: {
    width: width>786?'60%':"100%",
    height: 350,
    paddingLeft:"10",
    paddingRight:"10",
    resizeMode: "cover",
  },
  container: {
    backgroundColor: 'white',
    // marginTop: -20,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    width: width>786?'50%':"100%",
    borderColor: 'black', 
    borderWidth: 3,
    padding: 15,
    flex: 1,  // Allow the container to take up remaining space
  },
  title: {
    fontSize: 21,
    textAlign: "center",
    fontWeight: 'bold',
  },
  description: {
    marginTop: 40,
    marginLeft: 40,
    marginRight: 40,
    textAlign: "center",
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
  }
});
