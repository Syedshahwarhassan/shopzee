// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC5F6Ep5d6RHmi0OelCiPZpwfLeop7huz4",
  authDomain: "shopzee-5e3dc.firebaseapp.com",
  projectId: "shopzee-5e3dc",
  storageBucket: "shopzee-5e3dc.appspot.com",
  messagingSenderId: "662381272743",
  appId: "1:662381272743:web:1ef45f2fd208bbb9a98582",
  measurementId: "G-39H9BJZQ17"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);