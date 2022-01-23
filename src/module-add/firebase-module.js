// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCF9HsrXVCPvKQR0iZSI5ID-XdPX-xeg30",
  authDomain: "lostarkhub-cbe60.firebaseapp.com",
  databaseURL: "https://lostarkhub-cbe60-default-rtdb.firebaseio.com",
  projectId: "lostarkhub-cbe60",
  storageBucket: "lostarkhub-cbe60.appspot.com",
  messagingSenderId: "468170179065",
  appId: "1:468170179065:web:6a9ef8b99c4a6eef92fd28",
  measurementId: "G-Q4YLMS0D3Q"
};

// Initialize Firebase
var firebase = initializeApp(firebaseConfig);
const analytics = getAnalytics(firebase);