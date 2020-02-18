import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyBktYyeGhRYfypgDkkntyGGNS39wvBymac',
  authDomain: 'crwn-clothing-cdd47.firebaseapp.com',
  databaseURL: 'https://crwn-clothing-cdd47.firebaseio.com',
  projectId: 'crwn-clothing-cdd47',
  storageBucket: 'crwn-clothing-cdd47.appspot.com',
  messagingSenderId: '373999536255',
  appId: '1:373999536255:web:cf1eb98602cf117bc7174a',
  measurementId: 'G-NSLJ61QMWP'
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
