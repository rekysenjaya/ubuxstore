import React, { Component } from 'react';
import { View } from 'react-native'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { deleteItemListCartAction, clearStateAction } from '../../actions/cartActions'

import Headers from '../../components/Headers'
import CartList from '../../components/CartList'

import styles from './styles'

class Selected extends Component {
    render() {
        return (
            <Headers title={'Cart List'} clearCart={() => this.props.clearStateActions()} goBack={() => this.props.navigation.goBack()} navigate={() => this.props.navigation.push('Selected')} >
                <CartList cart={this.props.cart} cartDelete={this.props.deleteItemListCartActions} />
                <View style={styles.border} />
            </Headers>
        );
    }
}

Selected.propTypes = {
    cart: PropTypes.array,
    navigation: PropTypes.object,
    clearStateActions: PropTypes.func,
    deleteItemListCartActions: PropTypes.func
}

function mapStateToProps(state) {
    return {
        cart: state.cartReducer.cart
    };
}
function mapDispatchToProps(dispatch) {
    return {
        deleteItemListCartActions(payload) {
            dispatch(deleteItemListCartAction(payload))
        },
        clearStateActions() {
            dispatch(clearStateAction())
        },
    };
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Selected);

