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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapshot = await userRef.get();

  if (!snapshot.exists) {
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
      console.error('Error creating user', error);
    }
  }

  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
