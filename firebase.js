// import {getAuth,GoogleAuthProvider} from "firebase/auth";
import { getAuth } from "@firebase/auth";
import { initializeApp } from "firebase/app";
// import {getFirestore, collection, getDocs} from "firebase/firestore/lite"
import { getFirestore } from "firebase/firestore";

// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBgdaPiDoD4AmZK7YUknTu-8IRFJhuWI9Q",
  authDomain: "topbids-6d07e.firebaseapp.com",
  projectId: "topbids-6d07e",
  storageBucket: "topbids-6d07e.appspot.com",
  messagingSenderId: "981137723243",
  appId: "1:981137723243:web:eadd4ae7defc918284462e"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app);
// const provider = new GoogleAuthProvider();
// export {auth,provider};