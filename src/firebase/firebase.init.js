// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAdrG33Q8UJWI88mfTo93fcD0kQZ1VbJ0U",
    authDomain: "coffee-store-142f9.firebaseapp.com",
    projectId: "coffee-store-142f9",
    storageBucket: "coffee-store-142f9.firebasestorage.app",
    messagingSenderId: "216543929638",
    appId: "1:216543929638:web:20c4eebc6d0e7b062d0de7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);