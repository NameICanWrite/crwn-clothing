import React from 'react'

import classes from './HomePage.module.sass'

const HomePage = () => {
	return (
		<div className={classes.homepage}>
			<div className={classes.directory_menu}>
				<div className={classes.menu_item}>
					<div className={classes.content_container}>
						<div className={classes.title}>Hat</div>
						<div className={classes.subtitle}>Hat</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default HomePage
