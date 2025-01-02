// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore} from 'firebase/firestore';
import { getAuth }  from 'firebase/auth'
import { getFunctions } from "firebase/functions";

const firebaseConfig = {
  apiKey: "AIzaSyBJA3OU9j2hD3eCcuBK1ufK9KIs7xkijqM",
  authDomain: "redsky-web.firebaseapp.com",
  projectId: "redsky-web",
  storageBucket: "redsky-web.appspot.com",
  messagingSenderId: "503303012281",
  appId: "1:503303012281:web:fbadea13c15e03b9c48068",
  measurementId: "G-75QR2Q2EBR",
};

const app=initializeApp(firebaseConfig);
 const db = getFirestore(app);
 const auth = getAuth(app)
 const functions= getFunctions(app)
export{ db, auth, functions}

