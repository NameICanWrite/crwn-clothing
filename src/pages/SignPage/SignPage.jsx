import classes from './SignPage.module.sass'

import React, { Component } from 'react'
import SignIn from '../../components/SignIn/SignIn'
import SignUp from '../../components/SignUp/SignUp'

const SignPage = () => {
	return (
		<div className={classes.container}>
			<SignIn />
			<SignUp />
		</div>
	)
}

export default SignPage



