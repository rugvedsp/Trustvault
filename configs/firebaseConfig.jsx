// Import the necessary Firebase modules
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore, collection } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
import firebase from "firebase/compat/app";
import "firebase/compat/storage"; // Only for Firebase Storage

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCSOzW4RG7D2UC5fji2TyXdXlnU_UO0X6c",
  authDomain: "predator-c6a7b.firebaseapp.com",
  projectId: "predator-c6a7b",
  storageBucket: "predator-c6a7b.appspot.com",
  messagingSenderId: "495992427799",
  appId: "1:495992427799:web:f451b4955ca96f0520d352",
  measurementId: "G-2XP2RZEECB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase services
const auth = getAuth(app);
const db = getFirestore(app); // Firestore instance

// Initialize Analytics only in the browser
let analytics;
if (typeof window !== "undefined") {
  analytics = getAnalytics(app);
}

// Ensure compatibility with older Firebase methods
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

// Export auth, db, and analytics for use in other files
export { auth, db, analytics, firebase };

// Function to access a Firestore collection
export const getCollectionRef = (collectionName) => {
  return collection(db, collectionName);
};
