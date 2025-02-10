import { View, Text, TextInput, StyleSheet, TouchableOpacity, Alert, ActivityIndicator } from 'react-native';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'expo-router';
import { useNavigation } from '@react-navigation/native';
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth, db } from '../../../configs/firebaseConfig';
import { getDocs, query, collection, where } from 'firebase/firestore';

export default function SignIn() {
  const router = useRouter();
  const navigation = useNavigation();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, []);

  const onSignIn = async () => {
    if (!email || !password) {
      setErrorMessage("Email and password are required");
      return;
    }

    setLoading(true);
    setErrorMessage("");

    try {
      const trimmedEmail = email.trim();
      const trimmedPassword = password.trim();
      console.log("Logging in with:", trimmedEmail, trimmedPassword); // Debugging
      // Firebase Authentication
      const userCredential = await signInWithEmailAndPassword(auth, trimmedEmail, trimmedPassword);
      const user = userCredential.user;

      if (!user) {
        setErrorMessage("Authentication failed.");
        setLoading(false);
        return;
      }

      let userRole = "";

      // Check in the "receptionist" collection
      const receptionistQuery = query(collection(db, "receptionist"), where("email", "==", trimmedEmail));
      const receptionistSnapshot = await getDocs(receptionistQuery);

      if (!receptionistSnapshot.empty) {
        userRole = "Receptionist";
      }

      // Check in the "patient" collection if not found in receptionist
      if (!userRole) {
        const patientQuery = query(collection(db, "patient"), where("email", "==", trimmedEmail));
        const patientSnapshot = await getDocs(patientQuery);

        if (!patientSnapshot.empty) {
          userRole = "Patient";
        }
      }

      if (!userRole) {
        setErrorMessage("User role not found in database.");
        setLoading(false);
        return;
      }

      // Navigate based on role
      if (userRole === "Receptionist") {
        router.replace('Receptionist/ReceptionistPage');
      } else {
        router.replace('tabs/MainPage');
      }

    } catch (error) {
      console.error("Error signing in:", error);

      if (error.code === 'auth/invalid-credential') {
        setErrorMessage("Invalid email or password. Please check your credentials.");
      } else if (error.code === 'auth/user-not-found') {
        setErrorMessage("No user found with this email.");
      } else if (error.code === 'auth/wrong-password') {
        setErrorMessage("Incorrect password.");
      } else {
        setErrorMessage("An error occurred. Please try again.");
      }
    }

    setLoading(false);
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

      {/* Error Message */}
      {errorMessage ? (
        <Text style={styles.errorText}>{errorMessage}</Text>
      ) : null}

      {/* Sign-In Button */}
      <TouchableOpacity onPress={onSignIn} style={styles.signInButton} disabled={loading}>
        {loading ? (
          <ActivityIndicator size="small" color="white" />
        ) : (
          <Text style={styles.signInButtonText}>Sign In</Text>
        )}
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
  errorText: {
    color: 'red',
    marginTop: 10,
    fontSize: 14,
    textAlign: 'center',
  },
});
