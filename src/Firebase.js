// Import the functions you need from the SDKs you need
import firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyC4i71e-FleVQht1CJm01q2MY7HbFA8kr0",
  authDomain: "portfolio-65001.firebaseapp.com",
  projectId: "portfolio-65001",
  storageBucket: "portfolio-65001.appspot.com",
  messagingSenderId: "594807933922",
  appId: "1:594807933922:web:ca6f4b852b5f58bb6147bb",
  measurementId: "G-D4ZER3W4B0"
});

// Initialize Firebase
const db = firebaseApp.firestore();

export { db };