import classes from './ShopPage.module.sass'

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { selectShopCollections } from '../../redux/shop/shop.selectors'
import CollectionsOverview from '../../components/CollectionsOverview/CollectionsOverview'
import { Route } from 'react-router'
import CollectionPage from '../CollectionPage/CollectionPage'
import { firestore, mapCollectionsSnapshot } from '../../firebase/firebase.utils'
import { updateCollections } from '../../redux/shop/shop.actions'
import WithSpinner from '../../components/WithSpinner/WithSpinner'

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview)
const CollectionPageWithSpinner = WithSpinner(CollectionPage)

class ShopPage extends Component {
	constructor() {
		super()

		this.state = {
			loading: true
		}
	}

	unsubscribeFromSnapshot = null

	componentDidMount() {
		const {updateCollections} = this.props
		const collectionRef = firestore.collection('collections')

		this.unsubscribeFromSnapshot =  collectionRef.onSnapshot(async snapshot => {
			const collections = mapCollectionsSnapshot(snapshot)
			updateCollections(collections)
			this.setState({loading: false})
		})
	}

	render() {
		const {match} = this.props
		const {collections} = this.state
		return (
			<div className={classes.shop_page}>
				<Route exact path={`${match.path}`}  render={(props) => <CollectionsOverviewWithSpinner isLoading={this.state.loading} {...props}/>}/>
				<Route path={`${match.path}/:collectionId`} render={(props) => <CollectionPageWithSpinner isLoading={this.state.loading} {...props}/>} />
			</div>
		)
	}
}

const mapStateToProps = createStructuredSelector({
})

const mapDispatchToProps = (dispatch) => ({
	updateCollections: (collections) => dispatch(updateCollections(collections))
})

export default connect(mapStateToProps, mapDispatchToProps)(ShopPage)
