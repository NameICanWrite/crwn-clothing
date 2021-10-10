import classes from './CollectionPage.module.sass'

import React, { Component } from 'react'
import { createStructuredSelector } from 'reselect'
import { selectShopCollection } from '../../redux/shop/shop.selectors'
import { connect } from 'react-redux'
import CollectionItem from '../../components/CollectionsOverview/CollectionPreview/CollectionItem/CollectionItem'

class CollectionPage extends Component {
	constructor() {
		super()

		this.state = {

		}
	}


	render() {
		const { collection } = this.props
		const { title, items } = collection
		return (
			<div className={classes.container}>
				<div className={classes.title}>{title}</div>
				<div className={classes.items}>
					{
						items.map((item) =>
							<CollectionItem key={item.id} item={item} />
						)
					}
				</div>

			</div>
		)
	}
}

const mapStateToProps = (state, ownProps) => ({
	collection: selectShopCollection(ownProps.match.params.collectionId)(state)
})

export default connect(mapStateToProps)(CollectionPage)
