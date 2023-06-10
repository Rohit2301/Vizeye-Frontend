import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBkRAZOFOKgijwo-uQav60_O0DvdRp2XpQ",
  authDomain: "vizeye-44544.firebaseapp.com",
  projectId: "vizeye-44544",
  storageBucket: "vizeye-44544.appspot.com",
  messagingSenderId: "78671939730",
  appId: "1:78671939730:web:227a1721b5be9c7ef2fe4b",
  measurementId: "G-9D9QE7D84Z",
};

const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

export { auth };
// Initialize the FirebaseUI Widget using Firebase.
