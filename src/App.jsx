import logo from './logo.svg';
import classes from './App.module.sass';
import HomePage from './pages/HomePage/HomePage';
import { Route, Switch } from 'react-router';
import ShopPage from './pages/ShopPage/ShopPage';
import Header from './components/Header/Header';
import SignPage from './pages/SignPage/SignPage';
import { auth, createUserProfileDoc } from './firebase/firebase.utils.js'
import { Component } from 'react';
import { connect } from 'react-redux';
import { setCurrentUser } from './redux/user/user.actions';

class App extends Component {



	unsubscribeFromAuth() {

	}

	componentDidMount() {
		const {setCurrentUser} = this.props

		this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
			if (userAuth) {
				const userRef = await createUserProfileDoc(userAuth)

				userRef.onSnapshot(snapShot => {
					setCurrentUser({
							id: snapShot.id,
							...snapShot.data()
						})
				})
			} else setCurrentUser(null)

		})
	}

	componentWillUnmount() {
		this.unsubscribeFromAuth()
	}


	render() {
		return (
			<div className={classes.App}>
				<Header  />
				<Switch>
					<Route exact path='/' component={HomePage} />
					<Route path='/shop' component={ShopPage} />
					<Route path='/sign' component={SignPage} />
				</Switch>
			</div>
		);
	}

}

const mapDispatchToProps = (dispatch) => {
	return {
		setCurrentUser: user => dispatch(setCurrentUser(user))
	}
}

export default connect(null, mapDispatchToProps)(App);