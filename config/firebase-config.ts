import firebase from "firebase/app";
import "firebase/analytics";
import "firebase/auth";
import "firebase/firestore";
import "firebase/functions";

const firebaseConfig = {
  apiKey: "AIzaSyA2Iwsx5CIQOOxme71aP3mMkn4-RCccl80",
  authDomain: "sedentarysavior.firebaseapp.com",
  projectId: "sedentarysavior",
  storageBucket: "sedentarysavior.appspot.com",
  messagingSenderId: "595566022690",
  appId: "1:595566022690:web:df7dfa670800867f29fa7b",
  measurementId: "G-JYRB8YCJBW",
};

let functions, auth, firestore;

if (typeof window !== "undefined" && !firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
  firebase.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION);
  (window as any).firebase = firebase;
  functions = firebase.functions();
  auth = firebase.auth();
  firestore = firebase.firestore;
}
export { firebase, functions, auth, firestore };
