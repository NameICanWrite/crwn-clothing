import classes from './ShopPage.module.sass'

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { SHOP_DATA } from './shop.data'
import CollectionPreview from '../../components/CollectionPreview/CollectionPreview'

export default class ShopPage extends Component {
	constructor() {
		super()

		this.state = {
			collections: SHOP_DATA
		}
	}

	render() {
		const {collections} = this.state
		return (
			<div className={classes.shop_page}>
				{
					collections.map(({id, ...otherProps}, index) => 
							<CollectionPreview key={id} {...otherProps} />
						)
				}
			</div>
		)
	}
}
