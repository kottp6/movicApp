// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD9_YsAo8cZD7u6UdK-gCMOFIvGhNifc-o",
  authDomain: "movicapp-1b43a.firebaseapp.com",
  projectId: "movicapp-1b43a",
  storageBucket: "movicapp-1b43a.firebasestorage.app",
  messagingSenderId: "183385132832",
  appId: "1:183385132832:web:c422d65a4c45c00ddbd145",
  measurementId: "G-YY6V8Q57JN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export {db};