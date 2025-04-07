import { getApp, getApps, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBXslS_g7uvO7A0ZG9fcfeARWNC_csYW24",
  authDomain: "ai-interview-7731c.firebaseapp.com",
  projectId: "ai-interview-7731c",
  storageBucket: "ai-interview-7731c.firebasestorage.app",
  messagingSenderId: "910082934028",
  appId: "1:910082934028:web:c45d65b8f27fe444553529",
  measurementId: "G-H6KD3E5940"
};

// Initialize Firebase
const app = !getApps.length ?  initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);
