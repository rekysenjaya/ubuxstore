import {
    LIST_REQUEST,
    LIST_SUCCESS,
    LIST_FAILED,
    LIST_CLEAR_STATE,
} from './actionTypes'

export const requestLoadListAction = payload => {
    return {
        type: LIST_REQUEST,
        payload,
    }
}

export const successLoadListAction = response => {
    return {
        type: LIST_SUCCESS,
        response,
    }
}

export const failureLoadListAction = error => {
    return {
        type: LIST_FAILED,
        error,
    }
}

export const clearStateAction = updateState => {
    return {
        type: LIST_CLEAR_STATE,
        updateState,
    }
}