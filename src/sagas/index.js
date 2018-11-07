/* Redux saga class init
 * Called on app init on Entrypoint
 */
import { takeEvery, all } from 'redux-saga/effects';
import * as actionTypes from '../actions/actionTypes';
import { listAsync, searchListAsync } from './listSaga';

export default function* watch() {
    yield all([takeEvery(actionTypes.LIST_REQUEST, listAsync)]);
    yield all([takeEvery(actionTypes.LIST_SEARCH_REQUEST, searchListAsync)]);
}
