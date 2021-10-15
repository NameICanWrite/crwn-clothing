import {
	call,
	put,
	takeEvery,
	takeLatest
} from '@redux-saga/core/effects'
import { auth, createUserProfileDoc, signInWithGoogle } from '../../firebase/firebase.utils';
import { authError, authMessage, setCurrentUser } from './user.actions';
import { UserActionTypes } from './user.types'



export function* dataFromAuth(userAuth, additionalData) {
		const userRef = yield call(
			createUserProfileDoc,
			userAuth.user
		)
		const userSnapshot = yield userRef.get()
		return {
			id: userSnapshot.id,
			...userSnapshot.data()
		}
}

export function* signInGoogle() {
	console.log('trying google in')
	try {
		const userAuth = yield call(signInWithGoogle)
		const userData = yield dataFromAuth(userAuth);
		yield put(setCurrentUser(userData))
		yield put(authMessage('sign in successfully'))
	} catch (error) {
		yield put(authError(error))
	}
}




export default function* userSaga() {
	
	const action = yield takeLatest(UserActionTypes.SIGN_IN_GOOGLE, signInGoogle)
	console.log('hello, im usersaga')
}