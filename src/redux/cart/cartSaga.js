import { takeLatest, put, all, call  } from 'redux-saga/effects'
import userActionTypes from '../userReducer/userTypees'
import { clearCart } from './cartAction'

export function* clearCartOnSignOut(){
    yield put(clearCart())
}

export function* onSignOutSuccess(){
    yield takeLatest(userActionTypes.SIGNOUT_SUCCESS, clearCartOnSignOut)
}

export function* cartSagas(){
    yield all([
        call(onSignOutSuccess)
    ])
}