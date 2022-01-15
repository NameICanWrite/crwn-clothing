import classes from './SignUp.module.sass'

import React, { Component } from 'react'
import FormInput from '../FormInput/FormInput'
import Button from '../Button/Button'
import { auth, createUserProfileDoc } from '../../firebase/firebase.utils'
import { connect } from 'react-redux'
import { signUpEmail } from '../../redux/user/user.actions'

class SignUp extends Component {
	constructor() {
		super()

		this.state = {
			displayName: '',
			email: '',
			password: '',
			confirmPassword: ''
		}
	}

	handleSubmit = async e => {
		e.preventDefault()
		const {email, password, confirmPassword, displayName} = this.state
		if (password != confirmPassword) {
			alert('passwords dont match')
			return
		}
		
		this.props.signUpWithEmail(email, password, displayName)
	}

	handleChange = event => {
		const { value, name } = event.target

		this.setState({ [name]: value })
	}

	render() {
		return (
			<div className={classes.container}>
				<h2>I do not have an account </h2>
				<span>sign up</span>

				<form onSubmit={this.handleSubmit}>
					<FormInput
						type="text"
						name='displayName'
						label='Your Name'
						value={this.state.displayName}
						required
						handleChange={this.handleChange}
					/>
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
					<FormInput
						type="password"
						name='confirmPassword'
						label='Confirm password'
						value={this.state.confirmPassword}
						required
						handleChange={this.handleChange}
					/>
					<Button type='submit'>Sign Up</Button>
				</form>

			</div>
		)
	}
}

const mapDispatchToProps = (dispatch) => ({
	signUpWithEmail: (email, password, displayName) => dispatch(signUpEmail({email, password, displayName}) )
})

export default connect(null, mapDispatchToProps)(SignUp)


