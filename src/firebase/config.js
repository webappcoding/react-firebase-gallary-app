import * as firebase from "firebase/app";
import "firebase/storage";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAsdI0jgSDMPp9NPxDVQB-KFyLT-JhAQH8",
  authDomain: "react-gallary-app.firebaseapp.com",
  databaseURL: "https://react-gallary-app.firebaseio.com",
  projectId: "react-gallary-app",
  storageBucket: "react-gallary-app.appspot.com",
  messagingSenderId: "585172462928",
  appId: "1:585172462928:web:eb582b55d47ac2f85c5055",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const storage = firebase.storage();
const db = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { storage, db, timestamp };
