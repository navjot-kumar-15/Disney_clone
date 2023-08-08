import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/database";
import "firebase/compat/firestore";
import "firebase/compat/storage";
import Data from "./DisneyPlusJsonData.json";

const firebaseConfig = {
  apiKey: "AIzaSyB-sjQzuoNhan_AP9u5HqGNStYM9PzEm1Q",
  authDomain: "disneyplus-efefc.firebaseapp.com",
  projectId: "disneyplus-efefc",
  storageBucket: "disneyplus-efefc.appspot.com",
  messagingSenderId: "162473969545",
  appId: "1:162473969545:web:c1c5629492c08926468358",
  measurementId: "G-DV2DD700Z4",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
 