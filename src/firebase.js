import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyDChISSmwSNU_R4Z-jiPi0bp8eUNHTDI24',
  authDomain: 'facebook-clone-4cc0e.firebaseapp.com',
  projectId: 'facebook-clone-4cc0e',
  storageBucket: 'facebook-clone-4cc0e.appspot.com',
  messagingSenderId: '207809233565',
  appId: '1:207809233565:web:1477daea57f25a3731ca74',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
