import classes from './SignIn.module.sass'

import React, { Component, useEffect, useState } from 'react'
import FormInput from '../FormInput/FormInput'
import Button from '../Button/Button'
import { auth, signInWithGoogle } from '../../firebase/firebase.utils'
import { connect } from 'react-redux'
import { UserActionTypes } from '../../redux/user/user.types'
import { signInEmail, signInGoogle } from '../../redux/user/user.actions'
import { useDispatch } from 'react-redux'

function SignIn({ signInWithGoogle, signInWithEmail }) {

	const [credentials, setCredentials] = useState({ email: '', password: '' })
	const { email, password } = credentials

	const handleSubmit = event => {
		event.preventDefault()
		signInWithEmail(credentials.email, credentials.password)
	}

	const handleChange = event => {
		const { value, name } = event.target

		setCredentials({ ...credentials, [name]: value })
	}

	return (
		<div className={classes.container}>
			{/* <h2>I already have an account</h2> */}
			<h1>Sign in with your email</h1>

			<form onSubmit={handleSubmit}>
				<FormInput
					type="email"
					name='email'
					label='Email'
					value={email}
					required
					handleChange={handleChange}
				/>
				<FormInput
					type="password"
					name='password'
					label='Password'
					value={password}
					required
					handleChange={handleChange}
				/>
				<div className={classes.buttons}>
					<Button type="submit" >Sign In</Button>
					
				</div>
				<Button onClick={signInWithGoogle} className='blue' style={{marginTop: '50px'}}>Sign In or Register with Google</Button>
			</form>
		</div>
	)
}

const mapDispatchToProps = (dispatch) => ({
	signInWithGoogle: () => dispatch(signInGoogle()),
	signInWithEmail: (email, password) => dispatch(signInEmail({ email, password }))
})

export default connect(null, mapDispatchToProps)(SignIn)


