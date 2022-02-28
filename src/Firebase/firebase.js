import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore/lite";

const firebaseConfig = {
  apiKey: "AIzaSyAfSC2E5ZFcsaUOUbHCmOKqEx7t1cL_Shc",
  authDomain: "resume-builder-804fc.firebaseapp.com",
  projectId: "resume-builder-804fc",
  storageBucket: "resume-builder-804fc.appspot.com",
  messagingSenderId: "227426913816",
  appId: "1:227426913816:web:c97032e77d7ee7549e3d6d",
  measurementId: "G-G3CFZJT2CK",
};

// const analytics = getAnalytics(firebaseApp);
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
