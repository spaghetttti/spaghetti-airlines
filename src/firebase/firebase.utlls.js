import firebase from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCSTjSaDCQXibskdvv7fZ7mDBJXNAJxGzE",
    authDomain: "spaghetti-airlines.firebaseapp.com",
    projectId: "spaghetti-airlines",
    storageBucket: "spaghetti-airlines.appspot.com",
    messagingSenderId: "1053741059561",
    appId: "1:1053741059561:web:3f2a6da061148ddbb54f78",
    measurementId: "G-RRY21FTJCS"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;    