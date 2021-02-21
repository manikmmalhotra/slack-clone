import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBOx-o-DaBs9RxePsFw4gcstEeHbskJU-I",
  authDomain: "slack-clone-8a2d1.firebaseapp.com",
  projectId: "slack-clone-8a2d1",
  storageBucket: "slack-clone-8a2d1.appspot.com",
  messagingSenderId: "370394536472",
  appId: "1:370394536472:web:d65c42426294f8919fc16d",
  measurementId: "G-BYTWVBEJCS",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider, db };
