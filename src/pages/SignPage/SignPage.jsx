import classes from './SignPage.module.sass'

import React, { Component, useEffect, useState } from 'react'
import SignIn from '../../components/SignIn/SignIn'
import SignUp from '../../components/SignUp/SignUp'
import { connect } from 'react-redux'
import { selectAuthError, selectCurrentUser } from '../../redux/user/user.selector'
import Button from '../../components/Button/Button'
import { signInGoogle } from '../../redux/user/user.actions'

const SignPage = ({error, signInWithGoogle}) => {
	return (
		<>
			<div className={classes.container}>
				<SignIn />
				<SignUp />
				
			</div>
			{/* <Button onClick={signInWithGoogle} className='blue' style={{margin: '0 auto', display: 'block'}}>Sign In or Register with Google</Button> */}
			<p style={{color: 'red'}}>{error?.message}</p>
		</>
		
	)
}

const mapStateToProps = (state) => ({
	error: selectAuthError(state)
})

const mapDispatchToProps = (dispatch) => ({
	signInWithGoogle: () => dispatch(signInGoogle())
})

export default (connect(mapStateToProps, mapDispatchToProps)(SignPage))
// export default (SignPage)


