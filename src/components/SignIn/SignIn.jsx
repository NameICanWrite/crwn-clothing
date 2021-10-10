import classes from './SignIn.module.sass'

import React, { Component } from 'react'
import FormInput from '../FormInput/FormInput'
import Button from '../Button/Button'
import { auth, signInWithGoogle } from '../../firebase/firebase.utils'

export default class SignIn extends Component {
	constructor() {
		super()

		this.state = {
			email: '',
			password: ''
		}
	}

	handleSubmit = event => {
		event.preventDefault()
		const {email, password} = this.state
		try {
			auth.signInWithEmailAndPassword(email, password)
			this.setState({ email: '', password: '' })
		} catch(err) {
			console.log(err.message);
		}
	}

	handleChange = event => {
		const { value, name } = event.target

		this.setState({ [name]: value })
	}

	render() {
		return (
			<div className={classes.container}>
				<h2>I already have an account</h2>
				<span>Sign in with your email</span>

				<form onSubmit={this.handleSubmit}>
					<FormInput
						type="email"
						name='email'
						label='email'
						value={this.state.email}
						required
						handleChange={this.handleChange}
					/>
					<FormInput
						type="password"
						name='password'
						label='password'
						value={this.state.password}
						required
						handleChange={this.handleChange}
					/>
					<div className={classes.buttons}>
						<Button type="submit" >Sign In</Button>
						<Button onClick={signInWithGoogle} className='blue' >Sign In with Google</Button>
					</div>
				</form>
			</div>
		)
	}
}


