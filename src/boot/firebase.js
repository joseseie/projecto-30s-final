import { initializeApp } from 'firebase/app';

import { getAuth,
    signInWithPopup,
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    signOut,
} from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyARCkL2HMGWa4LDqxPRxH91MxQ_hd2eXn0",
    authDomain: "sprojectaula.firebaseapp.com",
    projectId: "sprojectaula",
    storageBucket: "sprojectaula.appspot.com",
    messagingSenderId: "283172469579",
    appId: "1:283172469579:web:103c239c55fcdd232bc6ce"
};

const app = initializeApp(firebaseConfig);

// Exportando os metodos para uso externo
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const SDKGoogleAuthProvider = GoogleAuthProvider
export const handleSignInWithPopup = signInWithPopup;
export const handleCreateUserWithEmailAndPassword = createUserWithEmailAndPassword;
export const handleSignInWithEmailAndPassword = signInWithEmailAndPassword;
export const handleOnAuthStateChanged = onAuthStateChanged;
export const handleSignOut = signOut;

