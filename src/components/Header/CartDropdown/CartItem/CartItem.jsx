import classes from './CartItem.module.sass'

import React from 'react'

const CartItem = ({ item: { imageUrl, price, name, quantity } }) => {
	return (
		<div className={classes.container}>
			<img src={imageUrl} alt="item" />
			<div className={classes.details}>
				<span className={classes.name}>{name}</span>
				<span className={classes.price}>{quantity + ' x ' + price}</span>
			</div>
		</div>
	)
}

export default CartItem
