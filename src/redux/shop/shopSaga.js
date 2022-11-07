import {takeLatest, all, call, put} from 'redux-saga/effects'
import { convertCollectionsSnapshotToMap, firestore } from '../../firebase/Utils';
import { fetchCollectionFailure, fetchCollectionSuccess } from './shopAction';
import ShopActionTypes from './shopTypes';

export function* fetchCollectionAsync() {
    try{
        const collectionRef = firestore.collection('collections');
        const snapshot = collectionRef.get();
        const data = snapshot.then(snapshot => convertCollectionsSnapshotToMap(snapshot))
        // const collectionsMap = yield call(convertCollectionsSnapshotToMap, snapshot) 
        const collectionsMap = yield data 
        yield put(fetchCollectionSuccess(collectionsMap));
    }
    catch(error) {
        yield put(fetchCollectionFailure(error.message))
    } 
}

export function* fetchCollectionStart() {
    yield takeLatest(ShopActionTypes.FETCH_COLLECTIONS_START, fetchCollectionAsync)
}

export function* shopSagas() {
    yield all([
        call(fetchCollectionStart)
    ])
}