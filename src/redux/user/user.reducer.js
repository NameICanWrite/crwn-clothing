import { UserActionTypes } from "./user.types"

const INITIAL_STATE = {
	currentUser: null
}

const userReducer = (state = INITIAL_STATE, action) => {
switch (action.type) {
	case UserActionTypes.SET_CURRENT_USER:
		return {
			...state,
			currentUser: action.payload
		}
	case UserActionTypes.AUTH_MESSAGE:
		return {
			...state,
			message: action.payload
		}
	case UserActionTypes.AUTH_ERROR:
		return {
			...state,
			error: action.payload
		}
	default:
		return state
}
}

export default userReducer