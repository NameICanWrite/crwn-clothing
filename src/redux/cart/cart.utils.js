export const addItemToCart = (cartItems, newItem) => {
	const isDuplicate = cartItems.some(item => item.id == newItem.id)
	if (!isDuplicate) {
		return [...cartItems, {...newItem, quantity: 1}]
	} else {
		return cartItems.map((item) => 
			item.id == newItem.id ? {...item, quantity: item.quantity + 1} : item
		)
	}
}


export const decreaseQuantity = (cartItems, target) => {
	return cartItems
		.map((item) => item.id == target.id ? {...item, quantity: item.quantity - 1} : item)
		.filter(item => item.quantity > 0)
}