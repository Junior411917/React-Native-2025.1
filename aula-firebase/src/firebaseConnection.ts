// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBzVFZ39DfkhMChAzlKzlKnxpdY9nKD-tA",
  authDomain: "aula-firebase-1ad94.firebaseapp.com",
  projectId: "aula-firebase-1ad94",
  storageBucket: "aula-firebase-1ad94.firebasestorage.app",
  messagingSenderId: "218987814077",
  appId: "1:218987814077:web:c28a97f019f74a9cb5ebd4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };
