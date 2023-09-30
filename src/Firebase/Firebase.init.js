// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDACNorMwuXL3x9QuwaIfaxknuFkRlZHXo",
  authDomain: "fir-basic-instollation.firebaseapp.com",
  projectId: "fir-basic-instollation",
  storageBucket: "fir-basic-instollation.appspot.com",
  messagingSenderId: "377198327774",
  appId: "1:377198327774:web:f7d1e6e97d3fdf25b78f4f",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth
// export default app;
