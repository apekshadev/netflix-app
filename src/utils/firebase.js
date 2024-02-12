// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAQvJcbuxT1q8ZSbA1JswnUBBrkSdo8t30",
  authDomain: "netflix-gpt-6f458.firebaseapp.com",
  projectId: "netflix-gpt-6f458",
  storageBucket: "netflix-gpt-6f458.appspot.com",
  messagingSenderId: "459105572060",
  appId: "1:459105572060:web:5f41b41652057310121019",
  measurementId: "G-EEWBBG5RZ0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();