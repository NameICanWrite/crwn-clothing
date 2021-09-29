import React from 'react'
import { withRouter } from 'react-router'

import classes from './MenuItem.module.sass'

const MenuItem = ({title, imageUrl, size, history, linkUrl, match}) => {
	return (
		<div 
			className={`${classes.menu_item} ${classes[size]}`} 
			style={{backgroundImage: `url(${imageUrl})`}}
			onClick={() => history.push(`${match.url}${linkUrl}`)}
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

export default withRouter(MenuItem)
