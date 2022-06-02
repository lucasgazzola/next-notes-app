// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAG14K4Vgspj0f7OtbN6NGbC4oEkrlGaBo",
  authDomain: "fb-next-notes-app.firebaseapp.com",
  projectId: "fb-next-notes-app",
  storageBucket: "fb-next-notes-app.appspot.com",
  messagingSenderId: "716722050883",
  appId: "1:716722050883:web:f69dcf8336b643fae601f6"
};

// Initialize Firebase
const fb = initializeApp(firebaseConfig);
const db = getFirestore(fb);

export { db };