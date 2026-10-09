// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { 
  getAuth, 
  GoogleAuthProvider, 
  signInWithPopup, 
  signOut, 
  signInWithEmailAndPassword, 
  createUserWithEmailAndPassword,
  RecaptchaVerifier,
  signInWithPhoneNumber 
} from "firebase/auth";

// Your web app's Firebase configuration (apni wali keys yahan rakhna jo pehle se hain)
const firebaseConfig = {
  apiKey: "AIzaSyD-YOUR-API-KEY-HERE", 
  authDomain: "interviewiq-5f048.firebaseapp.com",
  projectId: "interviewiq-5f048",
  storageBucket: "interviewiq-5f048.appspot.com",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "1:YOUR_APP_ID:web:YOUR_HASH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

export { 
  auth, 
  googleProvider, 
  signInWithPopup, 
  signOut, 
  signInWithEmailAndPassword, 
  createUserWithEmailAndPassword,
  RecaptchaVerifier,
  signInWithPhoneNumber 
};