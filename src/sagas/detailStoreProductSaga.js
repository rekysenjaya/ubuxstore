import { put, call } from 'redux-saga/effects';
import { getDetailStoreProduct } from '../services/detailStoreServices'
import { successLoadDetailsStoreProductAction, failureLoadDetailsStoreProductAction } from '../actions/detailStoreProductActions'

export function* detailStoreProductAsync(payload) {
    try {
        const response = yield call(getDetailStoreProduct, payload.payload)
        if (response.success) {
            yield put(successLoadDetailsStoreProductAction(response))
        } else {
            yield put(failureLoadDetailsStoreProductAction(response.error))
        }
    } catch (err) {
        yield put(failureLoadDetailsStoreProductAction(err))
    }
}
