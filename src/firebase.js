import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAmLh53wv34oJLdbQ6gv_e5xqVDCcvOFHY",
  authDomain: "chat-bd1ff.firebaseapp.com",
  projectId: "chat-bd1ff",
  storageBucket: "chat-bd1ff.appspot.com",
  messagingSenderId: "874012594020",
  appId: "1:874012594020:web:202f7ec483025fd38a7471"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()
