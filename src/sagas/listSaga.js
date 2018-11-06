import { put, call } from 'redux-saga/effects';
import { getList } from '../services/listServices'
import { successLoadListAction, failureLoadListAction } from '../actions/listActions'

export default function* listAsync(payload) {
    try {
        const response = yield call(getList)
        if (response.success) {
            yield put(successLoadListAction(response))
        } else {
            yield put(failureLoadListAction(response.error))
        }
    } catch (err) {
        yield put(failureLoadListAction(errors.serverError))
    }
}
