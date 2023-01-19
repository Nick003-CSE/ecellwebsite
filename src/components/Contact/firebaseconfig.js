// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from '@firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyA18q4cWqZcHObwn4AwtuFiPGYTejL8uH0",
  authDomain: "ecellcontactform.firebaseapp.com",
  projectId: "ecellcontactform",
  storageBucket: "ecellcontactform.appspot.com",
  messagingSenderId: "391190782391",
  appId: "1:391190782391:web:869a243d7e9693d2a9c832"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
