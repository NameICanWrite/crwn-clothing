import classes from './CartDropdown.module.sass'

import React from 'react'
import Button from '../../Button/Button'
import { connect } from 'react-redux'
import CartItem from './CartItem/CartItem'
import { selectCartItems } from '../../../redux/cart/cart.selectors'
import { withRouter } from 'react-router-dom'
import { useHistory } from 'react-router'

const CartDropdown = ({cartItems}) => {
	const history = useHistory()
	return (
		<div className={classes.container}>
			<div className={classes.cart_items}>
				{
					cartItems.length 
						?
							cartItems.map((item) => 
								<CartItem key={item.id} item={item} />
							)
						:
							<span className={classes.empty_message}>Your cart is empty</span>
				}
			</div>
			<Button onClick={() => history.push('/checkout')}>GO TO CHECKOUT</Button>
		</div>
	)
}

const mapStateToProps = (state) => ({cartItems: selectCartItems(state)})

export default connect(mapStateToProps)(CartDropdown)
