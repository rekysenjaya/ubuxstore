import { put, call } from 'redux-saga/effects';
import { getList, searchList } from '../services/listServices'
import { successLoadListAction, failureLoadListAction } from '../actions/listActions'

export function* listAsync() {
    try {
        const response = yield call(getList)
        if (response.success) {
            yield put(successLoadListAction(response))
        } else {
            yield put(failureLoadListAction(response.error))
        }
    } catch (err) {
        yield put(failureLoadListAction(err))
    }
}

export function* searchListAsync(payload) {
    try {
        const response = yield call(searchList, payload.payload)
        if (response.success) {
            yield put(successLoadListAction(response))
        } else {
            yield put(failureLoadListAction(response.error))
        }
    } catch (err) {
        yield put(failureLoadListAction(err))
    }
}
