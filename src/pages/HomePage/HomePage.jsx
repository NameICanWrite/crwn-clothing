import React from 'react'
import Directory from '../../components/Directory/Directory'

import classes from './HomePage.module.sass'

const HomePage = (props) => {
	return (
		<div className={classes.homepage}>
			<Directory />
		</div>
	)
}

export default HomePage
