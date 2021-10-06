import {CartActionTypes} from './cart.types'

export const toggleCartDropdown = () => {
	return {
		type: CartActionTypes.TOGGLE_CART_DROPDOWN
	}
}

export const addItem = (item) => ({
	type: CartActionTypes.ADD_ITEM,
	payload: item
})

export const removeItem = (item) => ({
	type: CartActionTypes.REMOVE_ITEM,
	payload: item
})

export const decreaseQuantity = (item) => ({
	type: CartActionTypes.DECREASE_QUANTITY,
	payload: item
})