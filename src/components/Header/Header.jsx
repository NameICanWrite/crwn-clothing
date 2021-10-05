import classes from './Header.module.scss'

import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import { ReactComponent as Logo } from '../../assets/crown.svg'
import { auth } from '../../firebase/firebase.utils'
import CartIcon from './CartIcon/CartIcon'
import CartDropdown from './CartDropdown/CartDropdown'


const Header = ({ currentUser, showCartDropdown }) => {
	useEffect(() => console.log(CartIcon), [])
	return (
		<div className={classes.container}>
			<Link to='/' className={classes.logo_container}>
				<Logo className={classes.logo} />
			</Link>


			<div className={classes.options}>
				<Link className={classes.option} to="/shop">SHOP</Link>
				<Link className={classes.option} to="/">CONTACT</Link>
				{
					currentUser
						?
						<div className={classes.option} onClick={() => auth.signOut()} >SIGN OUT</div>
						:
						<Link className={classes.option} to="/sign">SIGN IN</Link>
				}
				<CartIcon />
			</div>
			{
				showCartDropdown &&
				<CartDropdown />
			}
		</div>
	)
}

const mapStateToProps = ({ user: { currentUser }, cart }) => {

	return {
		currentUser,
		showCartDropdown: cart.show
	}
}

export default connect(mapStateToProps)(Header)
