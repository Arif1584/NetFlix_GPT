// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBzcvf_dLpEwrGst7sD59lPTfCreQ1mg9Q",
  authDomain: "netflix-gpt2-dc774.firebaseapp.com",
  projectId: "netflix-gpt2-dc774",
  storageBucket: "netflix-gpt2-dc774.appspot.com",
  messagingSenderId: "674011798319",
  appId: "1:674011798319:web:013047ed3f66f513d31fda",
  measurementId: "G-00KCKQWGB7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();