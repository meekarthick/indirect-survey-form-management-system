// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, signInWithPhoneNumber } from "firebase/auth";
import { RecaptchaVerifier } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCR9qCAUwaMkBmAHbt7fajakcsuCKDbCmU",
  authDomain: "survey-dd023.firebaseapp.com",
  projectId: "survey-dd023",
  storageBucket: "survey-dd023.firebasestorage.app",
  messagingSenderId: "387123015716",
  appId: "1:387123015716:web:f1a5422c323217dfa2a8b1",
  measurementId: "G-B0QMP2VTZX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
auth.useDeviceLanguage();



export {auth,RecaptchaVerifier,signInWithPhoneNumber}


// const firebaseConfig = {
//     apiKey: "AIzaSyAK64sHIKduf-8JSKeuoy1BXulpJmBODNs",
//     authDomain: "indirect-survey-31550.firebaseapp.com",
//     projectId: "indirect-survey-31550",
//     storageBucket: "indirect-survey-31550.firebasestorage.app",
//     messagingSenderId: "248906136759",
//     appId: "1:248906136759:web:9b6b30adb3d6bafe7b2132",
//     measurementId: "G-DMTYJB7CR4"
//   };