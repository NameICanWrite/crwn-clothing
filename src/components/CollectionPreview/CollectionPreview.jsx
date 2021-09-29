import classes from './CollectionPreview.module.sass'

import React from 'react'
import CollectionItem from './CollectionItem/CollectionItem'

const CollectionPreview = ({ title, items }) => {
	return (
		<div className={classes.container}>
			<h1 className={classes.title}>{title.toUpperCase()}</h1>
			<div className={classes.preview}>
				{
					items.filter((item, index) => index < 4).map(({id, ...otherProps}) =>
						<CollectionItem key={id} {...otherProps}/>
					)
				}
			</div>
		</div>
	)
}

export default CollectionPreview
