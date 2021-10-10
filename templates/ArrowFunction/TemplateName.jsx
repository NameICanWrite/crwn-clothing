import classes from './TemplateName.module.sass'

import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

const TemplateName = () => {
	return (
		<div className={classes.container}>
			
		</div>
	)
}

const mapStateToProps = createStructuredSelector({})
const mapDispatchToProps = (dispatch) => ({})

export default connect(mapStateToProps, mapDispatchToProps)(TemplateName)


