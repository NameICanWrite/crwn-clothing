import classes from './CollectionItem.module.sass'

import React from 'react'
import Button from '../../../Button/Button'
import { addItem } from '../../../../redux/cart/cart.actions'
import { connect } from 'react-redux'

const CollectionItem = ({item, addItem}) => {
	const {imageUrl, name, price} = item 
	return (
		<div className={classes.container}>
			<div className={classes.image} style={{backgroundImage: `url(${imageUrl})`}}/>
			<div className={classes.footer}>
				<span className={classes.name}>{name}</span>
				<span className={classes.price}>{price}</span>
			</div>
			<Button 
				className='inverted' 
				style={{width: '80%', opacity: 0.7, position: 'absolute', top: '255px'}} 
				onClick={() => addItem(item)}
			>
				ADD TO ART
			</Button>
		</div>
	)
}

const mapDispatchToProps = (dispatch) => ({
	addItem: item => dispatch(addItem(item))
})

export default connect(null, mapDispatchToProps)(CollectionItem)
