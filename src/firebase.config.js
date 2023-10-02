// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAj5hAoS2IeYlQPn3SQpB54as7KiisM-xM",
  authDomain: "fir-auth-context-86ef3.firebaseapp.com",
  projectId: "fir-auth-context-86ef3",
  storageBucket: "fir-auth-context-86ef3.appspot.com",
  messagingSenderId: "246178641156",
  appId: "1:246178641156:web:5e36497c1cb7f44373cc51"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;