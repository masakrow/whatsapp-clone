import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCo8ntUEoTqRdePPFBRNRLOa703fzMyngI",
  authDomain: "whatsapp-clone-b86d0.firebaseapp.com",
  databaseURL: "https://whatsapp-clone-b86d0.firebaseio.com",
  projectId: "whatsapp-clone-b86d0",
  storageBucket: "whatsapp-clone-b86d0.appspot.com",
  messagingSenderId: "190746877811",
  appId: "1:190746877811:web:568e0c0d1cc30ba8076f06",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
