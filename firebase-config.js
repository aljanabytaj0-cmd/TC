import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyCbAdssxVWFJp2KCy_ZJhrNlW_CB0fUVOA",
  authDomain: "talyan-fad6f.firebaseapp.com",
  projectId: "talyan-fad6f",
  storageBucket: "talyan-fad6f.firebasestorage.app",
  messagingSenderId: "1043413564562",
  appId: "1:1043413564562:web:db4fd444c0c2fe3654ba4b"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export { firebaseConfig };
