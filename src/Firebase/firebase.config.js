// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
import { getAuth } from "firebase/auth";

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDqCAMQaIxN7fL0Sv7jNYma8cuISRFLCNU",
  authDomain: "prime-places.firebaseapp.com",
  projectId: "prime-places",
  storageBucket: "prime-places.appspot.com",
  messagingSenderId: "165394597354",
  appId: "1:165394597354:web:a23216611a0b7972115e93"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
