// import { initializeApp } from "firebase/app";
// import { getAuth,signInWithEmailAndPassword, createUserWithEmailAndPassword} from "firebase/auth";
// import { getFirestore } from "firebase/firestore";


import { initializeApp } from 'firebase/app';
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyARMdi0RAbXokw1b72_t3GEc64_-wvTKsk",
    authDomain: "eshop-d7e0f.firebaseapp.com",
    projectId: "eshop-d7e0f",
    storageBucket: "eshop-d7e0f.appspot.com",
    messagingSenderId: "120162908348",
    appId: "1:120162908348:web:180a1f255dad9f3b2eb8b9",
    measurementId: "G-96T10YW4ES"
  };

const firebaseApp = initializeApp(firebaseConfig);

const db = getFirestore(firebaseApp);


const auth = getAuth(firebaseApp);

export { auth ,db,signInWithEmailAndPassword, createUserWithEmailAndPassword};