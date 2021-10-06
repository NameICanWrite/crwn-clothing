import classes from './CheckoutItem.module.sass'

import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { addItem, decreaseQuantity, removeItem } from '../../redux/cart/cart.actions'

const CheckoutItem = ({item, removeItem, addItem, decreaseQuantity}) => {
	useEffect(() => console.log(item), [])
	const {name, imageUrl, price, quantity} = item
	return (
		<div className={classes.container}>
			<div className={classes.image_container}>
				<img src={imageUrl} alt="item" />
			</div>
			<span className={classes.name}>{name}</span>
			<span className={classes.quantity}>
				<span className={classes.arrow} onClick={() => decreaseQuantity(item)}>&#10094;</span>
				<span className={classes.value}>{quantity}</span>
				<span className={classes.arrow} onClick={() => addItem(item)}>&#10095;</span>
			</span>
			<span className={classes.price}>{price}</span>
			<div 
			className={classes.remove_button}
			onClick={() => removeItem(item)}
			>&#10005;</div>
		</div>
	)
}

const mapDispatchToProps = dispatch => ({
	removeItem: item => dispatch(removeItem(item)),
	addItem: item => dispatch(addItem(item)),
	decreaseQuantity: item => dispatch(decreaseQuantity(item))
})

export default connect(null, mapDispatchToProps)(CheckoutItem)
