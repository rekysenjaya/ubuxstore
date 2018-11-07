import createReducer from '../lib/createReducer';
import * as actionTypes from '../actions/actionTypes';

const initialState = {
    list: [],
    loading: false,
};

export const listReducer = createReducer(initialState, {
    [actionTypes.LIST_REQUEST](state, action) {
        return { ...state, list: [], loading: true };
    },
    [actionTypes.LIST_SEARCH_REQUEST](state, action) {
        return { ...state, list: [], loading: true };
    },
    [actionTypes.LIST_SUCCESS](state, action) {
        return { ...state, list: action.response.stores, loading: false };
    },
    [actionTypes.LIST_FAILED](state) {
        return { ...state, loading: false };
    },
    [actionTypes.LIST_CLEAR_STATE](state) {
        return initialState;
    }
});
