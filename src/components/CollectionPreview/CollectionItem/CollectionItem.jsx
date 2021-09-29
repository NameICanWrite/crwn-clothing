import classes from './CollectionItem.module.sass'

import React from 'react'

const CollectionItem = ({imageUrl, name, price}) => {
	return (
		<div className={classes.container}>
			<div className={classes.image} style={{backgroundImage: `url(${imageUrl})`}}/>
			<div className={classes.footer}>
				<span className={classes.name}>{name}</span>
				<span className={classes.price}>{price}</span>
			</div>
		</div>
	)
}

export default CollectionItem
