import logo from './logo.svg';
import classes from './App.module.sass';
import HomePage from './pages/HomePage/HomePage';
import { Route, Switch } from 'react-router';
import ShopPage from './pages/ShopPage/ShopPage';
import Header from './components/Header/Header';
import SignPage from './pages/SignPage/SignPage';
import { auth, createUserProfileDoc } from './firebase/firebase.utils.js'
import { Component } from 'react';

class App extends Component {
	constructor() {
		super()

		this.state = {
			currentUser: null
		}
	}

	unsubscribeFromAuth() {

	}

	componentDidMount() {
		this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
			if (userAuth) {
				const userRef = await createUserProfileDoc(userAuth)
				
				userRef.onSnapshot(snapShot => {
					this.setState({
						currentUser: {
							id: snapShot.id,
							...snapShot.data()
						}
					}, () => console.log(this.state))
				})
			} else this.setState({currentUser: null})

		})
	}

	componentWillUnmount() {
		this.unsubscribeFromAuth()
	}


	render() {
		return (
			<div className={classes.App}>
				<Header currentUser={this.state.currentUser} />
				<Switch>
					<Route exact path='/' component={HomePage} />
					<Route path='/shop' component={ShopPage} />
					<Route path='/sign' component={SignPage} />
				</Switch>
			</div>
		);
	}

}

export default App;