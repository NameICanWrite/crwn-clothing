import classes from './CartIcon.module.sass'
import {ReactComponent as ShoppingIcon} from '../../../assets/shopping-bag.svg'

import React, { useEffect } from 'react'
import { toggleCartDropdown } from '../../../redux/cart/cart.actions'
import { connect } from 'react-redux'
import { selectCartItemsCount } from '../../../redux/cart/cart.selectors'

const CartIcon = ({toggleCartDropdown, itemCount}) => {
	return (
		<div className={classes.container} onClick={toggleCartDropdown}>
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

const mapStateToProps = (state) => ({
	itemCount: selectCartItemsCount(state)
})

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon)
