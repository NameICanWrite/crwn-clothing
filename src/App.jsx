import logo from './logo.svg';
import classes from './App.module.sass';
import HomePage from './pages/HomePage/HomePage';
import { Redirect, Route, Switch } from 'react-router';
import ShopPage from './pages/ShopPage/ShopPage';
import Header from './components/Header/Header';
import SignPage from './pages/SignPage/SignPage';
import { addCollection, auth, createUserProfileDoc } from './firebase/firebase.utils.js'
import { Component } from 'react';
import { connect } from 'react-redux';
import { setCurrentUser, signInCurrent } from './redux/user/user.actions';
import CartIcon from './components/Header/CartIcon/CartIcon';
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from './redux/user/user.selector';
import CheckoutPage from './pages/CheckoutPage/CheckoutPage';
import { selectShopCollections } from './redux/shop/shop.selectors';

class App extends Component {

	componentDidMount() {
		this.props.authWithCurrentCredentials()
	}


	render() {
		return (
			<div className={classes.App}>
				<Header  />
				<Switch>
					<Route exact path='/' component={HomePage} />
					<Route path='/shop' component={ShopPage} />
					<Route exact path='/checkout' component={CheckoutPage} />
					<Route path='/sign' render={() => this.props.currentUser ? <Redirect to='/' /> : <SignPage />} />
				</Switch>
			</div>
		);
	}

}

const mapStateToProps = createStructuredSelector({
	currentUser: selectCurrentUser,
})

const mapDispatchToProps = (dispatch) => {
	return {
		setCurrentUser: user => dispatch(setCurrentUser(user)),
		authWithCurrentCredentials: () => dispatch(signInCurrent())
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(App);