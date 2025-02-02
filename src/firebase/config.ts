import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyCx3D9fIaTWsrGMZgkgv2xGjcLqTQI12Ug",
    authDomain: "tiktok-clone-12ed3.firebaseapp.com",
    projectId: "tiktok-clone-12ed3",
    storageBucket: "tiktok-clone-12ed3.firebasestorage.app",
    messagingSenderId: "179105531465",
    appId: "1:179105531465:web:f883f037d53713190e2198"
  };

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const firestore = getFirestore(app);
export const storage = getStorage(app);