
import { initializeApp } from "firebase/app";
import { getFirestore} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyCPzeaATU7AioHQSzta2A3RhZvquMrlP28",
  authDomain: "olx-clone-main.firebaseapp.com",
  projectId: "olx-clone-main",
  storageBucket: "olx-clone-main.appspot.com",
  messagingSenderId: "208397414140",
  appId: "1:208397414140:web:ef4e2a882933bc971ab179",
  measurementId: "G-SXKPVXR3ZX"
};

export  const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)