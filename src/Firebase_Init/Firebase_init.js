// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCGHH7Wspe-PwGQWSG1xBl5IIzBEoiDbLY",
  authDomain: "assingment-09-b60dc.firebaseapp.com",
  projectId: "assingment-09-b60dc",
  storageBucket: "assingment-09-b60dc.firebasestorage.app",
  messagingSenderId: "654535106427",
  appId: "1:654535106427:web:1b768b1d435d36555ae7de"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)