import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/database";
import "firebase/auth";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAnSR8PLJ2Omd020NGuMM-atIaCNy3z8_8",
  authDomain: "gettogether-app-d57f0.firebaseapp.com",
  databaseURL: "https://gettogether-app-d57f0.firebaseio.com",
  projectId: "gettogether-app-d57f0",
  storageBucket: "gettogether-app-d57f0.appspot.com",
  messagingSenderId: "488451491280",
  appId: "1:488451491280:web:186da4a01bdcefecd365d5",
};

firebase.initializeApp(firebaseConfig);
firebase.firestore();

export default firebase;
