// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCGmKkJKJKsu94CtpREdtgT2FfY3oBYL3E",
  authDomain: "payp-29064.firebaseapp.com",
  projectId: "payp-29064",
  storageBucket: "payp-29064.firebasestorage.app",
  messagingSenderId: "766158104176",
  appId: "1:766158104176:web:282f4d6b3789bf576ab6b5",
  measurementId: "G-0SMT5ES5P6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);