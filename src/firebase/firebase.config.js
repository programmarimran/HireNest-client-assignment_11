// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCc6MQsn3kQSmmQXpn_lznqpQBetFuYhL0",
  authDomain: "hire-nest-e8488.firebaseapp.com",
  projectId: "hire-nest-e8488",
  storageBucket: "hire-nest-e8488.firebasestorage.app",
  messagingSenderId: "994047917102",
  appId: "1:994047917102:web:e2d313caf0c4b18b3f73bf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
