// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAGSnWBk0ah5-epxV_U4wAbK4DxntozEG8",
  authDomain: "portafolio-62c22.firebaseapp.com",
  projectId: "portafolio-62c22",
  storageBucket: "portafolio-62c22.appspot.com",
  messagingSenderId: "650061464673",
  appId: "1:650061464673:web:da1947001f65f962895620",
  measurementId: "G-LVVY8YSWXL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
