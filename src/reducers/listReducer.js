import createReducer from '../lib/createReducer';
import * as actionTypes from '../actions/actionTypes';

const initialState = {
    list: [],
    loading: false,
};

export const listReducer = createReducer(initialState, {
    [actionTypes.LIST_REQUEST](state, action) {
        return { ...state, };
    },
    [actionTypes.LIST_SUCCESS](state) {
        return { ...state };
    },
    [actionTypes.LIST_FAILED](state) {
        return { ...state };
    },
    [actionTypes.LIST_CLEAR_STATE](state) {
        return initialState;
    }
});
