import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
//import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBmvmBUT58NQol8qFRz55YLym381xHCgR8",
  authDomain: "keepclone-17087.firebaseapp.com",
  projectId: "keepclone-17087",
  storageBucket: "keepclone-17087.appspot.com", 
  messagingSenderId: "1000247406694",
  appId: "1:1000247406694:web:d22762c0836736136efda7",
  measurementId: "G-1HMP9V87S5"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
//const analytics = getAnalytics(app);