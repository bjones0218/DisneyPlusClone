const firebaseConfig = {
	apiKey: "AIzaSyA4C9rQMapeQePxDsM4Utpef7VGUj9JCnU",
	authDomain: "disneyplus-clone-ce421.firebaseapp.com",
	projectId: "disneyplus-clone-ce421",
	storageBucket: "disneyplus-clone-ce421.appspot.com",
	messagingSenderId: "14831263740",
	appId: "1:14831263740:web:24ec2de9702967a4651c79",
	measurementId: "G-NTLGXGYCLQ"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;