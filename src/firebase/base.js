import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/app";


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBPKd-HcaDfZbKyHqirg3vIog8eSZpozq4",
  authDomain: "sleep-tracker-d5edb.firebaseapp.com",
  databaseURL: "https://sleep-tracker-d5edb-default-rtdb.firebaseio.com",
  projectId: "sleep-tracker-d5edb",
  storageBucket: "sleep-tracker-d5edb.appspot.com",
  messagingSenderId: "179068541931",
  appId: "1:179068541931:web:8b339a477fc71ab0db97ae",
  measurementId: "G-W43SV3BMWS"
};



const app = firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default app;