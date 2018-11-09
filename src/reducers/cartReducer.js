import createReducer from '../lib/createReducer';
import * as actionTypes from '../actions/actionTypes';

const initialState = {
    cart: [],
};

export const cartReducer = createReducer(initialState, {
    [actionTypes.CART_SET](state, actions) {
        return { ...state, cart: [...state.cart, actions.payload] };
    },
    [actionTypes.CART_DELETE](state, actions) {
        const cart = state.cart.filter((v, i) => actions.payload !== i)
        return { ...state, cart };
    },
    [actionTypes.CART_CLEAR]() {
        return initialState;
    }
});
