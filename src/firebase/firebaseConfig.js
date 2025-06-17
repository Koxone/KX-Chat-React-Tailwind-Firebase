import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBZvCzd5ur-K3Smm0gvd1Rz9VpK-FsTv3E",
  authDomain: "kx-chat.firebaseapp.com",
  projectId: "kx-chat",
  storageBucket: "kx-chat.firebasestorage.app",
  messagingSenderId: "428462689613",
  appId: "1:428462689613:web:c59b5af5044d5235213b04"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
