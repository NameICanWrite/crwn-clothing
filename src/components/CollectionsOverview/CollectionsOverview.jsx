import classes from './CollectionsOverview.module.sass'

import React from 'react'
import CollectionPreview from './CollectionPreview/CollectionPreview'
import { createStructuredSelector } from 'reselect'
import { selectShopCollections } from '../../redux/shop/shop.selectors'
import { connect } from 'react-redux'

const CollectionsOverview = ({collections}) => {
	return (
		<div className={classes.container}>
			{
				collections.map(({ id, ...otherProps }, index) =>
					<CollectionPreview key={id} {...otherProps} />
				)
			}
		</div>
	)
}

const mapStateToProps = createStructuredSelector({
	collections: selectShopCollections
})

export default connect(mapStateToProps)(CollectionsOverview)

