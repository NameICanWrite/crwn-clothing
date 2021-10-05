import classes from './CartIcon.module.sass'
import {ReactComponent as ShoppingIcon} from '../../../assets/shopping-bag.svg'

import React from 'react'
import { toggleCartDropdown } from '../../../redux/cart/cart.actions'
import { connect } from 'react-redux'

const CartIcon = ({toggleCartDropdown}) => {
	return (
		<div className={classes.container} onClick={toggleCartDropdown}>
			<ShoppingIcon className={classes.shopping_icon} />
			<span className={classes.item_count}></span>
		</div>
	)
}

const mapDispatchToProps = (dispatch) => {
	return {
		toggleCartDropdown: () => dispatch(toggleCartDropdown())
	}
}

export default connect(null, mapDispatchToProps)(CartIcon)
