// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBk1PtHd43LR-UnuuGyJ7f1c2JlOn7YCo4",
  authDomain: "realtor-696b6.firebaseapp.com",
  projectId: "realtor-696b6",
  storageBucket: "realtor-696b6.appspot.com",
  messagingSenderId: "918876415528",
  appId: "1:918876415528:web:86439acd21aaa6b4d1371d"
};

// Initialize Firebase
initializeApp(firebaseConfig);

export const db= getFirestore()