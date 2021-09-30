import classes from './SignPage.module.sass'

import React, { Component } from 'react'
import SignIn from '../../components/SignIn/SignIn'

const SignPage = () => {
	return (
		<div className={classes.container}>
			<SignIn />
		</div>
	)
}

export default SignPage



