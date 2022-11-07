import {all, call} from 'redux-saga/effects'
import { cartSagas } from './cart/cartSaga'
import { shopSagas } from './shop/shopSaga'
import { userSaga } from './userReducer/userSaga'

export default function* rootSaga() {
    yield all([
        call(shopSagas),
        call(userSaga),
        call(cartSagas)
    ])
}