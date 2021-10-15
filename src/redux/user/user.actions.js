import { UserActionTypes } from "./user.types"

export const setCurrentUser = (payload) => {
	return {
		type: UserActionTypes.SET_CURRENT_USER,
		payload
	}
}

export const authMessage = (payload) => ({
	type: UserActionTypes.AUTH_MESSAGE,
	payload
})

export const authError = (payload) => ({
	type: UserActionTypes.AUTH_ERROR,
	payload
})

export const signInGoogle = (payload) => ({
	type: UserActionTypes.SIGN_IN_GOOGLE,
	payload
})






