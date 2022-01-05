import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.config";

const initializeAunthentication = () => {
    initializeApp(firebaseConfig);
}

export default initializeAunthentication;