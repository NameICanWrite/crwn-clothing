import React, { Component } from 'react'
import MenuItem from './MenuItem/MenuItem'

import classes from './Directory.module.sass'
import { createStructuredSelector } from 'reselect'
import { selectDirectorySections } from '../../redux/directory/directory.selectors'
import { connect } from 'react-redux'

class Directory extends Component {
	constructor() {
		super()

		this.state = {}
	}

	render() {
		return (
			<div className={classes.directory_menu}>
				{
					this.props.sections.map(({id, ...otherProps}) => 
						<MenuItem key={id} {...otherProps} />
					)
				}
			</div>
		)
	}
}

const mapStateToProps =createStructuredSelector({
	sections: selectDirectorySections
})

export default connect(mapStateToProps)(Directory)
