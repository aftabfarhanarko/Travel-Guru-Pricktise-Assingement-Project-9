
import { getAuth } from "firebase/auth";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDXxQ9XK43uXh85Z7YCsRCSYWwj5iTUrgk",
  authDomain: "travel-guru-2bdd9.firebaseapp.com",
  projectId: "travel-guru-2bdd9",
  storageBucket: "travel-guru-2bdd9.firebasestorage.app",
  messagingSenderId: "164067480073",
  appId: "1:164067480073:web:429905ae1fea37889a1ed8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
