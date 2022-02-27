import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore/lite";
import { getAuth, onAuthStateChanged } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAfSC2E5ZFcsaUOUbHCmOKqEx7t1cL_Shc",
  authDomain: "resume-builder-804fc.firebaseapp.com",
  projectId: "resume-builder-804fc",
  storageBucket: "resume-builder-804fc.appspot.com",
  messagingSenderId: "227426913816",
  appId: "1:227426913816:web:c97032e77d7ee7549e3d6d",
  measurementId: "G-G3CFZJT2CK",
};

// const firebaseApp = initializeApp(firebaseConfig);
// const analytics = getAnalytics(firebaseApp);

// const db = firebase.initializeApp(firebaseConfig).firestore();

// const auth = firebaseApp.auth();
//

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { db };
export default auth;
