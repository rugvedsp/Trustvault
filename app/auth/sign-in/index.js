import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import React, { useEffect, useState } from 'react';
import { useNavigation } from 'expo-router';
import { useRouter } from 'expo-router';
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from './../../../configs/firebaseConfig';

export default function SignIn() {
  const router = useRouter();
  const navigation = useNavigation();

  const [email, setEmail] = useState(''); // Declare useState at the top level
  const [password, setPassword] = useState('');

  useEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  const onSignIn = () => {
    if (!email || !password) {
      console.log("All fields are required");
      return;
    }

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);

        // Navigate to MainPage or desired route after successful sign-in
        router.push('tabs/MainPage');
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage, errorCode);

        if (errorCode === 'auth/invalid-credential') {
          console.log("Invalid Credentials");
        }
      });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Let's Sign You In!</Text>
      <Text style={styles.heading}>Welcome back!</Text>

      {/* EMAIL */}
      <View>
        <Text style={styles.label}>Email:</Text>
        <TextInput
          onChangeText={(value) => setEmail(value)}
          value={email}
          keyboardType="email-address"
          autoCapitalize="none"
          style={styles.input}
          placeholder="Enter Email"
        />
      </View>

      {/* PASSWORD */}
      <View>
        <Text style={styles.label}>Password:</Text>
        <TextInput
          onChangeText={(value) => setPassword(value)}
          value={password}
          secureTextEntry={true}
          style={styles.input}
          placeholder="Enter Password"
        />
      </View>

      {/* Sign-In Button */}
      <TouchableOpacity onPress={onSignIn} style={styles.signInButton}>
        <Text style={styles.signInButtonText}>Sign In</Text>
      </TouchableOpacity>

      {/* Create Account Button */}
      <TouchableOpacity onPress={() => router.replace('auth/sign-up')} style={styles.createAccountButton}>
        <Text style={styles.createAccountText}>Create Account</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 25,
    paddingTop: 60,
    marginTop: 20,
    alignItems: 'center',
    backgroundColor: "white",
    height: "100%",
  },
  heading: {
    fontSize: 30,
    fontWeight: "bold",
  },
  label: {
    marginTop: 15,
    fontSize: 16,
  },
  input: {
    marginTop: 10,
    padding: 15,
    borderWidth: 1.5,
    borderRadius: 20,
    borderColor: "black",
    width: 325,
  },
  signInButton: {
    padding: 15,
    backgroundColor: "black",
    borderRadius: 15,
    marginTop: 30,
    width: 325,
  },
  signInButtonText: {
    color: "white",
    textAlign: "center",
  },
  createAccountButton: {
    padding: 15,
    borderRadius: 15,
    marginTop: 30,
  },
  createAccountText: {
    color: "blue",
    textAlign: "center",
  },
});
