import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {    
    apiKey: "AIzaSyC3-BibDZjg__vplKDBJBAI3JIMz9aOd-s",
    authDomain: "ecommerce-16c70.firebaseapp.com",
    projectId: "ecommerce-16c70",
    storageBucket: "ecommerce-16c70.appspot.com",
    messagingSenderId: "977619731959",
    appId: "1:977619731959:web:a6b0625bedca7259d1daf2",
    measurementId: "G-PFRD5F5K1P"
    };

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;


