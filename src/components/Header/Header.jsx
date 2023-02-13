import classes from './Header.module.scss'

import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import { ReactComponent as Logo } from '../../assets/crown.svg'
import { auth } from '../../firebase/firebase.utils'
import CartIcon from './CartIcon/CartIcon'
import CartDropdown from './CartDropdown/CartDropdown'
import { selectCurrentUser } from '../../redux/user/user.selector'
import { signOut } from '../../redux/user/user.actions'
import CurrentUserContext from '../../contexts/currentUser.context'
import CartContext from '../../contexts/сart.context'


const Header = ({ signOut }) => {
	const currentUser = useContext(CurrentUserContext)
	const [showCartDropdown, setShowCartDropdown] = useState(false)
	const toggleShowCartDropdown = () => setShowCartDropdown(!showCartDropdown)
	return (
		<div className={classes.container}>
			<Link to='/' className={classes.logo_container}>
				<Logo className={classes.logo} />
			</Link>

			<CartContext.Provider value={{ show: showCartDropdown, toggleShow: toggleShowCartDropdown }}>
				<div className={classes.options}>
					<Link className={classes.option} to="/shop">SHOP</Link>
					<a className={classes.option} href="https://github.com/NameICanWrite/crwn-clothing">SOURCE CODE</a>
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
			</CartContext.Provider>

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
