import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import axios from "axios";
import { updateAuth } from "./redux/auth";
import { useDispatch } from "react-redux";

let firebaseConfig = {};
let app = {},
  auth;
function timeout(delay) {
  return new Promise((res) => setTimeout(res, delay));
}
const Fn = async () => {
  // const dispatch = useDispatch();
  const res = await axios.get(`${"http://localhost:4000" + "/apiKeys"}`);
  // await timeout(500); //for 1 sec delay

  firebaseConfig = {
    apiKey: res.data.FIREBASE_API_KEY,
    authDomain: res.data.FIREBASE_AUTH_DOMAIN,
    projectId: res.data.FIREBASE_PROJECT_ID,
    storageBucket: res.data.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: res.data.FIREBASE_MESSAGING_SENDER_ID,
    appId: res.data.FIREBASE_APP_ID,
    measurementId: res.data.FIREBASE_MEASUREMENT_ID,
  };

  // const firebaseConfig = {
  //   apiKey: "AIzaSyBkRAZOFOKgijwo-uQav60_O0DvdRp2XpQ",
  //   authDomain: "vizeye-44544.firebaseapp.com",
  //   projectId: "vizeye-44544",
  //   storageBucket: "vizeye-44544.appspot.com",
  //   messagingSenderId: "78671939730",
  //   appId: "1:78671939730:web:227a1721b5be9c7ef2fe4b",
  //   measurementId: "G-9D9QE7D84Z",
  // };
  return firebaseConfig;
  // app = initializeApp(firebaseConfig);
  // auth = getAuth(app);
  // // dispatch(updateAuth(auth));
  // // console.log("up", auth);
  // // Initialize Firebase Authentication and get a reference to the service
  // // console.log(auth);
  // return auth;
};

export { Fn };
// console.log("dwn", auth);

// export { auth };
// Initialize the FirebaseUI Widget using Firebase.
