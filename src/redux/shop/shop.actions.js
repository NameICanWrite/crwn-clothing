import { firestore, mapCollectionsSnapshot } from "../../firebase/firebase.utils";
import { shopActionTypes } from "./shop.types";

export const updateCollections = (collections) => ({
	type: shopActionTypes.UPDATE_COLLECTIONS,
	payload: collections
})

export  const fetchCollectionsStart = () => ({
	type: shopActionTypes.FETCH_COLLECTIONS_START
})

export const fetchCollectionsSuccess = (payload) => ({
	type: shopActionTypes.FETCH_COLLECTIONS_SUCCESS,
	payload
})

export const fetchCollectionsFailure = (payload) => ({
	type: shopActionTypes.FETCH_COLLECTIONS_FAILURE,
	payload
})

export const fetchCollections = () => {
	return dispatch => {
				const collectionRef = firestore.collection('collections')
				dispatch(fetchCollectionsStart())

				return collectionRef.get().then(snapshot => {
					const collections = mapCollectionsSnapshot(snapshot)
					updateCollections(collections)
					dispatch(fetchCollectionsSuccess(collections))
				}).catch((err) => dispatch(fetchCollectionsFailure))
	}
}