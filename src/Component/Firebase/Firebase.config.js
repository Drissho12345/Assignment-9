// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCOXUP-XURDVizzYR6bs7xU-04jAyocPIQ",
  authDomain: "industrial-project-bf741.firebaseapp.com",
  projectId: "industrial-project-bf741",
  storageBucket: "industrial-project-bf741.appspot.com",
  messagingSenderId: "1006184241611",
  appId: "1:1006184241611:web:db15411ab80918fd487e4e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;