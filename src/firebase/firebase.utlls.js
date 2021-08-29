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

export const createUserProfileDocument = async (userAuth, additionalData) => {  
    if (!userAuth) {
        return;
    }

    const userRef = firestore.doc(`users/${userAuth.uid}`);
    
    const snapShot = await userRef.get();

    if(!snapShot.exists) {
        const {displayName, email} = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
            
        } catch (error) {
            console.log('dumbass theres error creating user', error.message);
        }  

    }
    return userRef;
}
 
firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;     