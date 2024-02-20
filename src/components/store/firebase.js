// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

    const firebaseConfig = {
        apiKey: "AIzaSyD6Wq8Hi2OfPbhulW5ibIo3iFibThqgS-8",
        authDomain: "ecommerce-2d359.firebaseapp.com",
        projectId: "ecommerce-2d359",
        storageBucket: "ecommerce-2d359.appspot.com",
        messagingSenderId: "753361447263",
        appId: "1:753361447263:web:7cec958c13fcb6e9bc6eea",
        measurementId: "G-3Z7Q6M0SMX"
      };


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();