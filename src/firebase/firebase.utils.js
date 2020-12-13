import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {    
    apiKey: "AIzaSyC5hjz22-pBiCeCejtVIg8AJ3NHyfCqylI",
    authDomain: "react-ecommerce-d0a2b.firebaseapp.com",
    databaseURL: "https://react-ecommerce-d0a2b-default-rtdb.firebaseio.com",
    projectId: "react-ecommerce-d0a2b",
    storageBucket: "react-ecommerce-d0a2b.appspot.com",
    messagingSenderId: "713771205866",
    appId: "1:713771205866:web:72006cf2ea7bdfecd34393",
    measurementId: "G-ZZDF82RCHL"
    };

    export const createUserProfileDocument = async (userAuth, additionalData) => {
        if(!userAuth) return;

        const userRef = firestore.doc(`users/${userAuth.uid}`);

        const snapShot = await userRef.get();

        if (!snapShot.exists) {
            const { displayName, email } = userAuth;
            const createdAt = new Date();
            try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            });
            } catch (error) {
            console.log('error creating user', error.message);
            }
        }

        return userRef;
    }

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;


