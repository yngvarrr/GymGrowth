// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, getDocs  } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAVhytU0no2RIXrfLN1GAZh4pemh8Ak4Jw",
  authDomain: "gymgrowth-9a522.firebaseapp.com",
  projectId: "gymgrowth-9a522",
  storageBucket: "gymgrowth-9a522.appspot.com",
  messagingSenderId: "753999407831",
  appId: "1:753999407831:web:55b18ec9872b6e35015e92"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export {app, db, getFirestore, collection, addDoc, getDocs }