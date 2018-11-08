import {
    DETAIL_STORE_PRODUCT_REQUEST,
    DETAIL_STORE_PRODUCT_SUCCESS,
    DETAIL_STORE_PRODUCT_FAILED,
    DETAIL_STORE_PRODUCT_CLEAR_STATE,
} from './actionTypes'

export const requestLoadDetailsStoreProductAction = payload => {
    return {
        type: DETAIL_STORE_PRODUCT_REQUEST,
        payload
    }
}

export const successLoadDetailsStoreProductAction = response => {
    return {
        type: DETAIL_STORE_PRODUCT_SUCCESS,
        response,
    }
}

export const failureLoadDetailsStoreProductAction = error => {
    return {
        type: DETAIL_STORE_PRODUCT_FAILED,
        error,
    }
}

export const clearStateAction = () => {
    return {
        type: DETAIL_STORE_PRODUCT_CLEAR_STATE,
    }
}