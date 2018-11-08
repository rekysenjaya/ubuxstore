import createReducer from '../lib/createReducer';
import * as actionTypes from '../actions/actionTypes';

const initialState = {
    detail: {},
    loading: false,
};

export const detailStoreReducer = createReducer(initialState, {
    [actionTypes.DETAIL_STORE_REQUEST](state) {
        return { ...state, detail: {}, loading: true };
    },
    [actionTypes.DETAIL_STORE_SUCCESS](state, action) {
        return { ...state, detail: action.response.store, loading: false };
    },
    [actionTypes.DETAIL_STORE_FAILED](state) {
        return { ...state, loading: false };
    },
    [actionTypes.DETAIL_STORE_CLEAR_STATE]() {
        return initialState;
    }
});
