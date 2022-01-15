import classes from './CartIcon.module.sass'
import {ReactComponent as ShoppingIcon} from '../../../assets/shopping-bag.svg'

import React, { useContext, useEffect } from 'react'
import { toggleCartDropdown } from '../../../redux/cart/cart.actions'
import { connect } from 'react-redux'
import { selectCartItemsCount } from '../../../redux/cart/cart.selectors'
import { createStructuredSelector } from 'reselect'
import CartContext from '../../../contexts/сart.context'

const CartIcon = ({ itemCount}) => {
	const toggleShowDropdown = useContext(CartContext).toggleShow
	return (
		<div className={classes.container} onClick={toggleShowDropdown}>
			<ShoppingIcon className={classes.shopping_icon} />
			<span className={classes.item_count}>{itemCount}</span>
		</div>
	)
}

const mapDispatchToProps = (dispatch) => {
	return {
		toggleCartDropdown: () => dispatch(toggleCartDropdown())
	}
}

const mapStateToProps = (state) => createStructuredSelector({
	itemCount: selectCartItemsCount
})

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon)
