import {
    CART_SET,
    CART_DELETE,
    CART_CLEAR,
} from './actionTypes'

export const setListCartAction = (payload) => {
    return {
        type: CART_SET,
        payload
    }
}

export const deleteItemListCartAction = (payload) => {
    return {
        type: CART_DELETE,
        payload
    }
}

export const clearStateAction = () => {
    return {
        type: CART_CLEAR,
    }
}