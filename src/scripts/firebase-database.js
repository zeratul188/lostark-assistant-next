import { initializeApp } from 'firebase/app';

const firebaseConfig = {
    apiKey: "AIzaSyCF9HsrXVCPvKQR0iZSI5ID-XdPX-xeg30",
    authDomain: "lostarkhub-cbe60.firebaseapp.com",
    databaseURL: "https://lostarkhub-cbe60-default-rtdb.firebaseio.com",
    storageBucket: "lostarkhub-cbe60.appspot.com"
};

var firebase = initializeApp(firebaseConfig);
var database = firebase.getDatabase();

export default database;