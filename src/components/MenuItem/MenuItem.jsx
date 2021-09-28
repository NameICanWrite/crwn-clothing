import React from 'react'

import classes from './MenuItem.module.sass'

const MenuItem = ({title, imageUrl, size}) => {
	return (
		<div 
			className={`${classes.menu_item} ${classes[size]}`} 
			style={{backgroundImage: `url(${imageUrl})`}}
		>
			<div 
				className={classes.background}
				style={{ backgroundImage: `url(${imageUrl})` }}
			></div>
			<div className={classes.content}>
				<div className={classes.title}>{title.toUpperCase()}</div>
				<div className={classes.subtitle}>Hat</div>
			</div>
		</div>
	)
}

export default MenuItem
