import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = 
    {
        apiKey: "AIzaSyAhlFoC9pHVPlWon0L_eRQMIBEinsq9EQ4",
        authDomain: "clothing-crow.firebaseapp.com",
        databaseURL: "https://clothing-crow.firebaseio.com",
        projectId: "clothing-crow",
        storageBucket: "clothing-crow.appspot.com",
        messagingSenderId: "350411185073",
        appId: "1:350411185073:web:bcba6f458bc83851af7b90",
        measurementId: "G-RWYEHDS90C"
      };

      firebase.initializeApp(config);

export const auth= firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const SignInwithGoogle=()=> auth.signInWithPopup(provider);

const faceprove= new firebase.auth.FacebookAuthProvider();
faceprove.setCustomParameters({ prompt: 'select_account' });
export const SignInwithFcebook=()=> auth.signInWithPopup(faceprove);
export default firebase;