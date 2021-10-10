import { collections } from "../../data"
import { shopActionTypes } from "./shop.types"

const INITIAL_STATE = {
	collections: new Map()
}

export const shopReducer = (state = INITIAL_STATE, action) => {
	
	switch (action.type) {
		case shopActionTypes.UPDATE_COLLECTIONS:
			return {
				...state,
				collections: action.payload
			}
		default:
			return state
	}
}

export default shopReducer