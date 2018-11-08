/* Redux saga class init
 * Called on app init on Entrypoint
 */
import { takeEvery, all } from 'redux-saga/effects';
import * as actionTypes from '../actions/actionTypes';
import { listAsync, searchListAsync } from './listSaga';
import { detailStoreAsync } from './detailStoreSaga';
import { detailStoreProductAsync } from './detailStoreProductSaga';

export default function* watch() {
    yield all([takeEvery(actionTypes.LIST_REQUEST, listAsync)]);
    yield all([takeEvery(actionTypes.LIST_SEARCH_REQUEST, searchListAsync)]);
    yield all([takeEvery(actionTypes.DETAIL_STORE_REQUEST, detailStoreAsync)]);
    yield all([takeEvery(actionTypes.DETAIL_STORE_PRODUCT_REQUEST, detailStoreProductAsync)]);
}
