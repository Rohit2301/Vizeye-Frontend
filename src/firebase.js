import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import axios from "axios";

let firebaseConfig = {};
let app = {},
  auth = {};
// FIREBASE_API_KEY = "AIzaSyBkRAZOFOKgijwo-uQav60_O0DvdRp2XpQ";
// FIREBASE_AUTH_DOMAIN = "vizeye-44544.firebaseapp.com";
// FIREBASE_PROJECT_ID = "vizeye-44544";
// FIREBASE_STORAGE_BUCKET = "vizeye-44544.appspot.com";
// FIREBASE_MESSAGING_SENDER_ID = "78671939730";
// FIREBASE_APP_ID = "1:78671939730:web:227a1721b5be9c7ef2fe4b";
// FIREBASE_MEASUREMENT_ID = "G-9D9QE7D84Z";
firebaseConfig = {
  apiKey: "AIzaSyBkRAZOFOKgijwo-uQav60_O0DvdRp2XpQ",
  authDomain: "vizeye-44544.firebaseapp.com",
  projectId: "vizeye-44544",
  storageBucket: "vizeye-44544.appspot.com",
  messagingSenderId: "78671939730",
  appId: "1:78671939730:web:227a1721b5be9c7ef2fe4b",
  measurementId: "G-9D9QE7D84Z",
};
app = initializeApp(firebaseConfig);
auth = getAuth(app);
// console.log("bw", auth, firebaseConfig);
// axios.get(`${process.env.REACT_APP_PORT + "/apiKeys"}`).then((res) => {});
// Initialize Firebase Authentication and get a reference to the service
export { auth };
// Initialize the FirebaseUI Widget using Firebase.
