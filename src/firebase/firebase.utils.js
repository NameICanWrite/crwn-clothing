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

const googleProvider = new firebase.auth.GoogleAuthProvider()
googleProvider.setCustomParameters({
	prompt: 'select_account'
})

export const createUserProfileDoc = async (userAuth, additionaldata) => {
	if (!userAuth) return

	const userRef = firestore.doc(`users/${userAuth.uid}`)
	const collectionRef = firestore.collection('users')

	const snapShot = await userRef.get()
	const collectionSnapshot = await collectionRef.get()

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

export const addCollection = async (key, docs) => {
	const collectionRef = firestore.collection(key)
	const batch = firestore.batch()

	docs.forEach(doc => {
		const newDocRef = collectionRef.doc()
		batch.set(newDocRef, doc)
	})

	return await batch.commit()
}

export const mapCollectionsSnapshot = (collections) => {
	collections = collections.docs.map(doc => {
		const {title, items, id} = doc.data()
		return {
			id,
			title,
			routeName: encodeURI(title.toLowerCase()),
			items
		}
	})

	const collectionsMap = new Map(collections.map(item => [item.title.toLowerCase(), item]))

	return collectionsMap
}


export const auth = firebase.auth()
export const signInWithGoogle = () => auth.signInWithPopup(googleProvider)
export const firestore = firebase.firestore()

export default firebase