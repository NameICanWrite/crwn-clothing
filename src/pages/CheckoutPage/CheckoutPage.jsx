import classes from './CheckoutPage.module.sass'

import React, { Component } from 'react'
import { createStructuredSelector } from 'reselect'
import { selectCartItems, selectCartTotal } from '../../redux/cart/cart.selectors'
import { connect } from 'react-redux'
import { toggleCartDropdown } from '../../redux/cart/cart.actions'
import CheckoutItem from '../../components/CheckoutItem/CheckoutItem'

class CheckoutPage extends Component {
	constructor() {
		super()

		this.state = {

		}
	}

	componentDidMount() {
		this.props.dispatch(toggleCartDropdown())
	}

	render() {
		const {total, cartItems} = this.props
		return (
			<div className={classes.container}>
				<div className={classes.header}>
					<div className={classes.header_block}>
						<span>Product</span>
					</div>
					<div className={classes.header_block}>
						<span>Description</span>
					</div>
					<div className={classes.header_block}>
						<span>Quantity</span>
					</div>
					<div className={classes.header_block}>
						<span>Price</span>
					</div>
					<div className={classes.header_block}>
						<span>Remove</span>
					</div>
				</div>
				{
					cartItems.map((item) => 
						<CheckoutItem key={item.id} item={item} />
					)
				}
				<div className={classes.total}>${total}</div>
			</div>
		)
	}
}

const mapStateToProps = createStructuredSelector({
	cartItems:selectCartItems,
	total: selectCartTotal
})

export default connect(mapStateToProps)(CheckoutPage)


