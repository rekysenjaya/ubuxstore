import { put, call } from 'redux-saga/effects';
import { getDetailStore } from '../services/detailStoreServices'
import { successLoadDetailsStoreAction, failureLoadDetailsStoreAction } from '../actions/detailStoreActions'

export function* detailStoreAsync(payload) {
    try {
        const response = yield call(getDetailStore, payload.payload)
        if (response.success) {
            yield put(successLoadDetailsStoreAction(response))
        } else {
            yield put(failureLoadDetailsStoreAction(response.error))
        }
    } catch (err) {
        yield put(failureLoadDetailsStoreAction(err))
    }
}