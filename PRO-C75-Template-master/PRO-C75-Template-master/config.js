import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyAc3gkXDUk4O_LNxoYjnF0c6cIPF2Kphc8",
  authDomain: "eride71-fb5c3.firebaseapp.com",
  projectId: "eride71-fb5c3",
  storageBucket: "eride71-fb5c3.appspot.com",
  messagingSenderId: "388566302819",
  appId: "1:388566302819:web:1a164e6bd28587f2d7b856"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
