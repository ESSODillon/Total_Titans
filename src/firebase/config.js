import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBI6ENoQRTZpOPcsTlJSlPhD1Jm2MOojtY",
  authDomain: "total-titans-site.firebaseapp.com",
  projectId: "total-titans-site",
  storageBucket: "total-titans-site.appspot.com",
  messagingSenderId: "1053752363320",
  appId: "1:1053752363320:web:1fcdc0dd15311ea9bad9cd",
};

// Init firebase
firebase.initializeApp(firebaseConfig);

// Init services
const projectFirestore = firebase.firestore();

export { projectFirestore };
