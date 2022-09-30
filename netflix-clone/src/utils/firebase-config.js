import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyApOhmc8styQwk5hjCCVpn3OIV-Mkwb0bI",
  authDomain: "netflix-react-clone-44da8.firebaseapp.com",
  projectId: "netflix-react-clone-44da8",
  storageBucket: "netflix-react-clone-44da8.appspot.com",
  messagingSenderId: "611244466866",
  appId: "1:611244466866:web:d52bb2307a3d886a3ddfab",
  measurementId: "G-72V4QH3Y8T"
};
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const firebaseAuth = getAuth(app);