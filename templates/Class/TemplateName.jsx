import classes from './TemplateName.module.sass'

import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

class TemplateName extends Component {
	constructor() {
		super()

		this.state = {

		}
	}


	render() {
		return (
			<div className={classes.container}>
				
			</div>
		)
	}
}

const mapStateToProps = createStructuredSelector({})
const mapDispatchToProps = (dispatch) => ({})

export default connect(mapStateToProps, mapDispatchToProps)(TemplateName)

