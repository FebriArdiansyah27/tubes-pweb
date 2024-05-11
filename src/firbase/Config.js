import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyBusuIqtHUjDGbj54gJaDLNGBeXba2C0fA",
  authDomain: "shinshop-464ff.firebaseapp.com",
  projectId: "shinshop-464ff",
  storageBucket: "shinshop-464ff.appspot.com",
  messagingSenderId: "803072927598",
  appId: "1:803072927598:web:16d1568bf98feac7cf037f",
  measurementId: "G-5NEQNWDSG3",
};

export const app = initializeApp(firebaseConfig);

export const auth = getAuth();

export const db = getFirestore(app);
