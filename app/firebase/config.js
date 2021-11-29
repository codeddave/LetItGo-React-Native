import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBG1v1N7gIZpituETQNmaNZNlR2mcVb6vc",
  authDomain: "let-it-go-4aadc.firebaseapp.com",
  projectId: "let-it-go-4aadc",
  storageBucket: "let-it-go-4aadc.appspot.com",
  messagingSenderId: "35301466242",
  appId: "1:35301466242:web:99847be98d3bf90c9c149b",
};

const app = firebase.initializeApp(firebaseConfig);
