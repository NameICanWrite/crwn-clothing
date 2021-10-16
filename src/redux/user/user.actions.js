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

export const signInEmail = (payload) => ({
	type: UserActionTypes.SIGN_IN_EMAIL,
	payload
})

export const signUpEmail = (payload) => ({
	type: UserActionTypes.SIGN_UP_EMAIL,
	payload
})


export const signInCurrent = (payload) => ({
	type: UserActionTypes.SIGN_IN_CURRENT,
	payload
})

export const signOut = (payload) => ({
	type: UserActionTypes.SIGN_OUT,
	payload
})








