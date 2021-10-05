import classes from './CartDropdown.module.sass'

import React from 'react'
import Button from '../../Button/Button'
import { connect } from 'react-redux'
import CartItem from './CartItem/CartItem'
import { selectCartItems } from '../../../redux/cart/cart.selectors'

const CartDropdown = ({cartItems}) => {
	return (
		<div className={classes.container}>
			<div className={classes.cart_items}>
				{
					cartItems.map((item) => 
						<CartItem item={item} />
					)
				}
			</div>
			<Button>GO TO CHECKOUT</Button>
		</div>
	)
}

const mapStateToProps = (state) => ({cartItems: selectCartItems(state)})

export default connect(mapStateToProps)(CartDropdown)
