// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyASOkCw1wF4CgWQrpWx2kEJVUEedbMnKG4",
  authDomain: "ava3-62c94.firebaseapp.com",
  projectId: "ava3-62c94",
  storageBucket: "ava3-62c94.appspot.com",
  messagingSenderId: "956655216973",
  appId: "1:956655216973:web:643ff258fe087e96ccef04"
};

// Initialize Firebase
export function initDb() {
  const app = initializeApp(firebaseConfig);
  return app
}

