import firebase from "firebase/app";
import "firebase/database";
import "firebase/storage";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDiMig4yTg7fozQ5itXqq3xkL-az3SNX-s",
  authDomain: "disney-clone-3e496.firebaseapp.com",
  projectId: "disney-clone-3e496",
  storageBucket: "disney-clone-3e496.appspot.com",
  messagingSenderId: "805612797828",
  appId: "1:805612797828:web:8f61559ac22c84d827a7d1",
  measurementId: "G-FRK9584MLS",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
export const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
