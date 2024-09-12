// firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDlnbXXFi5hYjxMPkvcpf2YAwzEEMf1NIQ",
  authDomain: "geekmatics-98a52.firebaseapp.com",
  projectId: "geekmatics-98a52",
  storageBucket: "geekmatics-98a52.appspot.com",
  messagingSenderId: "850935222420",
  appId: "1:850935222420:web:ae759947f0a75bedd0a481",
  measurementId: "G-PLMY5TS7E7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore(app);

export { db };
