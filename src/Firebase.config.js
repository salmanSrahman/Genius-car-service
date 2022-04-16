import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAUo6Z3IzkuEbZr1FF2rfywqyYn1cy0SLE",
  authDomain: "genius-car-services-2668f.firebaseapp.com",
  projectId: "genius-car-services-2668f",
  storageBucket: "genius-car-services-2668f.appspot.com",
  messagingSenderId: "787243029249",
  appId: "1:787243029249:web:2cabe46da3b387c05ac100",
  measurementId: "G-3C4PRST72Z"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
