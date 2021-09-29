import classes from './Header.module.scss'

import React from 'react'
import { Link } from 'react-router-dom'

import { ReactComponent as Logo} from '../../assets/crown.svg'


const Header = () => {
	return (
		<div className={classes.container}>
			<Link to='/' className={classes.logo_container}>
				<Logo className={classes.logo} />
			</Link>
			<div className={classes.options}>
				<Link className={classes.option} to="/shop">SHOP</Link>
				<Link className={classes.option} to="/">CONTACT</Link>
				<Link className={classes.option} to="/">SIGN IN</Link>
			</div>
		</div>
	)
}

export default Header
