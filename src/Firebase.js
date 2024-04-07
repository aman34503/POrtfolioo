import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; // Import only the Firestore module

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyC4i71e-FleVQht1CJm01q2MY7HbFA8kr0",
  authDomain: "portfolio-65001.firebaseapp.com",
  projectId: "portfolio-65001",
  storageBucket: "portfolio-65001.appspot.com",
  messagingSenderId: "594807933922",
  appId: "1:594807933922:web:ca6f4b852b5f58bb6147bb",
  measurementId: "G-D4ZER3W4B0"
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(); // Get Firestore instance

export { db };
