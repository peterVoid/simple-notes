import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDVr4brEX9mk4GCIQeuBjKmpOmAspzlwoQ",
  authDomain: "notes-app-97e04.firebaseapp.com",
  projectId: "notes-app-97e04",
  storageBucket: "notes-app-97e04.appspot.com",
  messagingSenderId: "989259711480",
  appId: "1:989259711480:web:6218d0a856fcc4f6e44c0d",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
