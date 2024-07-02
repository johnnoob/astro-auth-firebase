// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCVWesmPhReYdMdyEJjnZ9rhoqrZC2NsRs",
  authDomain: "astro-firebase-auth-8fe73.firebaseapp.com",
  projectId: "astro-firebase-auth-8fe73",
  storageBucket: "astro-firebase-auth-8fe73.appspot.com",
  messagingSenderId: "879440963789",
  appId: "1:879440963789:web:8b3f801ccb410a2b1d6184",
  measurementId: "G-YHXK0YZW7N",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const projectAuth = getAuth(app);
