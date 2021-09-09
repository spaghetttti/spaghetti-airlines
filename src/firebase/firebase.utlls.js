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
            console.log('Theres error creating user: ', error.message);
        }  

    }
    return userRef;
}

export const addCollectionAndDocuments = async (
    collectionKey,
    objectsToAdd
  ) => {
    const collectionRef = firestore.collection(collectionKey);
  
    const batch = firestore.batch();
    objectsToAdd.forEach((obj) => {
      const newDocRef = collectionRef.doc();
      batch.set(newDocRef, obj);
    });
  
    return await batch.commit();
  };
 
firebase.initializeApp(config); //kinda weird it's sitting here 

export const convertCollectionsSnapshotToMap = (collections) => {
    const trasformedCollection = collections.docs.map(doc => {
        // const singleFlight = doc.data();
        // return {
        //     singleFlight
        // }
        return doc.data()
    })
    
    console.log('trasformedCollection:',trasformedCollection);
    return trasformedCollection;
}

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;     