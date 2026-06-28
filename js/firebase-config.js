import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getFirestore, collection, addDoc, getDocs, doc, updateDoc, deleteDoc, query, where, orderBy, serverTimestamp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";
import { getAuth, signInWithEmailAndPassword, signOut, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";
import { getStorage, ref, uploadBytes, getDownloadURL, deleteObject } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-storage.js";

const firebaseConfig = {
  apiKey: "AIzaSyC_5cgfYHLSaEZbPbAmSBCSrtQu5u5DNh8",
  authDomain: "dampingku.firebaseapp.com",
  projectId: "dampingku",
  storageBucket: "dampingku.firebasestorage.app",
  messagingSenderId: "49548141904",
  appId: "1:49548141904:web:7a5560163af798854ff855"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);

export { app, db, auth, storage, collection, addDoc, getDocs, doc, updateDoc, deleteDoc, query, where, orderBy, serverTimestamp, signInWithEmailAndPassword, signOut, onAuthStateChanged, ref, uploadBytes, getDownloadURL, deleteObject };
