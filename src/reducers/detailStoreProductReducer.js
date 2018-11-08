import createReducer from '../lib/createReducer';
import * as actionTypes from '../actions/actionTypes';

const initialState = {
    detailProduct: [],
    loading: false,
};

export const detailStoreProductReducer = createReducer(initialState, {
    [actionTypes.DETAIL_STORE_PRODUCT_REQUEST](state) {
        return { ...state, detailProduct: [], loading: true };
    },
    [actionTypes.DETAIL_STORE_PRODUCT_SUCCESS](state, action) {
        return { ...state, detailProduct: action.response.products, loading: false };
    },
    [actionTypes.DETAIL_STORE_PRODUCT_FAILED](state) {
        return { ...state, loading: false };
    },
    [actionTypes.DETAIL_STORE_PRODUCT_CLEAR_STATE]() {
        return initialState;
    }
});
