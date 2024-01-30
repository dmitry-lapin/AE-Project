// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCZwPw_AxNppUOR7X6v4RJW8GgAWEM6uUM",
  authDomain: "scenarioconstructor.firebaseapp.com",
  databaseURL: "https://scenarioconstructor-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "scenarioconstructor",
  storageBucket: "scenarioconstructor.appspot.com",
  messagingSenderId: "810469062243",
  appId: "1:810469062243:web:8b380c974ea43be2666a56",
  measurementId: "G-3JH0C0CH71"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const database = getDatabase(app);
const analytics = getAnalytics(app);