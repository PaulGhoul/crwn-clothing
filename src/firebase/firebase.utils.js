import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
    apiKey: "AIzaSyCXwxRuCkcfk0Mo5IQhE_G4-tC6STld-Vc",
    authDomain: "crwn-db-2c387.firebaseapp.com",
    projectId: "crwn-db-2c387",
    storageBucket: "crwn-db-2c387.appspot.com",
    messagingSenderId: "981088881754",
    appId: "1:981088881754:web:baf12daaf224912d0e1c63",
    measurementId: "G-VJQXSDV5ZQ"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: 'select_account'});

  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;