import {
	call,
	put,
	takeEvery,
	takeLatest
} from '@redux-saga/core/effects'
import { auth, createUserProfileDoc, createUserWithEmailAndPassword, getCurrentAuth, signInWithEmailAndPassword, signInWithGoogle, signOut } from '../../firebase/firebase.utils';
import { authError, authMessage, setCurrentUser } from './user.actions';
import { UserActionTypes } from './user.types'



export function* dataFromAuth(userAuth, { displayName } = {}) {
		const userRef = yield call(
			createUserProfileDoc,
			userAuth.user,
			displayName
		)
		const userSnapshot = yield userRef.get()
		return {
			id: userSnapshot.id,
			...userSnapshot.data()
		}
}

export function* simpleAuth(auth, ...args) {
	try {
		const userAuth = yield call(auth, ...args)
		const userData = yield dataFromAuth(userAuth, ...args);
		yield put(setCurrentUser(userData))
		yield put(authMessage('sign in successfully'))
	} catch (error) {
		yield put(authError(error))
	}
}

export function* googleAuth({}) {
	yield simpleAuth(signInWithGoogle)
}

export function* emailAuth({payload: {email, password}}) {
	yield simpleAuth(signInWithEmailAndPassword, email, password)
}

export function* emailCreateAuth({ payload: {email, password, displayName} }) {
	yield simpleAuth(createUserWithEmailAndPassword, email, password, displayName)
}

export function* currentAuth() {
	yield simpleAuth(getCurrentAuth)
}

export function* signOutSaga() {
	yield signOut()
	yield put(setCurrentUser(null))
}

export default function* userSaga() {
	yield takeLatest(UserActionTypes.SIGN_IN_GOOGLE, googleAuth)
	yield takeLatest(UserActionTypes.SIGN_IN_EMAIL, emailAuth)
	yield takeLatest(UserActionTypes.SIGN_IN_CURRENT, currentAuth)
	yield takeLatest(UserActionTypes.SIGN_OUT, signOutSaga)
	yield takeLatest(UserActionTypes.SIGN_UP_EMAIL, emailCreateAuth)
}