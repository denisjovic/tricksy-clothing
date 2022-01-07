import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
    apiKey: "AIzaSyBDM5VLAhgIfYQG-xFY3lkePdNTAOzJcbM",
    authDomain: "tricksy-db.firebaseapp.com",
    projectId: "tricksy-db",
    storageBucket: "tricksy-db.appspot.com",
    messagingSenderId: "392542274665",
    appId: "1:392542274665:web:b8157ed93cce4469c18ef8",
    measurementId: "G-J550D3KE01"
}

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({propmt: 'select_account'})
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase