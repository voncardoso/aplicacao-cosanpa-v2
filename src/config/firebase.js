// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import { getFirestore } from "firebase/firestore";
import "firebase/compat/storage";


const firebaseConfig = {
  apiKey: "AIzaSyD6i5HQm3l2DGatCWk00yH9Bhpo001eZTs",
  authDomain: "e-gs-encibra.firebaseapp.com",
  projectId: "e-gs-encibra",
  storageBucket: "e-gs-encibra.appspot.com",
  messagingSenderId: "906021664063",
  appId: "1:906021664063:web:32be7bf7ecfe2dfc72cf8a",
  measurementId: "G-MLYD89FP7K",
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = firebase.storage(app);
export { db, storage };