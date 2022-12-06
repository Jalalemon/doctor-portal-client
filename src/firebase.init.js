// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyABbxeDNPt2yHN0kBZo42POEZIPSREnR6c",
  authDomain: "doctors-portal-bda3a.firebaseapp.com",
  projectId: "doctors-portal-bda3a",
  storageBucket: "doctors-portal-bda3a.appspot.com",
  messagingSenderId: "226973819348",
  appId: "1:226973819348:web:face608a867f5fe0a0b641",

};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app