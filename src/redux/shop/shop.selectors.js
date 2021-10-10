import { createSelector } from "reselect"
import memoize from "lodash.memoize"



const selectShop = state => state.shop

export const selectShopCollections = createSelector(
	[selectShop],
	shop => Array.from(shop.collections, ([name, value]) => value)
)

export const selectShopCollection = memoize((param) => createSelector(
	[selectShop],
	({collections}) => collections.get(param)
))
