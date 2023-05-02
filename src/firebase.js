// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import firebase from "firebase/compat/app";

import { getAnalytics } from "firebase/analytics";
// Required for side-effects
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDOgBljFKPgmHOkBqqAcjIRaCAhdyZ2Ago",
  authDomain: "absolute-media-application.firebaseapp.com",
  projectId: "absolute-media-application",
  storageBucket: "absolute-media-application.appspot.com",
  messagingSenderId: "1058865519909",
  appId: "1:1058865519909:web:fc8aa6a7ca43bd06a20ecc",
  measurementId: "G-ZTQD3W4NF1"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export default app;