import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

import "firebase/database";
import firebase from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyB78b7692cKJ0-XvuF475aqKngSxwm4hfs",
  authDomain: "react-chat-cf8a4.firebaseapp.com",
  databaseURL:
    "https://react-chat-cf8a4-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "react-chat-cf8a4",
  storageBucket: "react-chat-cf8a4.appspot.com",
  messagingSenderId: "275974464387",
  appId: "1:275974464387:web:468b736a0056b12d998cb6",
  measurementId: "G-122192SXVV",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
