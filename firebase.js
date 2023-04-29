type="module"
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-analytics.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyArFBObo6XlWYdLD2M9uF_ubWgFmGiOjtE",
    authDomain: "treasure-hunt-8b588.firebaseapp.com",
    projectId: "treasure-hunt-8b588",
    storageBucket: "treasure-hunt-8b588.appspot.com",
    messagingSenderId: "715583041636",
    appId: "1:715583041636:web:fa51268e04ed348c9d2f71",
    measurementId: "G-69YWWRH8V0"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth();
console.log(app);