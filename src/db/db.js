import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCMcEf-oCSFOBNBSZkv_utP-UgRzbMr7MI",
  authDomain: "volksworld-coder.firebaseapp.com",
  projectId: "volksworld-coder",
  storageBucket: "volksworld-coder.appspot.com",
  messagingSenderId: "714151326082",
  appId: "1:714151326082:web:0dac988d6551be10c71f9b"
};

// Initialize Firebase
initializeApp(firebaseConfig);

const db = getFirestore ()

export default db