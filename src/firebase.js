import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDvXkNz9J8VugwH2RO7_HJQx0xXZ88bsKM",
  authDomain: "my-note-1d6de.firebaseapp.com",
  projectId: "my-note-1d6de",
  storageBucket: "my-note-1d6de.appspot.com",
  messagingSenderId: "730966214950",
  appId: "1:730966214950:web:3fc6fcc8b91a4bdb03d9e7"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export const noteCollection = collection(db, "notes");