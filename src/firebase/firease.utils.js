import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'
import 'firebase/compat/auth'

const firebaseConfig = {
	apiKey: "AIzaSyB4nziTY4qoCOuz3npAkMl627L-V5ZTRbQ",
	authDomain: "crwn-clothing-a3cff.firebaseapp.com",
	projectId: "crwn-clothing-a3cff",
	storageBucket: "crwn-clothing-a3cff.appspot.com",
	messagingSenderId: "450184828352",
	appId: "1:450184828352:web:0df79361a86c012c75a425",
	measurementId: "G-4RPHWLC6MB"
};

const app = firebase.initializeApp(firebaseConfig)

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({
	prompt: 'select_account'
})


export const auth = firebase.auth()
export const signInWithGoogle = () => auth.signInWithPopup(provider)
export const firestore = firebase.firestore()

export default firebase