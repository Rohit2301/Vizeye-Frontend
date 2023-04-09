import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import axios from "axios";

let firebaseConfig = {};
let app = {},
  auth = {};

axios.get(`${process.env.REACT_APP_PORT + "/apiKeys"}`).then((res) => {
  firebaseConfig = {
    apiKey: res.data.FIREBASE_API_KEY,
    authDomain: res.data.FIREBASE_AUTH_DOMAIN,
    projectId: res.data.FIREBASE_PROJECT_ID,
    storageBucket: res.data.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: res.data.FIREBASE_MESSAGING_SENDER_ID,
    appId: res.data.FIREBASE_APP_ID,
    measurementId: res.data.FIREBASE_MEASUREMENT_ID,
  };
  app = initializeApp(firebaseConfig);
  auth = getAuth(app);
  console.log("bw", auth);
});
// Initialize Firebase Authentication and get a reference to the service
console.log(auth);
export { auth };
// Initialize the FirebaseUI Widget using Firebase.
