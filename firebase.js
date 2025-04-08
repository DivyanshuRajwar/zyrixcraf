// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBGIZp_ZEzSbQAaD0ZDN297HmHcxXJAJ6U",
  authDomain: "skater-f3cf5.firebaseapp.com",
  projectId: "skater-f3cf5",
  storageBucket: "skater-f3cf5.firebasestorage.app",
  messagingSenderId: "79265341718",
  appId: "1:79265341718:web:1d333fce9873de035b3037",
  measurementId: "G-91EFG2EP1T"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
