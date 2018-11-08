import {
    DETAIL_STORE_REQUEST,
    DETAIL_STORE_SUCCESS,
    DETAIL_STORE_FAILED,
    DETAIL_STORE_CLEAR_STATE,
} from './actionTypes'

export const requestLoadDetailsStoreAction = payload => {
    return {
        type: DETAIL_STORE_REQUEST,
        payload
    }
}

export const successLoadDetailsStoreAction = response => {
    return {
        type: DETAIL_STORE_SUCCESS,
        response,
    }
}

export const failureLoadDetailsStoreAction = error => {
    return {
        type: DETAIL_STORE_FAILED,
        error,
    }
}

export const clearStateAction = () => {
    return {
        type: DETAIL_STORE_CLEAR_STATE,
    }
}