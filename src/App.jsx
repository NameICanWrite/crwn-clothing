import React, { lazy, Suspense } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import { auth, createUserProfileDoc } from './firebase/firebase.utils';
import CurrentUserContext from './contexts/currentUser.context';

import Header from './components/Header/Header';


const HomePage = lazy(() => import('./pages/HomePage/HomePage'))
const ShopPage = lazy(() => import('./pages/ShopPage/ShopPage'))
const CheckoutPage = lazy(() => import('./pages/CheckoutPage/CheckoutPage'))
const SignInAndSignUpPage = lazy(() => import('./pages/SignPage/SignPage'))

class App extends React.Component {
	constructor() {
		super()

		this.state = {
			currentUser: null
		}
	}
	unsubscribeFromAuth = null;

	componentDidMount() {
		console.log(this.props.match);
		const { setCurrentUser } = this.props;

		this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
			if (userAuth) {
				const userRef = await createUserProfileDoc(userAuth);

				userRef.onSnapshot(snapShot => {
					this.setState({
						currentUser: {
							id: snapShot.id,
							...snapShot.data()
						}
					});
				});
			}

			this.setState({ currentUser: userAuth });
		});
	}

	componentWillUnmount() {
		this.unsubscribeFromAuth();
	}

	render() {
		return (
			<div>
				<CurrentUserContext.Provider value={this.state.currentUser}>
					<Header />
				</CurrentUserContext.Provider>

				<Switch>
					<Suspense fallback={<div>..loading</div>}>
						<Route exact path='/' component={HomePage} />
						<Route path='/shop' component={ShopPage} />
						<Route exact path='/checkout' component={CheckoutPage} />
						<Route
							exact
							path='/sign'
							render={() =>
								this.state.currentUser ? (
									<Redirect to='/' />
								) : (
									<SignInAndSignUpPage />
								)
							}
						/>
					</Suspense>

				</Switch>
			</div>
		);
	}
}

export default App