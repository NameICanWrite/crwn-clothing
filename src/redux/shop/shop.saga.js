import { call, put, takeEvery } from '@redux-saga/core/effects'
import { firestore, mapCollectionsSnapshot } from '../../firebase/firebase.utils'
import { fetchCollectionsFailure, fetchCollectionsSuccess } from './shop.actions'
import { shopActionTypes } from './shop.types'


export function* fetchCollections() {
console.log('trying to fetch collections')
	try {
		const collectionRef = firestore.collection('collections')
		const snapshot = yield collectionRef.get()
		const collections = yield call(mapCollectionsSnapshot, snapshot)
		yield put(fetchCollectionsSuccess(collections))
	} catch(err) {
		yield put(fetchCollectionsFailure(err.message))
	}
}

export default function* shopSaga() {
	yield takeEvery(shopActionTypes.FETCH_COLLECTIONS_START, fetchCollections)
}