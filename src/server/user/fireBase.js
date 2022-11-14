import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTHDOMAIN_KEY,
    projectId: process.env.REACT_APP_FIREBASE_PROJECTID_KEY,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_KEY,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_KEY,
    appId: process.env.REACT_APP_FIREBASE_APPID_KEY
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);