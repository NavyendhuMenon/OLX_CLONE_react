import { initializeApp } from "firebase/app";

import { getAuth, setPersistence, browserLocalPersistence } from "firebase/auth";

import { getFirestore } from "firebase/firestore";

import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyBoDLqIAYI5WV8alowE1pJSjKUvbeRzIZI",
    authDomain: "olx-clone-d2add.firebaseapp.com",
    projectId: "olx-clone-d2add",
    storageBucket: "olx-clone-d2add.firebasestorage.app",
    messagingSenderId: "718454198533",
    appId: "1:718454198533:web:e885b951f02d906622676c"
  };

  const firebase = initializeApp(firebaseConfig);

  const auth = getAuth(firebase);
  setPersistence(auth, browserLocalPersistence).catch((error) => {
    console.error("Error setting persistence:", error.message);
  });
  
  const firestore = getFirestore(firebase);
  const storage = getStorage(firebase)
  
  export { firebase, auth, firestore ,storage};