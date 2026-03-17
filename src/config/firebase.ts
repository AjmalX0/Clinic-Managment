import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCSgusS1-uCtJ4uEkgm512w9QT9j0XTKTo",
  authDomain: "nothing-c0444.firebaseapp.com",
  projectId: "nothing-c0444",
  storageBucket: "nothing-c0444.firebasestorage.app",
  messagingSenderId: "956111333256",
  appId: "1:956111333256:web:35583f2a212c312e103c3d",
  measurementId: "G-S6K3Y6KBWM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);

export default app;
