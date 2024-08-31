// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-a8cd6.firebaseapp.com",
  projectId: "mern-estate-a8cd6",
  storageBucket: "mern-estate-a8cd6.appspot.com",
  messagingSenderId: "522159051227",
  appId: "1:522159051227:web:21f060c60725b92c1157fe"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

