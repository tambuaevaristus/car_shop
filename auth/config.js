import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth,GoogleAuthProvider} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBV3hc_k01tc2wiXs5IERKhzSUYfHIOyEE",
  authDomain: "fir-2659b.firebaseapp.com",
  databaseURL: "https://fir-2659b-default-rtdb.firebaseio.com",
  projectId: "fir-2659b",
  storageBucket: "fir-2659b.appspot.com",
  messagingSenderId: "382933584478",
  appId: "1:382933584478:web:191b6dae3fe20380ae02cf",
  measurementId: "G-PC4RVRLFXE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const provider = new GoogleAuthProvider();
export {auth,provider};