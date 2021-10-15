import {
	call,
	spawn,
	all
} from '@redux-saga/core/effects'
import shopSaga from './shop/shop.saga'
import userSaga from './user/user.saga'

export default function* rootSaga() {
	const sagas = [shopSaga, userSaga]

	const retrySagas = yield sagas.map((saga) => {
		return spawn(function* () {
			while (true) {
				try {
					yield call(saga)
					break;
				} catch (err) {
					console.log(err)
				}
			}
		})
	})

	yield all(retrySagas)
}