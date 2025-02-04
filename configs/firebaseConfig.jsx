// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
import firebase from 'firebase/compat/app';
import 'firebase/compat/storage';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDMxVHUQWv_GSbzIKGT9g8Dd6Pip_tD2_U",
  authDomain: "app01-2a625.firebaseapp.com",
  projectId: "app01-2a625",
  storageBucket: "app01-2a625.appspot.com",
  messagingSenderId: "68655334814",
  appId: "1:68655334814:web:4ee2f4e599bb6f019bc28f",
  measurementId: "G-FBH0ZHF6CF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig); // Ensure to initialize the app here
const auth = getAuth(app); // Use the initialized app instance for authentication

// Initialize analytics only in the browser
let analytics;
if (typeof window !== "undefined") {
  analytics = getAnalytics(app);
}

// Ensure compatibility with older Firebase methods
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

// Export the auth and firebase instances
export { auth, firebase, analytics };
