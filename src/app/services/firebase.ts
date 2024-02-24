// Importacoes do Firebase-----------------------
import { initializeApp } from 'firebase/app'

// import {
//   getAuth,
//   onAuthStateChanged,
//   GoogleAuthProvider,
//   signInWithPopup,
//   signOut,
// } from 'firebase/auth'

import { getFirestore } from 'firebase/firestore'

import {
  getStorage,
  // ref,
  // uploadBytesResumable,
  // getDownloadURL,
  // uploadString,
  // list,
} from 'firebase/storage'

import {} from 'firebase/database'
// Termina aqui importacoes do firebase-----------

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_REACT_APP_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_REACT_APP_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_MESSAGING_SENDER,
  appId: process.env.NEXT_PUBLIC_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_MEASUREMENT_ID,
}

const firebaseApp = initializeApp(firebaseConfig)
export const firestoreDB = getFirestore(firebaseApp)
export const storage = getStorage(firebaseApp)

// Fim importacao do Firebase -----------------------------
