import { createSelector } from "reselect";

const selectCart = state => state.cart

export const selectCartItems = createSelector(
	[selectCart],
	(cart) => cart.cartItems
)

export const selectCartItemsCount = createSelector(
	[selectCartItems],
	cartItems => cartItems.reduce((accum, item) => accum + item.quantity, 0)
)

export const selectCartTotal = createSelector(
	selectCartItems,
	cartItems => cartItems.reduce((accum, item) => accum + item.quantity * item.price, 0)
)