import classes from './Header.module.scss'

import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import { ReactComponent as Logo } from '../../assets/crown.svg'
import { auth } from '../../firebase/firebase.utils'
import CartIcon from './CartIcon/CartIcon'
import CartDropdown from './CartDropdown/CartDropdown'
import { selectCurrentUser } from '../../redux/user/user.selector'
import { signOut } from '../../redux/user/user.actions'


const Header = ({ currentUser, showCartDropdown, signOut}) => {
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
						<div className={classes.option} onClick={() => signOut()} >SIGN OUT</div>
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

const mapStateToProps = (state) => {

	return {
		currentUser: selectCurrentUser(state),
		showCartDropdown: state.cart.showDropdown
	}
}

const mapDispatchToProps = (dispatch) => ({
	signOut: () => dispatch(signOut())
})

export default connect(mapStateToProps, mapDispatchToProps)(Header)
