// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// import {getAuth, GoogleAuthProvider} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC2fhfaOPvjcihhpFqnbM3hXuLyYDSqkiY",
  authDomain: "wagging-tails-5334e.firebaseapp.com",
  projectId: "wagging-tails-5334e",
  storageBucket: "wagging-tails-5334e.firebasestorage.app",
  messagingSenderId: "169082466009",
  appId: "1:169082466009:web:41a23fefe9f4d9c16458c8",
  measurementId: "G-LT4FZQPYBV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);

export default app;
