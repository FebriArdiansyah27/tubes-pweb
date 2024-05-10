// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyCHoFOKnPTRleYhejTxolUneswT_anE5Ys",
  authDomain: "smallershop-1a1c3.firebaseapp.com",
  projectId: "smallershop-1a1c3",
  storageBucket: "smallershop-1a1c3.appspot.com",
  messagingSenderId: "194191002589",
  appId: "1:194191002589:web:06c0b67d6a948867504434",
  measurementId: "G-JSCKGQL3G9",
};

export const app = initializeApp(firebaseConfig);

export const  auth = getAuth();

export const db = getFirestore(app);