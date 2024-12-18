import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";

import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBoDLqIAYI5WV8alowE1pJSjKUvbeRzIZI",
    authDomain: "olx-clone-d2add.firebaseapp.com",
    projectId: "olx-clone-d2add",
    storageBucket: "olx-clone-d2add.firebasestorage.app",
    messagingSenderId: "718454198533",
    appId: "1:718454198533:web:e885b951f02d906622676c"
  };

const firebase = initializeApp(firebaseConfig);
// export default firebase; 

const auth = getAuth(firebase);
const firestore = getFirestore(firebase)

export { firebase, auth, firestore };