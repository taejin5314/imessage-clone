import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyC5GdeVBGIBfOLUL2cn9SDV-a-K36_8qH4",
    authDomain: "imessage-clone-a8014.firebaseapp.com",
    databaseURL: "https://imessage-clone-a8014.firebaseio.com",
    projectId: "imessage-clone-a8014",
    storageBucket: "imessage-clone-a8014.appspot.com",
    messagingSenderId: "143282889862",
    appId: "1:143282889862:web:3bc84d7d26365db82a5d07",
    measurementId: "G-RGCTL76L3B"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
