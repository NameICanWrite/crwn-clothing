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

export const createUserProfileDoc = async (userAuth, additionaldata) => {
	if (!userAuth) return

	const userRef = firestore.doc(`users/${userAuth.uid}`)
	const snapShot = await userRef.get()

	if (!snapShot.exists) {
		const { displayName, email } = userAuth
		const createdAt = new Date()

		await userRef.set({
			displayName,
			email,
			createdAt,
			...additionaldata
		}).catch(err => console.log(err))
	}

	return userRef
}


export const auth = firebase.auth()
export const signInWithGoogle = () => auth.signInWithPopup(provider)
export const firestore = firebase.firestore()

export default firebase