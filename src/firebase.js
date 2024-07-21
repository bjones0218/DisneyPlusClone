import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getDatabase } from 'firebase/database';
import { getStorage } from 'firebase/storage';
import { GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
	apiKey: "AIzaSyA4C9rQMapeQePxDsM4Utpef7VGUj9JCnU",
	authDomain: "disneyplus-clone-ce421.firebaseapp.com",
	projectId: "disneyplus-clone-ce421",
	storageBucket: "disneyplus-clone-ce421.appspot.com",
	messagingSenderId: "14831263740",
	appId: "1:14831263740:web:24ec2de9702967a4651c79",
	measurementId: "G-NTLGXGYCLQ"
  };

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);
const provider = new GoogleAuthProvider();
const storage = getStorage(firebaseApp);

export { auth, provider, storage };
export default db;
