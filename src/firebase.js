import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBlxJAzIn7e5AhNbkmXlNtgZ9rVJH3tWFk",
  authDomain: "linkedin-clone-52bbe.firebaseapp.com",
  projectId: "linkedin-clone-52bbe",
  storageBucket: "linkedin-clone-52bbe.appspot.com",
  messagingSenderId: "759428066164",
  appId: "1:759428066164:web:80fd7ae078ac11e40e1a21",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
export { db, auth };
