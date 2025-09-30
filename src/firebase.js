import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAIXGJLIhu5G1Ek--fw7yOXSVMzV2Fh16w",
  authDomain: "react-somativa2.firebaseapp.com",
  projectId: "react-somativa2",
  storageBucket: "react-somativa2.appspot.com",
  messagingSenderId: "896928606245",
  appId: "1:896928606245:web:8f34fec28177b818de77cc",
  measurementId: "G-55M7FRN1JT",
};

// Inicializa Firebase
const app = initializeApp(firebaseConfig);

// Exporta instâncias
export const auth = getAuth(app);
export const db = getFirestore(app);
