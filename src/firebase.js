// import firebase from "firebase/compat/app";
// import "firebase/compat/auth";
// import "firebase/compat/firestore";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore/lite";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDI5oqOcJ_RQyMbuXfKLf6HNGMb7ueWxsI",
  authDomain: "clone-ed940.firebaseapp.com",
  projectId: "clone-ed940",
  storageBucket: "clone-ed940.appspot.com",
  messagingSenderId: "577830642593",
  appId: "1:577830642593:web:c08a9e7096494a188661e0",
  measurementId: "G-R3HBFRSHG2",
};

const firebaseApp = initializeApp(firebaseConfig);

const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);

export { db, auth };
