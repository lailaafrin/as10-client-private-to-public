import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyC14F5UKkVq_fI3rr-OTWaMFjoN4qNZ0Hs",
    authDomain: "mongo-as10.firebaseapp.com",
    projectId: "mongo-as10",
    storageBucket: "mongo-as10.appspot.com",
    messagingSenderId: "729907293114",
    appId: "1:729907293114:web:2df8633328edfa349c0b83"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);