import { CartActionTypes } from "./cart.types"
import { addItemToCart, decreaseQuantity } from "./cart.utils"

const INITIAL_STATE = {
	showDropdown: false,
	cartItems: []
}

const cartReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case CartActionTypes.TOGGLE_CART_DROPDOWN:
			return {
				...state,
				showDropdown: !state.showDropdown
			}

		case CartActionTypes.ADD_ITEM:
			return {
				...state,
				cartItems: addItemToCart(state.cartItems, action.payload)
			}

		case CartActionTypes.REMOVE_ITEM:
			return {
				...state,
				cartItems: state.cartItems.filter(item => item.id != action.payload.id)
			}

		case CartActionTypes.DECREASE_QUANTITY:
			return {
				...state,
				cartItems: decreaseQuantity(state.cartItems, action.payload)
			}
	
		default: return state
	}
}

export default cartReducer